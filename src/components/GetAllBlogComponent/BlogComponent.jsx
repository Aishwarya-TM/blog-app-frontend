import React from 'react';

const BlogComponent = ({ blog }) => {
  return (
    <div className='card'>
      <div className='text-container'>
        <h3>{blog.title}</h3>
        <p className='status'>
          {blog.category}
        </p>
        <p className="status">
          {blog.date}
        </p>
        <p className="status">
          {blog.content}
        </p>
        <p className="title">Author:</p>
        <p className="author">{blog.author}</p>
      </div>
    </div>
  );
};

export default BlogComponent;
