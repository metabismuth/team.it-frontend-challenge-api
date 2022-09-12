export const PostComment = (props) => {
  const actionOnThisComment = type => () =>
    props.setCommentAction({ type, id: props.comment.id });

  return (
    <div className="PostComment">
      {/* TODO make this prettier */}
      <div className="meta">
        <span>{props.comment.date}</span> &bull; <button
          className="reply button_plain"
          onClick={actionOnThisComment("reply")}
        >Reply</button> &bull; <button
          className="edit button_plain"
          onClick={actionOnThisComment("edit")}
        >Edit</button><br/>
        <span>#{props.comment.id}</span> &bull; <span>{props.comment.user}</span>
      </div>
      <div className="content">{props.comment.content}</div>
      <div className="replies">
        { props.comment.children.map((child, i) =>
          <PostComment key={i} comment={child}
            setCommentAction={props.setCommentAction}/>) }
      </div>
    </div>
  );
}
