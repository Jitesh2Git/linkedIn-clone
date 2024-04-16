import { Avatar } from "@mui/material";
import "./Post.css";
import InputOptions from "./InputOptions";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";
import { forwardRef } from "react";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <hr />
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOptions Icon={CommentIcon} title="Comment" color="gray" />
        <InputOptions Icon={RepeatIcon} title="Repost" color="gray" />
        <InputOptions Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
