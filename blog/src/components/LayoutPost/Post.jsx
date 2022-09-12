import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost, getCommentsFromPost } from "../../utils/api";
import { compareCommentsByDate, buildCommentTree } from "../../utils/etc";
import { PostComment } from "./PostComment";
import "./Post.sass";
import { PostCommentForm } from "./PostCommentForm";

const Post = () => {
  const { id } = useParams();
  const [post, setPostData] = useState({});
  const [comments, setComments] = useState([]);
  const [commentReply, setCommentReply] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        if (commentReply === -1) setCommentReply(0);
        setPostData(await getPost(id));
        setComments(
          buildCommentTree(
            (await getCommentsFromPost(id))
              .sort(compareCommentsByDate)));
      } catch (error) {
        // TODO api down handling
      }
    })();
  }, [id, commentReply]);

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
              setReplyHandler={setCommentReply}/>) }
        </div>
      }
      <PostCommentForm replyingTo={commentReply} postId={id}
        setReplyHandler={setCommentReply}/>
    </div>
  );
}

export default Post;
