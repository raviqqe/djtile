import { observer } from "mobx-react";
import * as React from "react";
import styled from "styled-components";

import Channels from "../store/channels";
import Channel from "./Channel";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

@observer
export default class extends React.Component<{ channels: Channels }> {
    public render() {
        const { channels: { channels, setCurrentChannel } } = this.props;

        return (
            <Container>
                {channels.map((channel, index) =>
                    <Channel
                        channel={channel}
                        key={index}
                        select={() => setCurrentChannel(index)}
                    />)}
            </Container>
        );
    }
}
