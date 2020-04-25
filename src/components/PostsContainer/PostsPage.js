//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";

// import data 

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {data.map((elem, i) => {
        return <Post post={elem} key={i} />;
      })}
    </div>
  );
};

export default PostsPage;
