import React from "react";

function Myprofile() {
  return (
    <div>
      Myprofile
      <div>
        <p>회원 정보 수정하기 🔐</p>
        <p>가입하신 회원 정보입니다.</p>
      </div>
      <div>
        <div>사진</div>
        <label>프로필 사진 변경</label>
        <input type="file" />
        <label>닉네임 변경</label>
        <input type="text" />
      </div>
    </div>
  );
}

export default Myprofile;
