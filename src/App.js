import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Post from "./components/Post/Post";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [view, setView] = useState([]);
  const [error, setError] = useState(false);
  const [postCount, setPostCount] = useState(20);
  const [toggleState, setToggleState] = useState(false);

  const fetchData = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=$%7Bpage%7D&_limit=${postCount}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setView(data);
      })
      .catch((error) => {
        setError(true);
      });
  };

  const loadMore = () => {
    setPostCount(postCount + 20);
    setToggleState(!toggleState);
  };

  useEffect(() => {
    fetchData();
  }, [toggleState]);

  const search = (searchText) => {
    let searchData = posts.filter((item) => item.title.includes(searchText));
    setView(searchData);
  };
  return (
    <div className="App">
      <Search onSearch={search} />
      <div className="post-container">
        {view.map((item, index) => {
          return (
            <Post
              imageSrc={`https://picsum.photos/200?random=${index}`}
              title={item.userId}
              subtitle={item.title}
            />
          );
        })}
      </div>
      <button className="load-btn" onClick={loadMore}>
        Load More Posts
      </button>
    </div>
  );
};

export default App;
