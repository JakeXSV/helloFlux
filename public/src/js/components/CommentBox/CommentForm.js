var React = require('react');

var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var author = React.findDOMNode(this.refs.inputAuthor).value.trim();
        var text = React.findDOMNode(this.refs.inputText).value.trim();
        if (!text || !author) {
            alert("invalid comment!");
            return;
        }
        this.props.onCommentSubmit({
            author: author,
            text: text
        });
        React.findDOMNode(this.refs.inputAuthor).value = '';
        React.findDOMNode(this.refs.inputText).value = '';
        return;
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="inputAuthor"/>
                <input type="text" placeholder="Say something..." ref="inputText"/>
                <input type="submit" value="Post" />
            </form>
        );
    }
});

module.exports = CommentForm;