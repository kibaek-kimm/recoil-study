import { useState } from "react"
import { RecoilRoot } from "recoil"
import './App.css';
import TodoList from "./components/TodoList"

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabInfo = [
    {
      text: "Todos",
      content: <TodoList />
    },
    {
      text: "Friends",
      content: <div>hello</div>
    }
  ];
  const onClickTab = (event, index) => {
    event.preventDefault()
    if (activeIndex === index) {
      return;
    }

    setActiveIndex(index);
  }

  return (
    <div className="App">
      <RecoilRoot>
        <ul className="nav-tabs nav">
          {tabInfo.map((info, index) => (
            <li className="nav-item" onClick={event => onClickTab(event, index)}>
              <a className={`nav-link ${index === activeIndex ? "active" : "" }`} href="#">{info.text}</a>
            </li>
          ))}
        </ul>

        {tabInfo[activeIndex].content}
      </RecoilRoot>
      
    </div>
  );
}

export default App;
