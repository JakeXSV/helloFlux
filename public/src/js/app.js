var React = require('react');
var CommentBox = require('./components/CommentBox/CommentBox');

React.render(
    <CommentBox url="comments.json" pollInterval={3000} />,
    document.getElementById('content')
);
