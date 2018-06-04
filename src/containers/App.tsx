import * as React from "react";

import Store from "../store";
import Home from "./Home";

export default class extends React.Component<Store> {
    public render() {
        return <Home {...this.props} />;
    }
}
