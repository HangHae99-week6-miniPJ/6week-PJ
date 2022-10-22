import Nav from "../components/header/Nav";
import Layout from "../components/layout/Layout";
import Mymenu from "../mypage/Mymenu";
import Mypick from "../mypage/Mypick";
import Myprofie from "../mypage/Myprofile";

function Mypage() {
  return (
    <div>
      <Nav />
      <Layout>
        <Mymenu>회원 정보 수정하기 \ 나의 찜 목록 확인하기</Mymenu>
        <Myprofie />
        <Mypick />
      </Layout>
    </div>
  );
}

export default Mypage;
