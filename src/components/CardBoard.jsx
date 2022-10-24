import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { red } from "@mui/material/colors";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __deletePosts, __getPosts } from "../redux/modules/postsSlice";
import Swal from "sweetalert2";

export default function CardBoard({ post }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDeleteHandler = (e) => {
    dispatch(__deletePosts(post.id));
  };

  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="200"
          image="image/titleLogo.png"
          alt="게시글 이미지"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            제목
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            overflow="hidden"
          >
            {post.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              navigate(`/detail/${post.id}`);
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
          <IconButton aria-label="add to favorites">
            <FavoriteBorderIcon />
            {/* 좋아요 전 후  , 요기 처리는 아직 못하겟음.*/}
            <FavoriteIcon sx={{ color: red[400] }} />
          </IconButton>
          <p>좋아요 숫자</p>
        </CardActions>
      </Card>
    </>
  );
}
