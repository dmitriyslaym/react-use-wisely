import makeStyles from '@mui/styles/makeStyles';

export default makeStyles((theme) => ({
  container: {
    fontFamily: 'Roboto, sans-serif',
    fontStyle: 'normal',
    fontSize: '16px',
    background: '#3F3F3F',
    color: '#d3d3d3',
    borderRadius: 0,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  rowStart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rowEnd: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  columnWithScroll: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxHeight: 400,
    overflowY: 'auto',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  column100: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  formControl: {
    margin: theme.spacing(1, 0),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  snackbar: {
    marginLeft: 25,
  },
  errorSnackbar: {
    backgroundColor: '#FF4D4D',
  },
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  errorMessage: {
    color: '#FF4D4D',
    font: 'inherit',
    fontWeight: 500,
    height: 20,
  },
  button: {
    color: '#B1B1B1',
    marginRight: 10,
  },
  toggleButtons: {
    font: 'inherit',
    fontWeight: 500,
    height: 20,
  },
  toggleErrorButton: {
    color: '#FF4D4D',
  },
  activeButton: {
    color: '#4E93EB',
  },
  marginTop40: {
    marginTop: 40,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginLeft20: {
    marginLeft: 20,
  },
  marginRight20: {
    marginRight: 20,
  },
  title: {
    color: '#B1B1B1',
    font: 'inherit',
    fontSize: 12,
    fontWeight: 500,
    marginRight: 10,
  },
  clickableTitle: {
    userSelect: 'none',
    cursor: 'pointer',
    color: '#4E93EB',
    font: 'inherit',
    fontSize: 12,
    fontWeight: 500,
  },
  modal: {
    position: 'absolute',
    backgroundColor: '#3C3C3C',
    color: '#B1B1B1',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    outline: 'none',
    top: '20%',
    left: 'calc(50% - 300px)',
    transform: 'translate(-calc(50% - 300px), -20%)',
  },
  icon: {
    color: '#fff',
  },
  formColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: 'calc(50% - 10px)',
  },
  pageGridColumn50: {
    width: 'calc(50% - 10px)',
    marginRight: 10,
  },
  pageGridRow: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chartControl: {
    display: 'flex',
    position: 'absolute',
    top: '10px',
    left: '10px',
    zIndex: '10',
  },
  formActions: {
    justifyContent: 'flex-end',
  },
  paddingTheme1: {
    padding: theme.spacing(1),
  },
  textLightGrey: {
    color: theme.palette.text.secondary,
  },
  actionButton: {
    padding: 0,
    '&:hover': {
      background: 'none',
      color: theme.palette.primary.main,
    },
  },
  widthThird: {
    width: '30%',
  },
  reducedMargin: {
    margin: theme.spacing(1, 0, 0.5),
  },
}));
