import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogComponent from './BlogComponent';
import './GetAllBlogComponent.css'

const GetAllBlogsComponent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3500/api/v1/blog/get')
      .then(response => setBlogs(response.data))
      .catch(error => console.log(error));
  }, [blogs]);

  return (
    <div className='books'>
      {blogs.map((blog, index) => (
        <BlogComponent blog={blog} key={index} />
      ))}
    </div>
  );
};

export default GetAllBlogsComponent;
