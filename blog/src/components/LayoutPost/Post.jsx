import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostBySlug, getCommentsFromPost } from "../../utils/api";
import { compareCommentsByDate, buildCommentTree } from "../../utils/etc";
import { PostComment } from "./PostComment";
import "./Post.sass";
import { PostCommentForm } from "./PostCommentForm";

const Post = () => {
  const { slug } = useParams();
  const [post, setPostData] = useState({});
  const [comments, setComments] = useState([]);
  const [commentAction, setCommentAction] = useState({ type: "none", id: 0 });

  useEffect(() => {
    (async () => {
      try {
        if (commentAction.id === -1) setCommentAction({ ...commentAction, id: 0 });
        setPostData(await getPostBySlug(slug));
        setComments(
          buildCommentTree(
            (await getCommentsFromPost(post.id))
              .sort(compareCommentsByDate)));
      } catch (error) {
        // TODO api down handling
      }
    })();
  }, [slug, post.id, commentAction]);

  return (
    <div className="Post">
      <div id="post_container">
        <div id="post_header">
          <h2>{post.title}</h2>
          <div id="post_header_meta">
            <span>by {post.author}</span> &bull; <span>{post.publish_date}</span>
          </div>
        </div>
        <div id="post_content" dangerouslySetInnerHTML={{ __html:  post.content}}/>
      </div>
      { comments.length > 0 &&
        <div id="comments_container">
          <h3>Comments</h3>
          { comments.map((comment, i) =>
            <PostComment key={i} comment={comment}
              setCommentAction={setCommentAction}/>) }
        </div>
      }
      <PostCommentForm actioningOn={commentAction} postId={post.id}
        setCommentAction={setCommentAction}/>
    </div>
  );
}

export default Post;
