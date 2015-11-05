"use strict";

var EmptyListMessage = React.createClass({
  displayName: "EmptyListMessage",

  render: function render() {
    return React.createElement(
      "p",
      null,
      "Hey! Add things to do!"
    );
  }
});