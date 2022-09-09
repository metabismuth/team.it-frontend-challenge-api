import { useEffect, useState } from "react";
import { getPosts } from "../../utils/api";
import { comparePostsByDate } from "../../utils/etc";
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

  return (
    <div className="HomeFeed">
      {
        posts
          .sort(comparePostsByDate)
          .map((post, i) => <HomeFeedPost key={i} post={post}/>)
      }
    </div>
  );
}

export default HomeFeed;
