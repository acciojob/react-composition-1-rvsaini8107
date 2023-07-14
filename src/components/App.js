import React,{useState} from "react";
import "./../styles/App.css";


function App() {
  const tabs = [
    { title: "Tab 1", content: "This is the content for Tab 1." },
    { title: "Tab 2", content: "This is the content for Tab 2." },
    { title: "Tab 3", content: "This is the content for Tab 3." },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
}
function Tabs(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <ul>
        {props.tabs.map((tab, index) => (
          <li key={index} onClick={() => handleTabClick(index)}>
            {tab.title}
          </li>
        ))}
      </ul>
      <div>{props.tabs[activeTabIndex].content}</div>
    </div>
  );
}
export default App;