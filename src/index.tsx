import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./App";

injectGlobal`
    body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        background: black;
    }

    div#root {
        width: 100%;
        height: 100%;
    }
`;

ReactDOM.render(<App />, document.getElementById("root"));

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}
