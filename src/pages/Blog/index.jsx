import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Chip from '../../components/Common/Chip';
import { Link, useParams } from "react-router-dom";
import EmptyList from "../../components/Common/EmptyList";
import { blogList } from "../../config/data";
import "./styles.css";

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    let blog = blogList.find(blog => blog.id=== parseInt(id));
    if(blog){
      setBlog(blog);
    }
}, []);


  return (
    <div className="all">
      <Link className="blog-goBack" to="/">
        <span className="back">&#8592; Go Back </span>
      </Link>
      
        {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subcategory">
              {blog.subCategory.map((category,index)=><div>
                <Chip key={index} label={category} />
              </div>
              )}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
       ) : (
       <EmptyList />
      )}
    </div>
  );
};
export default Blog;