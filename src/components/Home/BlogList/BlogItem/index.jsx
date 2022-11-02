import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../Common/Chip";
import './styles.css';

const BlogItem = ({
  blog:{
    id,
    title,
    category,
    subCategory,
    description,
    authorName,
    authorAvatar,
    createdAt,
    review,
    cover
  },
}) => (
      <div className="blogitem-wrap">
        <img src={cover} alt="cover" className="blogitem-cover" />
        <Chip label={category} />
        <h3>{title}</h3>
        <p className="blogitem-desc">{description}</p>
        <footer>
          <div className="blogitem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <span>{review}</span>
            <p>{createdAt}</p>
          </div>
          </div>
          <Link className="blogitem-link" to={`/blog/${id}`}>
           ➝
          </Link>
        </footer>
      </div>
);

export default BlogItem;