import * as React from "react";
import styled from "styled-components";

import Channel from "../store/channel";

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
    width: 6em;
    height: 6em;
`;

interface IProps {
    channel: Channel;
    select: () => void;
}

export default class extends React.Component<IProps> {
    public render() {
        const { channel, select } = this.props;

        return (
            <Buttons>
                <Button onClick={select}>select</Button>
                <Button onClick={channel.playOneShot}>play</Button>
                <Button onClick={channel.toggle}>toggle</Button>
            </Buttons>
        );
    }
}
