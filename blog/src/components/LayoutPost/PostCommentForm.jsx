import { postComment, updateComment, getComment } from "./../../utils/api";
import { DateTime } from "luxon";
import { useState, useEffect, useMemo } from "react";

export const PostCommentForm = (props) => {
  const defaultComment = useMemo(() => ({
      user: "Anonymous",
      postId: Number(props.postId),
      content: "",
      parent_id: null,
      date: "2000-01-01"
    }), [props.postId]);
  const [comment, setComment] = useState(defaultComment);

  useEffect(() => {
    (async () => {
      try {
        if (props.commentAction.type === "edit") {
          const original = await getComment(props.commentAction.id);
          setComment({
            ...original,
            user: original.user,
            content: original.content,
            parent_id: original.parent_id,
            date: original.date
          })
        }
        if (props.commentAction.type === "none" || props.commentAction.type === "reply") {
          setComment(defaultComment);
        }
      } catch (error) {
        // TODO api down handling
      }
    })();
  }, [props.commentAction, defaultComment]);

  const submitComment = async () => {
    if (props.commentAction.type === "none" || props.commentAction.type === "reply") {
      await postComment(Number(props.postId), {
        ...comment,
        parent_id: props.commentAction.id === 0 ? null : props.commentAction.id,
        date: DateTime.now().toISODate()
      });
    } else if (props.commentAction.type === "edit") {
      /* TODO lock user field while editing */
      /* TODO "edit date" field */
      await updateComment(props.commentAction.id, comment);
    }

    // Set empty comment content
    setComment(defaultComment);
    // Reset commentAction to -1 instead of 0 to kludge a re-render
    props.setCommentAction({ type: "none", id: -1 });
  };

  const clearForm = () => {
    props.setCommentAction({ type: "none", id: 0 });
  }

  return (
    <div className="PostCommentForm">
      {/* TODO make this prettier */}
      {
        props.commentAction.type !== "none" &&
        <div>
          { props.commentAction.type === "reply" ? "Replying to " : "Editing " }
          comment #{props.commentAction.id
          } &bull; <button className="button_plain"
          onClick={() => props.setCommentAction({ type: "none", id: 0 })}>Clear</button>
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
