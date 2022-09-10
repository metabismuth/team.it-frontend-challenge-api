import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost, getCommentsFromPost } from "../../utils/api";
import { compareCommentsByDate, buildCommentTree } from "../../utils/etc";
import { PostComment } from "./PostComment";
import "./Post.sass";

const Post = () => {
  const { id } = useParams();
  const emptyComment = { content: undefined, user: undefined, id };
  const [post, setPostData] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setPostData(await getPost(id));
        setComments(
          buildCommentTree(
            (await getCommentsFromPost(id))
              .sort(compareCommentsByDate)));
      } catch (error) {
        // TODO api down handling
      }
    })();
  }, [id]);

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
          { comments.map((comment, i) => <PostComment key={i} comment={comment}/>) }
        </div>
      }
    </div>
  );
}

export default Post;
