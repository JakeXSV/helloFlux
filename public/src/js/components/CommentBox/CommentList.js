var React = require('react');
var Comment = require('./Comment');

var CommentList = React.createClass({
    render: function() {
        var comments = this.props.data.map(function(e){
           return (
               <Comment data={e}/>
           );
        });
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