import { action, configure, observable } from "mobx";

export default class {
    @observable public audio: MediaStream | null = null;

    @action
    public async recordAudio() {
        this.audio = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    }
}
