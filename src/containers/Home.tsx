import * as React from "react";
import styled from "styled-components";

import Channels from "../components/Channels";
import Recorder from "../components/Recorder";
import Store from "../store";

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const Part = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`;

const Main = styled(Part) `
    padding: 1em;
`;

const SideBar = styled(Part) `
    align-items: center;
    background: white;
    max-width: 8em;
    padding: 1em;
`;

export default class extends React.Component<Store> {
    public render() {
        const { channels, recorder } = this.props;

        return (
            <Background>
                <Main>
                    <Channels channels={channels} />
                </Main>
                <SideBar>
                    <Recorder recorder={recorder} />
                </SideBar>
            </Background>
        );
    }
}
