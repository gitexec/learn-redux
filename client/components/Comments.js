import React, {Component} from 'react'

export default class Comments extends Component{
  renderComment(comment, i){
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  },
  handleSubmit(e){
    e.preventDefault();
    const { postId } =  this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }
  render(){
    return (
      <div className="comment">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={ this.handleSubmit} >
          <iput type="text" ref="author" placeholder="author"/>
          <iput type="text" ref="comment" placeholder="comment"/>
          <iput type="submit" hidden />
        </form>
      </div>
    )
  }
}
