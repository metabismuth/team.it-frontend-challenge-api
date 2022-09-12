import { postComment } from "./../../utils/api";
import { DateTime } from "luxon";
import { useState } from "react";

export const PostCommentForm = (props) => {
  const
    [commentUser, setCommentUser] = useState("Anonymous"),
    [commentContent, setCommentContent] = useState(""),
    handleUser = e => setCommentUser(e.target.value),
    handleContent = e => setCommentContent(e.target.value);

  const submitComment = async () => {
    // Post
    await postComment(Number(props.postId), {
      "user": commentUser,
      "content": commentContent,
      "parent_id": props.replyingTo === 0 ? null : props.replyingTo,
      "date": DateTime.now().toISODate()
    });

    // Set empty comment content
    setCommentContent("");
    // Reset replyingTo to -1 instead of 0 to kludge a re-render
    props.setReplyHandler(-1);
  };

  return (
    <div className="PostCommentForm">
      {/* TODO make this prettier */}
      { props.replyingTo > 0 &&
        <div>Replying to #{props.replyingTo}</div> }
      <input id="commentUsername"
        required
        type="text"
        placeholder="Name"
        value={commentUser}
        onChange={handleUser}
      />
      <textarea id="commentContent"
        required
        placeholder="Type your comment here!"
        autoFocus={true}
        spellCheck={true}
        maxLength={2000}
        value={commentContent}
        onChange={handleContent}
        onSubmit={submitComment}
      />
      <div className="comment_actions">
        <button className="button_plain">Cancel</button> &bull; <button className="button_plain" onClick={submitComment}>Post</button>
      </div>
    </div>
  );
}
