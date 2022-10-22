const onChange = (e) => {
  const REGID = /^(?=.*[a-z0-9])[a-z0-9]{3,10}$/;
  const REGPW =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}/;
  const { name, value } = e.target;
  setForm((form) => ({ ...form, [name]: value }));
  if (form.id === "" || !REGID.test(id)) {
    setAlertBox("아이디는 영문 또는 숫자 4-10자입니다");
  } else if (password === "" || !REGPW.test(password)) {
    setAlertBox("비밀번호는 대소문자,숫자,특수기호 포함 6-12자 입니다");
  } else if (confirmPassword === "" || confirmPassword !== password) {
    setAlertBox("비밀번호가 일치하지 않습니다");
  } else if (userName === "" || userName.length > 7) {
    setAlertBox("이름을 확인해주세요");
  } else {
    setAlertBox("");
    //버튼 활성화 토글
    setJoinToggle(false);
  }
};
