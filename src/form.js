var Form = React.createClass({

  getInitialState: function() {
    return {
      valid : true
    }
  },

  errorMessage: function () {
    if (!this.state.valid) {
      return (
        <p>The field is empty. Add an awesome thing to do!</p>
      );
    }
  },

  handleSubmit: function(event) {
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
render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="text" />
        <button>Add item</button>
        {this.errorMessage()}
      </form>
    );
  }

});
