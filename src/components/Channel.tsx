import * as React from "react";

import Channel from "../store/channel";

interface IProps {
    channel: Channel;
    select: () => void;
}

export default class extends React.Component<IProps> {
    public render() {
        const { channel, select } = this.props;

        return (
            <div>
                <button onClick={select}>select</button>
                <button onClick={channel.playOneShot}>play</button>
                <button onClick={channel.toggle}>toggle</button>
            </div>
        );
    }
}
