import { postComment, updateComment, getComment } from "./../../utils/api";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";

export const PostCommentForm = (props) => {
  const defaultComment = {
      user: "Anonymous",
      postId: Number(props.postId),
      content: "",
      parent_id: null,
      date: "2000-01-01"
    };
  const [comment, setComment] = useState(defaultComment);

  useEffect(() => {
    (async () => {
      try {
        console.log("Hi there! " + props.actioningOn.id);
        if (props.actioningOn.type === "edit") {
          const original = await getComment(props.actioningOn.id);
          setComment({
            ...original,
            user: original.user,
            content: original.content,
            parent_id: original.parent_id,
            date: original.date
          })
        }
      } catch (error) {
        // TODO api down handling
      }
    })();
  }, [props.actioningOn]);

  const submitComment = async () => {
    if (props.actioningOn.type === "none" || props.actioningOn.type === "reply") {
      await postComment(Number(props.postId), {
        ...comment,
        parent_id: props.actioningOn.id === 0 ? null : props.actioningOn.id,
        date: DateTime.now().toISODate()
      });
    } else if (props.actioningOn.type === "edit") {
      /* TODO lock user field while editing */
      /* TODO "edit date" field */
      await updateComment(props.actioningOn.id, comment);
    }

    // Set empty comment content
    setComment(defaultComment);
    // Reset actioningOn to -1 instead of 0 to kludge a re-render
    props.setCommentAction({ type: "none", id: -1 });
  };

  const clearForm = () => {
    setComment(defaultComment);
    props.setCommentAction({ type: "none", id: 0 });
  }

  return (
    <div className="PostCommentForm">
      {/* TODO make this prettier */}
      {
        props.actioningOn.type !== "none" &&
        <div>
          { props.actioningOn.type === "reply" ? "Replying to " : "Editing " }
          comment #{props.actioningOn.id
          } &bull; <button className="button_plain"
          onClick={props.setCommentAction}>Clear</button>
        </div>
      }
      <input id="commentUsername"
        required
        type="text"
        placeholder="Name"
        value={comment.user}
        onChange={e => setComment({ ...comment, user: e.target.value })}
      />
      <textarea id="commentContent"
        required
        placeholder="Type your comment here!"
        autoFocus={true}
        spellCheck={true}
        maxLength={2000}
        value={comment.content}
        onChange={e => setComment({ ...comment, content: e.target.value })}
        /* FIXME I don't think this is doing anything */
        onSubmit={submitComment}
      />
      <div className="comment_actions">
        <button className="button_plain" onClick={clearForm}
        >Cancel</button> &bull; <button
        className="button_plain" onClick={submitComment}>Post</button>
      </div>
    </div>
  );
}
