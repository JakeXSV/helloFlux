var React = require('react');

var Comment = React.createClass({
    render: function() {
        var text = (this.props.data !== undefined && this.props.data.text !== undefined) ? this.props.data.text : "";
        var author = (this.props.data !== undefined && this.props.data.author !== undefined) ? this.props.data.author : "";
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