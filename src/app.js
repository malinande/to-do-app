var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      items: this.getItemsFromLocalStore()
    }
  },
  buildItemNode: function(item, index) {
    return (
      <Item
        key={index}
        text={item.text}
        complete={item.complete}
        onUpdate={this.updateItem.bind(this, index)} />
    );
  },
  handleNewItem: function(item) {
    //takes the current array of items which is in this.state
    var newItems = this.state.items.concat([item]);
    //adds the new item object to the array using the concat method which is built in to JavaScript arrays
    this.setState({ items: newItems });
  },

  updateItem: function(index, action) {
    //find it in the current state
    var items = this.state.items;

    //checks which key is included in the action
    if (action.remove) {
      //take the index of the item you want to remove, and then how many items you want to remove.
      //We only ever want to remove one item; the item which is at the current index
      items.splice(index, 1);
    } else {
      //take the index of the item we’re updating change it
      items[index].complete = action.complete;
    }

    console.log(items[index]);
    //set the new state on the app

    this.setState({ items: items });
  },

  //Add a convenience method to fetch items from our localStorage string
  getItemsFromLocalStore: function() {
    //check if the items key exists in localStorage first, and if it doesn’t, return an empty array
    if (localStorage.items) {
      return JSON.parse(localStorage.items);
    } else {
      return [];
    }
  },

  showEmptyListMessage: function() {
    var items = this.state.items;
    if (items.length < 1) {
        return (<EmptyListMessage />);
     }
 },

  /*
  Each time the state has been changed and React is about to re-render the component,
  it calls a function called componentWillUpdate() with the props object and state objects
  which are going to be used to render the refreshed version of the component
  */
  componentWillUpdate: function(nextProps, nextState) {
    localStorage.items = JSON.stringify(nextState.items);
  },

  //todo app component call function to add new item
  render: function() {
    return (
      <div>
      <h1>To do!</h1>
      <Form onItemAdded={this.handleNewItem}  />
        <ul>
          {this.state.items.map(this.buildItemNode)}
        </ul>
        {this.showEmptyListMessage()}
      </div>
    );
  }

});

ReactDOM.render(<TodoApp />, document.getElementById("app"));
