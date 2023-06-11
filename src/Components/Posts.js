import React from 'react'
import PostCard from './PostCard'
import Rightbar from './Rightbar'


function Posts() {
  return (
    <div className="body_Section">
    <div className='post_Section'>
    <div className="post_bar">
    <h3 className='navs'>All Posts(32)</h3>
    <h3 className='navs'>Articles</h3>
    <h3 className='navs'>Event</h3>
    <h3 className='navs'>Job</h3>
    </div>
    <div className="post_card">
    <PostCard />
    <PostCard />
    <PostCard />
    </div>
    </div>
    <div className="rightbar">
    <Rightbar/>
    </div>
    </div>
  )
}

export default Posts
