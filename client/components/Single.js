import React, { Component, PropTypes } from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component{
  render(){
    const { postId } = this.props.params.postId;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
     <div className="single-photo">
      <Photo i={i} post={post} {...this.props} />
      <Comments postComments={postComments} />
     </div>
    )
  }
}
