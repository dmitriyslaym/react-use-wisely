import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Example1 } from './Example1'
import {Example2} from "./Example2";
import {Example3} from "./Example3";
import {Example4} from "./Example4";
import {Example5} from "./Example5";
import {Example6} from "./Example6";
import {Example7} from "./Example7";
import {Example8} from "./Example8";
import {Example9} from "./Example9";
import {Example10} from "./Example10";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="1" element={<Example1 />}></Route>
          <Route path="2" element={<Example2 />}></Route>
          <Route path="3" element={<Example3 />}></Route>
          <Route path="4" element={<Example4 />}></Route>
          <Route path="5" element={<Example5 />}></Route>
          <Route path="6" element={<Example6 />}></Route>
          <Route path="7" element={<Example7 />}></Route>
          <Route path="8" element={<Example8 />}></Route>
          <Route path="9" element={<Example9 />}></Route>
          <Route path="10" element={<Example10 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};