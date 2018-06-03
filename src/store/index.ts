import { configure } from "mobx";

import Recorder from "./recorder";

configure({ enforceActions: true });

export default {
    recorder: new Recorder(),
};
