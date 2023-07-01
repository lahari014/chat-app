import { Component } from "react";
import "./index.css";

class Item extends Component {
  state = { count: 0, click: false };

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState({ click: true });
  };

  render() {
    const { details } = this.props;
    const { id, name, text, color, display } = details;
    const backgroundColor = color;
    const { count, click } = this.state;
    return (
      <>
        <li>
          <div className="text">
            <p className={`p1 ${backgroundColor}`}>{name}</p>
            <p className="p3">{display}</p>
          </div>
          <div className="para">
            <p className="p2">{text}</p>
            <button className="but" onClick={this.increment}>
              {!click ? (
                <img
                  src="https://media.istockphoto.com/id/1136351242/vector/like-social-media-hand-line-icon-editable-stroke-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=OnKkq5JCHkLvZ1Ck_njtTQMCyLljXsXGNhGqVpwwVUA="
                  className="image1"
                  alt="like"
                />
              ) : (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4926/4926585.png"
                  className="image1"
                  alt="liked"
                />
              )}
              {count}
            </button>
          </div>
        </li>
      </>
    );
  }
}

export default Item;
