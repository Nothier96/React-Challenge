// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  // const [name, setName] = useState("Kesu");
  // const [age, setAge] = useState(22);
  // const handleClick = () => {
  //   setName("Thierno");
  //   setAge("25");
  // };
  //   const handleClickAgain = (name, e) => {
  //     console.log(`Hello ` + name, e.target);
  //   };

  // const [name, setName] = useState("mario");
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <button onClick={() => setName("luigi")}>Change name</button>
      <p>{name}</p> */}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs!"
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "yoshi")}
        title="Yoshi's Blogs!"
      /> */}
      {/* <h2>Homepage</h2> */}
      {/* <div>
        {name} is {age} years old
      </div>
      <button onClick={handleClick}>Click Button</button> */}

      {/* <button
        onClick={(e) => {
          handleClickAgain("Sissoko", e);
        }}
      >
        Click me Again
      </button> */}
    </div>
  );
};

export default Home;
