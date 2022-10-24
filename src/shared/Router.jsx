import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BoardList from "../pages/BoardList";
import DetailBoard from "../pages/DetailBoard";
import Mypage from "../pages/Mypage";
import AddBoard from "../pages/AddBoard";
import Layout from "../components/layout/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/*Route를 추가해주세요! */}
          <Route path="/" element={<Home />} />
          <Route path="/board-list" element={<BoardList />} />

          {/* detailboard추가. */}
          <Route path="/detail/:id" element={<DetailBoard />} />
          <Route path="/add-board" element={<AddBoard />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
