import { action, computed, observable } from "mobx";

import Channel from "./channel";

export default class {
    @observable public currentChannelId: number = 0;
    @observable public channels: Channel[] = [new Channel()];

    @computed get currentChannel() {
        return this.channels[this.currentChannelId];
    }

    @action.bound
    public setCurrentChannel(id: number) {
        this.currentChannelId = id;
    }
}
