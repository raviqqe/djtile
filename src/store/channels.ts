import { action, observable } from "mobx";

import Channel from "./channel";

export default class {
    @observable public currentChannelId: number = 0;
    @observable public channels: Channel[] = [new Channel()];

    @action.bound
    public setCurrentChannel(id: number) {
        this.currentChannelId = id;
    }
}
