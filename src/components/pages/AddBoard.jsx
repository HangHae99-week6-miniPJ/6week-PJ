import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __addPosts } from "../../redux/modules/postsSlice";

//사진미리보기
import imageCompression from "browser-image-compression";

//css
import styled from "styled-components";
import { Outline } from "../../shared/Outline";
import Swal from "sweetalert2";
import MuButton from "../elem/MuButton";
import { Flexbox } from "../../shared/Flexbox";
import StLayout from "../Layout/StLayout";

const AddBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postImg, setPostImg] = useState(null);
  const [compressedImageFile, setCompressedImageFile] = useState(null);

  //img size down
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
      alert("다시 시도해주세요.");
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

  //입력값 보내주기:초기값
  const initialState = {
    title: "",
    contents: "",
    categoryId: "",
  };

  //게시판 작성하기
  const [addBoard, setAddBoard] = useState(initialState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddBoard({ ...addBoard, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      addBoard.title.trim() === "" ||
      addBoard.contents.trim() === "" ||
      addBoard.categoryId.trim() === ""
    ) {
      return Swal.fire("모든 항목을 입력해주세요.");
    }
    dispatch(__addPosts({ ...addBoard }));
    setAddBoard(initialState);
    navigate("/board-list");
  };

  return (
    <StLayout>
      <List>
        <span>게시글 작성하기🖍</span>
        <StForm as="form" onSubmit={onSubmitHandler}>
          <STtag>
            <Select
              name="categoryId"
              value={addBoard.categoryId}
              onChange={onChangeHandler}
            >
              <option value="" disabled>
                카테고리
              </option>
              <option value={1}>자기관리</option>
              <option value={2}>식습관</option>
              <option value={3}>마음챙김</option>
              <option value={4}>취미</option>
              <option value={5}>기타</option>
            </Select>
            <Input
              type="text"
              name="title"
              value={addBoard.title}
              onChange={onChangeHandler}
              placeholder="제목을 입력해 주세요. (20자 이내)"
              maxLength="20"
            />
          </STtag>
          <Textarea
            name="contents"
            id="inputbody"
            cols="20"
            rows="10"
            value={addBoard.contents}
            onChange={onChangeHandler}
            placeholder="내용을 입력해 주세요. (500자 이내)"
            maxLength="500"
          />
          <ImgBox>
            <input
              type="file"
              onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
              }}
            />
            <div className="preview">
              {imageSrc && (
                <img src={imageSrc} alt="이미지 미리보기" className="preImg" />
              )}
            </div>
            <p>이미지 미리보기</p>
          </ImgBox>
          <MuButton> 추가하기</MuButton>
        </StForm>
      </List>
    </StLayout>
  );
};

export default AddBoard;

const List = styled.div`
  ${Outline};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;
  span {
    font-weight: bolder;
    font-size: 2rem;
    margin-left: 45px;
    margin-bottom: 50px;
  }
`;

/*입력값 폼 스타일*/
const StForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

/*제목창 스타일*/
const Input = styled.input`
  width: 90%;
  height: 40px;
  border: 2px solid #40424454;
  border-radius: 10px;
  font-size: 1rem;
  padding: 5px 10px;
`;

/*카테고리 제목창 정렬*/
const STtag = styled.div`
  display: flex;
  gap: 20px;
  width: 90%;
`;

/*내용창 스타일 */
const Textarea = styled.textarea`
  width: 87%;
  border: 2px solid #40424454;
  padding: 12px;
  font-size: 1rem;
  border-radius: 10px;
  resize: none;
  &:focus {
    outline: none;
  }
`;

/*카테고리 선택*/
const Select = styled.select`
  width: 20%;
  font-size: 1rem;
  border: 2px solid #40424454;
  border-radius: 10px;
`;

/*이미지 담기*/
const ImgBox = styled.div`
  ${Flexbox}
  p {
    font-size: 1.2rem;
    margin: 15px;
  }
`;
