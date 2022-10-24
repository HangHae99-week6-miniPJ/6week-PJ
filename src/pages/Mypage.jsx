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
        <Mymenu />
      </Layout>
    </div>
  );
}

export default Mypage;
