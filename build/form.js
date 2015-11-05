"use strict";

var Form = React.createClass({
  displayName: "Form",

  getInitialState: function getInitialState() {
    return {
      valid: true
    };
  },

  errorMessage: function errorMessage() {
    if (!this.state.valid) {
      return React.createElement(
        "p",
        null,
        "The field is empty. Add an awesome thing to do!"
      );
    }
  },

  handleSubmit: function handleSubmit(event) {
    //prevent page from reloading (which default)
    event.preventDefault();
    //create textNode variable w/ the text
    var textNode = ReactDOM.findDOMNode(this.refs.text);

    //console.log(textNode.value);

    if (textNode.value != "") {
      //add new item to the items array and trigger the state change
      this.props.onItemAdded({ text: textNode.value });
      this.setState({ valid: true });
    } else {
      this.setState({ valid: false });
    }

    //clear the input field once the new item is added
    textNode.value = "";
  },
  //add state to the form item text = valid do not render message
  //add new text set the form state to false rerenders get state of invalid
  render: function render() {
    return React.createElement(
      "form",
      { onSubmit: this.handleSubmit },
      React.createElement("input", { ref: "text" }),
      React.createElement(
        "button",
        null,
        "Add item"
      ),
      this.errorMessage()
    );
  }

});