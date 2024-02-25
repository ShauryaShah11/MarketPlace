import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
        <Toaster />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
