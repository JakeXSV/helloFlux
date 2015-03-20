var React = require('react');
var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');
var CommentStore = require('../../stores/CommentStore');
var CommentActions = require('../../actions/CommentActions');

var CommentBox = React.createClass({
    handleCommentSubmit: function(comment){
        CommentActions.create(comment);
    },
    _onChange: function() {
        this.setState({
            comments: CommentStore.getAll()
        });
    },
    getInitialState: function() {
        return {
            comments: CommentStore.getAll()
        };
    },
    componentDidMount: function() {
        CommentStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        CommentStore.removeChangeListener(this._onChange);
    },
    render: function() {
        return (
            <div className="commentBox">
                Hello, world! I am a CommentBox.
                <CommentList comments={this.state.comments} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});

module.exports = CommentBox;
