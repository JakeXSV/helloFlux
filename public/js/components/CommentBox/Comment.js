var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentText">
                    {this.props.data.text}
                </h2>
                <p>
                    &nbsp;-{this.props.data.author}
                </p>
            </div>
        );
    }
});