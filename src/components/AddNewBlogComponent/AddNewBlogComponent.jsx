import React, { useState } from 'react';
import './AddNewBlogComponent.css';
import axios from 'axios';

const AddNewBlogComponent = () => {
  const [blogInfo, setBlogInfo] = useState({
    title: '',
    author: '',
    date: '',
    content: '',
    category: '',
  });

  const titleHandler = (event) => {
    setBlogInfo({
      ...blogInfo,
      title: event.target.value,
    });
  };

  const authorHandler = (event) => {
    setBlogInfo({
      ...blogInfo,
      author: event.target.value,
    });
  };

  const dateHandler = (event) => {
    setBlogInfo({
      ...blogInfo,
      date: event.target.value,
    });
  };

  const contentHandler = (event) => {
    setBlogInfo({
      ...blogInfo,
      content: event.target.value,
    });
  };

  const categoryHandler = (event) => {
    setBlogInfo({
      ...blogInfo,
      category: event.target.value,
    });
  };

  const { title, author, date, content, category } = blogInfo;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    axios
      .post(`http://localhost:3500/api/v1/blog/add`, blogInfo)
      .then(response => {
        alert(`${response.data.title} is added successfully`);
        window.location.href = '/';
      })
      .catch(error => {
        if(error.response) {
          alert(`Status ${error.response.status} - ${error.response.data.message}`);
        }
      });
  };

  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding a new blog</h2>

      <div className='form-group'>
        <label>Title</label>
        <input
          type='text'
          placeholder='Enter the title'
          value={title}
          onChange={titleHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Author</label>
        <input
          type='text'
          placeholder='Enter the author'
          value={author}
          onChange={authorHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Date</label>
        <input
          type='date'
          value={date}
          onChange={dateHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Content</label>
        <textarea
          placeholder='Enter the content'
          value={content}
          onChange={contentHandler}
          required
        ></textarea>
      </div>

      <div className='form-group'>
        <label>Category</label>
        <input
          type='text'
          placeholder='Enter the category'
          value={category}
          onChange={categoryHandler}
          required
        />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default AddNewBlogComponent;
