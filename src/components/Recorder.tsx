import { inject, observer } from "mobx-react";
import * as React from "react";

import Recorder from "../store/recorder";

@inject(({ recorder }) => recorder)
@observer
export default class extends React.Component<Partial<Recorder>> {
    public render() {
        return <button onClick={this.props.recordAudio}>record</button>;
    }
}
