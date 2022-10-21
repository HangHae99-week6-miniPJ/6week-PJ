import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BoardList from "../pages/BoardList";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Route를 추가해주세요! */}
        <Route path="/" element={<Home />} />
        <Route path="/board-list" element={<BoardList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
