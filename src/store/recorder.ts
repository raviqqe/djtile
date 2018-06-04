import { action, configure, observable } from "mobx";

import { sleep } from "../utils";
import Channels from "./channels";

declare const MediaRecorder: any;

export default class {
    private channels: Channels;
    private recorder = navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
    }).then((stream) => new MediaRecorder(stream));

    constructor(channels: Channels) {
        this.channels = channels;
    }

    @action.bound
    public recordAudio = async () => {
        const recorder = await this.recorder;

        const blob: Promise<Blob> = new Promise((resolve) =>
            recorder.ondataavailable = ({ data }) => resolve(data));

        recorder.start();
        await sleep(this.channels.currentChannel.interval * 1000);
        recorder.stop();

        const reader = new FileReader();
        const buffer: Promise<ArrayBuffer> = new Promise((resolve) =>
            reader.onload = () => resolve(reader.result));

        reader.readAsArrayBuffer(await blob);

        this.channels.currentChannel.setAudio(
            await (new AudioContext()).decodeAudioData(await buffer));
    }
}
