export const PostComment = (props) => {
  return (
    <div className="PostComment">
      <div className="meta">
        <span>{props.comment.date}</span> &bull; <span>{props.comment.user}</span>
      </div>
      <div className="content">{props.comment.content}</div>
      <div className="replies">
        { props.comment.children.map((child, i) =>
          <PostComment key={i} comment={child}/>) }
      </div>
    </div>
  );
}
