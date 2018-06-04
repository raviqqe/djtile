import * as React from "react";
import styled from "styled-components";

import Channels from "../components/Channels";
import Recorder from "../components/Recorder";
import Store from "../store";

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class extends React.Component<Store> {
    public render() {
        const { channels, recorder } = this.props;

        return (
            <Background>
                <Recorder recorder={recorder} />
                <Channels channels={channels} />
            </Background>
        );
    }
}
