var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CommentConstants = require('../constants/CommentConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _comments = [];

function create(text, author) {
    _comments[_comments.length] = {
        id: _comments.length,
        text: text,
        author: author
    };
    return _comments[_comments.length-1];
}

function persistComment(comment){
    $.ajax({
        url: '/comments.json',
        dataType: 'json',
        type: 'POST',
        data: comment,
        error: function(xhr, status, err) {
            console.error("Error Persisting Comment - " + status + " - " + err.toString());
        }
    });
}

function getComments(){
    $.ajax({
        url: "comments.json",
        dataType: 'json',
        success: function(data) {
            _comments = data;
            CommentStore.emitChange();
        },
        error: function(xhr, status, err) {
            console.error("CommentStore Error - " + status, err.toString());
        }
    });
}
getComments();
setInterval(getComments, 5000);

var CommentStore = assign({}, EventEmitter.prototype, {

    getAll: function() {
        return _comments;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    var text;
    var author;

    switch(action.actionType) {
        case CommentConstants.COMMENT_CREATE:
            text = action.text.trim();
            author = action.author;
            if (text !== '' && author !== '') {
                var comment = create(text, author); //optimistic save
                persistComment(comment);
            }
            CommentStore.emitChange();
            break;
        default:
        // no op
    }
});

module.exports = CommentStore;