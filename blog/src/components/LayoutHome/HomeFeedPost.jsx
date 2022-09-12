import { Link } from "react-router-dom";

const HomeFeedPost = ({post}) => {
  return (
    <article className="HomeFeedPost">
      <Link className="title" to={`/posts/${post.slug}`}><h3>{post.title}</h3></Link>
      <div className="meta">
        <span>by {post.author}</span> &bull; <span>{post.publish_date}</span>
      </div>
      <p className="desc">{post.description}</p>
      <Link to={`/posts/${post.slug}`}>Read more</Link>
    </article>
  );
}

export default HomeFeedPost;
