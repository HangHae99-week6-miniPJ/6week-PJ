import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function IsToken({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      Swal.fire({
        icon: "warning",
        title: "로그인해주세요!",
      });
      navigate("/");
    }
  });
  return <>{children}</>;
}

export default IsToken;
