import React from "react";

// import MyComponent from "./MyComponent";
// import MyList from "./MyList";
import Scheduler from "./Scheduler";
import "./App.css";

function App() {
  React.useEffect(() => {
    console.log("qsl log: ", 1111);
  }, []);

  return (
    <div className="app">
      <Scheduler />
      {/* <MyList />
      <MyComponent /> */}
    </div>
  );
}

export default App;
