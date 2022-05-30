import { useState, lazy, Suspense } from 'react';
import { ErrorBoundary } from "react-error-boundary";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from '@mui/material/LinearProgress';

const AdditionalInfo = lazy(async () => {
  const res = await import('./helpers/AdditionalInfo');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return res;
});

const Loader = () => (
  <Box width={200}>
    <LinearProgress />
  </Box>
);

class AsyncResource {
  constructor(promise) {
    this.data = undefined;
    this.status = 'pending';
    this.error = undefined;
    this.promise = promise
      .then((data) => {
        this.status = "success";
        this.data = data;
      })
      .catch((error) => {
        this.status = "error";
        this.error = error;
      });
  }

  read() {
    console.log('AsyncResource read this.status', this.status);
    switch (this.status) {
      case "pending":
        throw this.promise;
      case "error":
        throw this.error;
      default:
        return this.data;
    }
  }
}

function ErrorFallback({ error }) {
  return (
    <div className="error">
      <Typography color="error" variant="h6">Something went wrong...</Typography>
      <Typography color="error" variant="p">{error.message}</Typography>
    </div>
  );
}

const foodResource = new AsyncResource(
  fetch("https://random-data-api.com/api/food/random_food")
    .then(async (data) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return data;
    })
    .then((data) => {
      // throw new Error('Try next time!');
      return data.json();
    })
);

function RandomFood() {
  const data = foodResource.read();
  console.log('RandomFood render data', data);

  return (
    <fieldset>
      <h2>{data.dish}</h2>
      <p>{data.description}</p>
    </fieldset>
  );
}

export const Example6 = () => {
  const [isMoreInfoVisible, setIsMoreInfoVisible] = useState(false);

  return (
    <div>
      <Typography variant="h4">Example 6</Typography>
      <Box sx={{ marginTop: '10px' }}>
        <Typography variant="h5">AMZ Asset</Typography>
        <Button
          sx={{ margin: '10px 0' }}
          type="button"
          variant="contained"
          color="primary"
          onClick={() => {
            setIsMoreInfoVisible(prevState => !prevState)
          }}
        >
          {isMoreInfoVisible ? 'Hide' : 'Show'} more info lazily
        </Button>
        {isMoreInfoVisible && (
          <Suspense fallback={<Loader />} >
            <AdditionalInfo />
          </Suspense>
        )}

        <Box sx={{ marginTop: '10px' }}>
          <Suspense fallback={<Loader />}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <RandomFood />
            </ErrorBoundary>
          </Suspense>
        </Box>

      </Box>
    </div>
  )
};
