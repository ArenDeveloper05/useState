import "./App.scss";
import { useState } from "react";

function App() {
  const [isHidden, setIsHidden] = useState(true);

  const hideContent = () => {
    setIsHidden((prev) => !prev);
  };

  const [data, setData] = useState([
    { title: "Hi" },
    { title: "Hello world" },
    { title: "Good bye" },
    { title: "hello bro" },
  ]);

  const [activeItem, setActiveItem] = useState(0);

  //Form
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");

  return (
    <div className="App">
      <div className="container">
        <div className="container-posts">
          {data.map((item, i) => {
            return (
              <div
                className="container-posts-post"
                key={i}
                style={{
                  backgroundColor: item.title.toLowerCase().includes("hello")
                    ? "red"
                    : "turquoise",
                  border: i == activeItem ? "8px solid white" : "solid",
                }}
                onClick={() => {
                  setActiveItem(i);
                }}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="container-form">
          <form>
            <input
              type="text"
              placeholder="First Name"
              value={firstNameValue}
              onChange={(e) => {
                setFirstNameValue(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastNameValue}
              onChange={(e) => {
                setLastNameValue(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={() => {
                const obj = {
                  _firstName: firstNameValue,
                  _lastName: lastNameValue,
                };
                console.log(obj);
              }}
            >
              Send Form
            </button>
          </form>
        </div>
        {isHidden && <div className="container-child"></div>}
        <button onClick={hideContent}>{!isHidden ? "Show" : "Hide"}</button>
      </div>
    </div>
  );
}

export default App;
