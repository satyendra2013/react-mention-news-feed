import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userImg from '../img/leo.jpg';
import likeIcon from '../img/like.png';
import commentIcon from '../img/comment.png';
import commentor from '../img/monica.jpg';

import { Mention, MentionsInput } from 'react-mentions';

const Feed = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [reactionData, setReactionData] = useState({
    profilePost:
      'Learnt a lot and throughly enjoyed working on mesh on the first launch of mesh platform',
    comment: '',
  });

  const { profilePost, comment } = reactionData;

  const likeHandler = (e) => {
    e.preventDefault();
    setLikeCount(likeCount + 1);
  };

  const onChange = (e) => {
    setReactionData({
      comment: e.target.value,
      profilePost: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let userComment = comment;
    userComment = userComment
      .split('@[')
      .join("<a href='/user/")
      .split(']')
      .join("'>")
      .split('(')
      .join('@')
      .split(')')
      .join('</a>');
    if (userComment !== '') {
      let comment = userComment.trim();
      setReactionData({
        comment: '',
        profilePost: comment,
      });
      setCommentCount(commentCount + 1);
    }
  };

  const users = [
    {
      id: 'SatyendraPandit',
      display: 'Satyendra',
    },
    {
      id: 'SaurabhNangia',
      display: 'Saurabh',
    },
    {
      id: 'RohitSharma',
      display: 'Rohit',
    },
  ];

  return (
    <div className='container'>
      <div className='feed-profile'>
        <img src={userImg} alt='user' className='feed-profile-img' />
        <div className='feed-profile-title'>
          <Link to='#' className='feed-profile-name'>
            Gaurav Chaubey
          </Link>
          <p className='feed-profile-post-date'>2 months ago</p>
        </div>
      </div>
      <div className='separator'></div>
      <div
        className='feed-post-text'
        dangerouslySetInnerHTML={{
          __html: profilePost.replace(/\n\r?/g, '<br />'),
        }}
      />
      <div className='feed-reaction-count'>
        <p className='feed-likes-count'>{likeCount} Likes</p>
        <p className='feed-comments-count'>{commentCount} Comments</p>
      </div>
      <div className='separator'></div>
      <div className='feed-reaction-btn'>
        <button className='feed-like-btn' onClick={(e) => likeHandler(e)}>
          <img src={likeIcon} alt='like-icon' className='feed-icon' /> Like
        </button>
        <button className='feed-comment-btn'>
          <img src={commentIcon} alt='comment-icon' className='feed-icon' />{' '}
          Comment
        </button>
      </div>
      <div className='feed-add-comment'>
        <img src={commentor} className='comment-from' />
        <form className='comment-form' onSubmit={(e) => onSubmit(e)}>
          <MentionsInput
            className='post-comment'
            placeholder='Enter Comment'
            value={comment}
            onChange={(e) => onChange(e)}
            markup='@[__id__](__display__)'
          >
            <Mention trigger='@' data={users} />
          </MentionsInput>
          <button className='submit-comment' type='submit'>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feed;
