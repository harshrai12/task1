import React from 'react';
import postimg from "../Assets/Rectangle 5.jpg";
import Avatar from '@mui/material/Avatar';

function PostCard() {
  return (
    <div className='post_card_item'>
    <img src={postimg} alt="" className='post_img' />
    <div className="tag">
    <h4>✍️ Article</h4>
    </div>
    <div className="post_title">
    <h4>What if famous brands had regular fonts? Meet RegulaBrands!</h4>
    <h6>I’ve worked in UX for the better part of a decade. From now on, I plan to rei</h6>
    </div>
    <div className="avatar_info">
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    <h5>sarthak Kamra</h5>
    </div>
    </div>
    
  )
}

export default PostCard
