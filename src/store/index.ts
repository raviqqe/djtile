import { configure } from "mobx";

import Channels from "./channels";
import Recorder from "./recorder";

configure({ enforceActions: true });

export default class {
    public channels: Channels;
    public recorder: Recorder;

    constructor() {
        this.channels = new Channels();
        this.recorder = new Recorder(this.channels);
    }
}
