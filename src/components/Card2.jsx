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

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
          내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.(글자수
          넘어가는거 처리 안됨
          용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.글자수
          넘어가는거 처리 안됨)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">수정하기</Button>
        <Button size="small">삭제하기</Button>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
          {/* 좋아요 전 후  */}
          <FavoriteIcon sx={{ color: red[400] }} />
        </IconButton>
        <p>좋아요 숫자</p>
      </CardActions>
    </Card>
  );
}
