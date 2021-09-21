import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";

function Details() {
  const [content, setcontent] = useState({
    title: "",
    body: "",
  });
  const { id } = useParams();

  const getContent = async () => {
    const res = await axios.get(`http://localhost:5000/posts/${id}`);
    //chack if the request was successful
    if (res.status === 200) {
      setcontent(res.data);
    }
    if (res.data.status === 404) {
      setcontent({
        title: "No content",
        body: "No content",
      });
    }
  };
  useEffect(() => {
    getContent();
  }, []);

  return (
    <div className="container mt-3">
      <h1>Title</h1>
      <h3>{content.title}</h3>
      <h1>Body</h1>
      <h3>{content.body}</h3>
      <Link className="btn btn-warning mt-3" to="/">
        Back
      </Link>
    </div>
  );
}

export default Details;
