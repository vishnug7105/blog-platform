import React from "react";
import "./style.css";
import Chip from "../../../common/Chip";
import { Link } from "react-router-dom";

const BlogItem =({blog:
  {id, description, title, createdAt,
     authorName,cover
    ,authorAvatar, category},
  }) => (

    <div className="blogItem-wrap">
    <img src={cover} alt="cover"
    className="blogItem-cover"/>
    <Chip label={category} />
    <h3>{title} </h3>
    <p className="blogItem-desc"> {description}</p>

    <footer>
    <div className="blogItem-author">
    <img src={authorAvatar} alt="avatar"
    />
    <div>
    <h6> {authorName}</h6>
    <p>{createdAt}</p>
    </div>
    </div>
    <Link className="blogItem-link" to={`/blog/${id}`}>
     ➝
    </Link>
    </footer>
    </div>
  )


export default BlogItem;
