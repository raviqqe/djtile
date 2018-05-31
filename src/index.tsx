import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}
