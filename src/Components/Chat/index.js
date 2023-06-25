import Item from "../Item/index";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const userList = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const colors = ["one", "two", "three", "four", "five"];

class Chat extends Component {
  state = {
    input: "",
    list: [],
  };

  add = (event) => {
    const { input } = this.state;
    this.setState({ input: event.target.value });
  };

  update = () => {
    const { input, list } = this.state;
    const rand = parseInt(Math.random() * 4);
    const newItem = {
      id: uuidv4(),
      text: input,
      name: userList[rand][0],
      display: userList[rand],
      color: colors[rand],
    };
    this.setState({ input: "" });
    this.setState((prevState) => ({
      list: [...prevState.list, newItem],
    }));
  };

  render() {
    const { input, list } = this.state;
    console.log(list);
    return (
      <div>
        <div>
          <ul>
            {list.map((each) => (
              <Item details={each} key={each.id} />
            ))}
          </ul>
        </div>
        <div className="sender">
          <input
            type="text"
            placeholder="Send Message"
            className="inputBox"
            onChange={this.add}
            value={input}
          />
          <button onClick={this.update}>
            <img
              src="https://static.thenounproject.com/png/4707420-200.png"
              className="image"
              alt="send"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Chat;
