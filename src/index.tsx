import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import App from "./containers/App";
import Store from "./store";

injectGlobal`
    body {
        font: 16px sans-serif;
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

const store = new Store();

ReactDOM.render(<App {...store} />, document.getElementById("root"));

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}
