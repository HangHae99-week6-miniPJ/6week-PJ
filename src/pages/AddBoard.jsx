import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __addPosts } from "../redux/modules/postsSlice";

//사진업로드용
import imageCompression from "browser-image-compression";

//css
import styled from "styled-components";
import { Outline } from "../shared/Outline";
import axios from "axios";

const AddBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    username: "",
    title: "",
    body: "",
  };

  const [postImg, setPostImg] = useState(null);
  const [compressedImageFile, setCompressedImageFile] = useState(null);

  //img size donw
  const compressImageAndGetImageFile = async (imageFile) => {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    const compressedFile = await imageCompression(imageFile, options);
    return compressedFile;
  };

  //img 미리보기

  const previewImage = async (event) => {
    const imageFile = event.target.files[0];

    try {
      const compressedFile = await compressImageAndGetImageFile(imageFile);
      setCompressedImageFile(compressedFile);

      const finalCompressedImage = await imageCompression.getDataUrlFromFile(
        compressedFile
      );

      setPostImg(finalCompressedImage);
    } catch (error) {
      console.log("__PostForm_ploadImage error ::", error);
      alert("에러떳는데요?");
    }
  };

  const [imageSrc, setImageSrc] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);

        resolve();
      };
    });
  };

  //img전송
  // const form = new FormData();
  // form.append("image", compressedImageFile);
  // try{
  //   const postImageResponse = await axios.post(
  //     //`${url/post/uploadImg}`, form,
  //   {
  //     headers : {
  //       "content-Type":"multipart/form-data",
  //       Authorization : localStorage.getItem("token??")
  //     }
  //   })
  // }

  const [addBoard, setAddBoard] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddBoard({ ...addBoard, [name]: value });
  };

  const onSubmitHandler = () => {
    // dispatch(__addPosts(data));
    dispatch(__addPosts({ ...addBoard, id: Date.now() }));
    setAddBoard(initialState);

    navigate("/board-list");
  };

  return (
    <>
      <List>
        <FormBox>
          <select
            name="menuId"
            value={addBoard.menuId}
            onChange={onChangeHandler}
          >
            <option value={0}>카테고리</option>
            <option value={1}>orange</option>
            <option value={2}>green</option>
            <option value={3}>pink</option>
            <option value={4}>purple</option>
            <option value={5}>blue</option>
          </select>

          <input
            type="text"
            name="username"
            value={addBoard.username}
            onChange={onChangeHandler}
            placeholder="작성자"
          />
          <input
            type="text"
            name="title"
            value={addBoard.title}
            onChange={onChangeHandler}
            placeholder="제목을 입력해 주세오"
          />
          <textarea
            name="body"
            id="inputbody"
            cols="20"
            rows="10"
            value={addBoard.body}
            onChange={onChangeHandler}
            placeholder="내용을 입력해 주세요."
          />

          {/* <input
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            onChange={previewImage}
          /> */}
          <StRowFormBox>
            <main className="container">
              <h2>이미지 미리보기</h2>

              <input
                type="file"
                onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                }}
              />

              <div className="preview">
                {imageSrc && <img src={imageSrc} alt="preview-img" />}
              </div>
            </main>
          </StRowFormBox>

          <button onClick={onSubmitHandler}>추가하기</button>
        </FormBox>
      </List>
    </>
  );
};

export default AddBoard;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 250px;

  input {
    font-size: 15px;
    height: 35px;
    padding-left: 5px;
    padding-bottom: 5px;
    border: none;
    border-bottom: 2px solid #aaa;
    border-right: 2px solid #aaa;
    margin-bottom: 35px;
  }
  textarea {
    height: 100px;
    font-size: 15px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #aaa;
    border-right: 2px solid #aaa;
  }
  button {
    background-color: #aaa;
    min-width: 30px;
    min-height: 30px;
    width: 40%;
    height: 20%;
    border-radius: 5px;
    margin: 10px auto;

    cursor: pointer;
  }
  select {
    margin-top: 20px;
    margin-bottom: 20px;
    height: 30px;
    border-radius: 5px;
  }
