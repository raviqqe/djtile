export default class {
    public interval: number = 1; // in seconds
    private audio?: AudioBuffer;
    private source?: AudioBufferSourceNode;

    public playOneShot = () => {
        this.prepareSource().start();
    }

    public toggle = () => {
        if (this.source) {
            this.stop();
        } else {
            this.start();
        }
    }

    public setAudio = (audio: AudioBuffer) => {
        this.audio = audio;
    }

    private start = () => {
        this.source = this.prepareSource();
        this.source.loop = true;
        this.source.loopEnd = this.interval;
        this.source.start();
    }

    private stop = () => {
        if (!this.source) {
            throw new Error("audio is not played");
        }

        this.source.stop();
        delete this.source;
    }

    private prepareSource = (): AudioBufferSourceNode => {
        if (!this.audio) {
            throw new Error("no audio data is set");
        }

        const context = new AudioContext();

        const source = context.createBufferSource();

        source.buffer = this.audio;
        source.connect(context.destination);

        return source;
    }
}
