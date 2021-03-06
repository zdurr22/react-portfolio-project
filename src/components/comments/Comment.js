import React, { Component } from 'react';

class Comment extends Component {
    handleOnClick = event => {
        this.props.deleteComment(this.props.comment.id)
    }

    render() {

        return (
            <div>
                <li>
                    {this.props.comment.text}
                </li>
                <button onClick={this.handleOnClick}> X </button>
            </div>
        );
    }
};

export default Comment;