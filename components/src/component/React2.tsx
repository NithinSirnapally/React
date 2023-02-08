import React, { useState } from 'react';
import './React2.css'

const LikeButton = () => {
  // const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(true);
  const [showCommentInput, setShowCommentInput] = useState(false);

  const handleLikeClick = () => {
    // setLikes(likes +1);
    setLiked(!liked);
  };

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  return (
    <div>
      <img src="Image.jpg" alt="" id="Photo"/>
      <button onClick={handleLikeClick} style={{ backgroundColor: liked ? 'white' : 'red' }} className='btn1' id='heart'>Like</button>
      {/* <p>{likes}</p> */}
      <button onClick={handleCommentClick} className='btn2'>Comment</button>
      {showCommentInput && (
        <input type="text" placeholder="Enter your comment here" />
      )}
    </div>
  );
};

export default LikeButton;

