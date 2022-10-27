import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import BoardList from "../components/pages/BoardList";
import DetailBoard from "../components/pages/DetailBoard";
import Mypage from "../components/pages/Mypage";
import AddBoard from "../components/pages/AddBoard";
import Layout from "../components/Layout/Layout";
import Kakao from "../components/login/KakaoCallback";


function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/*Route를 추가해주세요! */}
          <Route path="/" element={<Home />} />
          <Route path="/board-list" element={<BoardList />} />
          <Route path="/detail/:id" element={<DetailBoard />} />
          <Route path="/add-board" element={<AddBoard />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/kakao/callback" element={<Kakao/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
