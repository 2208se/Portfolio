import React, { useState } from 'react';
import "./comment.css";

const AddCommentForm = ({ onAddComment }) => {
    const [comment, setComment] = useState('');
  
    const handleInputChange = (e) => {
      setComment(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Check if the comment is not empty before submitting
      if (comment.trim() === '') {
        alert('Please enter a comment before submitting.');
        return;
      }
  
      // Invoke the onAddComment prop with the new comment
      onAddComment(comment);
  
      // Clear the comment input after submitting
      setComment('');
    };
  return (
    <form onSubmit={handleSubmit}>
      <label className='comment-add'>
      
        <textarea
          rows="3"
          cols="30"
          value={comment}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button  className='sub' type="submit">Submit Comment</button>
    </form>
  );
};


export default AddCommentForm;
