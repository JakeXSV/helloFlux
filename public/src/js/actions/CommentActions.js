var AppDispatcher = require('../dispatcher/AppDispatcher');
var CommentConstants = require('../constants/CommentConstants');

var CommentActions = {

    create: function(comment) {
        AppDispatcher.dispatch({
            actionType: CommentConstants.COMMENT_CREATE,
            author: comment.author,
            text: comment.text
        });
    }

};

module.exports = CommentActions;