var AppDispatcher = require('./AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CommentConstants = require('./CommentConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _comments = {};

function create(text, author) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _comments[id] = {
        id: id,
        text: text,
        author: author
    };
}

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
                create(text);
            }
            CommentStore.emitChange();
            break;
        default:
        // no op
    }
});

module.exports = CommentStore;