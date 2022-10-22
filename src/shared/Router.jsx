import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BoardList from "../pages/BoardList";
import DetailBoard from "../pages/DetailBoard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*Route를 추가해주세요! */}
        <Route path="/" element={<Home />} />
        <Route path="/board-list" element={<BoardList />} />

        {/* detailboard추가. */}
        <Route path="/detail/:id"> element={<DetailBoard />}</Route>
        <Route path="/add-board"> element={<AddBoard />}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
