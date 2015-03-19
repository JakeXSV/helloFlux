var React = require('react');

var Comment = React.createClass({
    render: function() {
        var text = (this.props.comment !== undefined && this.props.comment.text !== undefined) ? this.props.comment.text : "";
        var author = (this.props.comment !== undefined && this.props.comment.author !== undefined) ? this.props.comment.author : "";
        return (
            <div className="comment">
                <h2 className="commentText">
                    {text}
                </h2>
                <p>
                    &nbsp;-{author}
                </p>
            </div>
        );
    }
});

module.exports = Comment;