import { configure } from "mobx";

import Channels from "./channels";
import Recorder from "./recorder";

configure({ enforceActions: true });

export default class {
    public channels = new Channels();
    public recorder = new Recorder();
}
