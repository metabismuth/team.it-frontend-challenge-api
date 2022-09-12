export const PostComment = (props) => {
  const replyToThisComment = () => props.setReplyHandler(props.comment.id);

  return (
    <div className="PostComment">
      {/* TODO make this prettier */}
      <div className="meta">
        <span>#{props.comment.id}</span> &bull; <span>
        {props.comment.date}</span><br/>
        <span>{props.comment.user}</span> &bull; <button
          className="reply button_plain"
          onClick={replyToThisComment}>Reply</button>
      </div>
      <div className="content">{props.comment.content}</div>
      <div className="replies">
        { props.comment.children.map((child, i) =>
          <PostComment key={i} comment={child}
            setReplyHandler={props.setReplyHandler}/>) }
      </div>
    </div>
  );
}
