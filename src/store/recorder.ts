import { action, configure, observable } from "mobx";

export default class {
    @observable public audio: MediaStream | null = null;

    @action.bound
    public recordAudio = async () => {
        this.audio = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    }
}
