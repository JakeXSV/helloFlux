var React = require('react');
var Comment = require('./Comment');

var CommentList = React.createClass({
    render: function() {
        var comments;
        if(this.props.comments !== undefined && this.props.comments.length > 0) {
            comments = this.props.comments.map(function (e) {
                return (
                    <Comment key={e.id} comment={e}/>
                );
            });
        }
        return (
            <div className="commentList">
                Hello, world! I am a CommentList.
                <h1>Comments</h1>
                {comments}
            </div>
        );
    }
});

module.exports = CommentList;