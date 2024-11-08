import React from "react";
import pRetry from "p-retry";
import axios from "axios";

// import MyComponent from "./MyComponent";
// import MyList from "./MyList";
import Scheduler from "./Scheduler";
import "./App.css";

function App() {
  React.useEffect(() => {
    try {
      console.log("qsl log: 开始");
      throw new pRetry.AbortError("no");
    } catch (error) {
      console.log("qsl log: error: ", error);
      // console.log("qsl log: isCancelError: ", axios.isCancel(error));
    }
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