`;

const Createform = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;

  > p {
    margin: 50px 0 50px;
    font-size: 20px;
    font-family: "SUIT-SemiBold";
  }
  span {
    color: #bbb;
    font-size: 15px;
    line-height: 50px;
  }
  label {
    display: block;
    margin: 20px 0;
    font-size: 20px;
  }
  button {
    min-width: 30px;
    min-height: 30px;
    width: 40%;
    height: 20%;
    border-radius: 5px;
    margin: 10px auto;
  }
  input {
    margin-bottom: 30px;
  }
  div > p {
    color: #bbb;
    font-size: 14px;
    line-height: 50px;
  }
  @media screen and (max-width: 800px) {
    padding: 0 30px;
    box-sizing: border-box;
    input {
      width: 80%;
    }
  }
`;

const ImgPreview = styled.div`
  width: 600px;
  height: 600px;
  background-color: #bbb;
  border-radius: 40px;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const List = styled.div`
  ${Outline};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 17px;
`;

const StRowFormBox = styled.p`
  display: flex;
  flex-direction: column;
  align-items: cetner;
  width: 300px;
  margin: auto;
  input[type="file"]::file-selector-button {
    visibility: hidden;
  }

  input[type="file"]::before {
    content: "사진 업로드!";
    display: block;
    width: 300px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    font-weight: 500;
    border: var(--border-style);
    background-color: var(--blue-color);
    margin-right: 10px;
    cursor: pointer;
    outline: none;
  }

  button {
    width: 80px;
    height: 100%;
    font-weight: 500;
    border: var(--border-style);
    margin-left: 10px;
    background-color: var(--blue-color);
    cursor: pointer;
    &:hover {
      background-color: var(--red-color);
      color: #000;
    }
    &:last-child:hover {
      background-color: var(--green-color);
      color: #000;
    }
  }
`;

//useForm
// const [files, setFiles] = useState("");

// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm();

// const black_pattern = /^\s+|\s+$/g;
// const isBlank = (value) =>
//   value.replace(black_pattern, "") === "" ? false : true;

// const onLoadFile = (e) => {
//   setFiles(e.target.files[0]);
// };
//useForm

{
  /* <Createform onSubmit={handleSubmit(onSubmitHandler)}>
<div>
  <label htmlFor="title">제목</label>
  <input
    type="text"
    placeholder="제목을 입력하세요."
    {...register("title", {
      required: true,
      maxLength: 30,
      validate: (value) => isBlank(value),
    })}
  />
  {errors.title && errors.title.type === "required" && (
    <p>제목이 없습니다.</p>
  )}
  {errors.title && errors.title.type === "maxLength" && (
    <p>제목이 너무 길어요!</p>
  )}
  {errors.title && errors.title.type === "validate" && (
    <p>비었습니다만?</p>
  )}
</div>
<div>
  <label htmlFor="body">내용</label>
  <textarea
    type="text"
    placeholder="내용을 입력하세요."
    {...register("body", {
      required: true,
      maxLength: 30,
      validate: (value) => isBlank(value),
    })}
  />
  {errors.body && errors.title.type === "required" && (
    <p>내용적어주세요.</p>
  )}
  {errors.title && errors.title.type === "maxLength" && (
    <p> 너무긴데? </p>
  )}
  {errors.title && errors.title.type === "validate" && (
    <p> 비었습니다만?</p>
  )}
</div>

<div>
  <label htmlFor="file">이미지 선택하기</label>
  <input
    type="file"
    id="image"
    name="file"
    accept="image/*"
    onChange={onLoadFile}
  />
  <p>권장 이미지 크기 : 600px * 600px</p>
  <ImgPreview id="imgPreview"></ImgPreview>
</div>
<button>게시하기</button>
</Createform> */
}
