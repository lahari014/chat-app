import "./index.css";

const Item = (props) => {
  const { details } = props;
  const { id, name, text, color, display } = details;
  const backgroundColor = color;
  return (
    <>
      <li>
        <div className="text">
          <p className={`p1 ${backgroundColor}`}>{name}</p>
          <p className="p3">{display}</p>
        </div>
        <div className="para">
          <p className="p2">{text}</p>
          <button className="but">
            <img
              src="https://media.istockphoto.com/id/1136351242/vector/like-social-media-hand-line-icon-editable-stroke-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=OnKkq5JCHkLvZ1Ck_njtTQMCyLljXsXGNhGqVpwwVUA="
              className="image1"
              alt="like-image"
            />
          </button>
        </div>
      </li>
    </>
  );
};

export default Item;
