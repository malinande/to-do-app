var Item = React.createClass({

  toggleComplete: function() {
    if (this.props.complete) {
      this.props.onUpdate({ complete: false });
    } else {
      this.props.onUpdate({ complete: true });
    }
  },

  //remove item
  remove: function(event) {
    //prevents the default behavior of the <a> tag (browser to navigate away from the page)
    event.preventDefault();
    //prevent the click event from ‘propagate’ up the DOM to the <li> element
    //That would cause a strange behavior in our app (clicking remove would toggle an Item’s completion before removing it)
    event.stopPropagation();
    //telling the function we want to remove this item.
    this.props.onUpdate({ remove: true });
  },

  render: function() {
    //using a “ternary” operator to set the complete variable to “complete”, or “not-complete”.
    //Ternery operators are useful for very short conditions
    var complete = this.props.complete ? "complete" : "not-complete";

    return (
      <li onClick={this.toggleComplete} className={complete}>
        <span className="text">{this.props.text}</span>
        <a href className="remove" onClick={this.remove}>×</a>
      </li>
    );
  }

});
