import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deletePosts } from "../../../redux/modules/postsSlice";

export default function CardBoard({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteHandler = () => {
    dispatch(__deletePosts(post.postId));
  };

  return (
    <>
      <Card sx={{ width: 300, height: 400 }}>
        <CardMedia
          component="img"
          height="200"
          image="image/titleLogo.png"
          alt="게시글 이미지"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
          >
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
          >
            {post.contents}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              navigate(`/detail/${post.postId}`);
            }}
          >
            수정하기
          </Button>
          <Button
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              Swal.fire({
                title: "삭제할까요?",
                text: "게시글을 삭제 하겠시겠어요?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Delete",
              }).then((result) => {
                if (result.isConfirmed) {
                  onDeleteHandler();
                  Swal.fire("삭제 완료!", "게시글이 삭제 되었어요!", "success");
                }
              });
            }}
          >
            삭제하기
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
