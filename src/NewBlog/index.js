import React from "react";
import "./style.css"

const Create = () => {
  return (
    <div className="form-container">

    <form>
    <h2> Add New Blog</h2>
    Title:
      <input type="text" name="title" placeholder="write Title" ></input>
      <br/>
      Description:
      <input type="text" name="desc" placeholder="write desc" ></input>
      <br/>
      Input File:
      <input type="file" name="title" placeholder="write Title" ></input>
      <br/>

      <button className="newblog-btn">Submit</button>
    </form>
    </div>
  )
}

export default Create;
