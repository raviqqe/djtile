import * as React from "react";
import * as ReactDOM from "react-dom";

import Store from "../../store";
import App from "../App";

test("Render", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App {...(new Store())} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
