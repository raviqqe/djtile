import { observer } from "mobx-react";
import * as React from "react";

import Recorder from "../store/recorder";

@observer
export default class extends React.Component<{ recorder: Recorder }> {
    public render() {
        return <button onClick={this.props.recorder.recordAudio}>record</button>;
    }
}
