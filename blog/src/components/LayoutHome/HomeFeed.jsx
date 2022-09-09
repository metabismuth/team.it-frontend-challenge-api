import { useEffect } from "react";
import { useState } from "react";
import { getPosts } from "../../utils/api";
import HomeFeedPost from "./HomeFeedPost";

const HomeFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setPosts(await getPosts());
      } catch (error) {
        // FIXME api down handling
      }
    })();
  }, []);

  // TODO sort posts by date

  return (
    <div className="HomeFeed">
      { posts.map((post, i) => <HomeFeedPost key={i} post={post}/>) }
    </div>
  );
}

export default HomeFeed;
