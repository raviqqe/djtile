import { observer } from "mobx-react";
import * as React from "react";

import Channels from "../store/channels";
import Channel from "./Channel";

@observer
export default class extends React.Component<{ channels: Channels }> {
    public render() {
        const { channels: { channels, setCurrentChannel } } = this.props;

        return (
            <div>
                {channels.map((channel, index) =>
                    <Channel
                        channel={channel}
                        key={index}
                        select={() => setCurrentChannel(index)}
                    />)}
            </div>
        );
    }
}
