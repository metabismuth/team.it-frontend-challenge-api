const HomeFeedPost = ({post}) => {
  return (
    <article className="HomeFeedPost">
      <a className="title" href={`/posts/${post.slug}`}><h3>{post.title}</h3></a>
      <div className="meta">
        <span>by {post.author}</span> &bull; <span>{post.publish_date}</span>
      </div>
      <p class="desc">{post.description}</p>
      <a href={`/posts/${post.slug}`}>Read more</a>
    </article>
  );
}

export default HomeFeedPost;
