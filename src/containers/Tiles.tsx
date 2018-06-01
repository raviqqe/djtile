import * as React from "react";
import styled from "styled-components";

import Tile from "../components/Tile";

const Background = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Row = styled.div`
    display: flex;
`;

export default class extends React.Component {
    public render() {
        return (
            <Background>
                <div>
                    <Row>
                        <Tile color="red" />
                        <Tile color="yellow" />
                    </Row>
                    <Row>
                        <Tile color="green" />
                        <Tile color="blue" />
                    </Row>
                </div>
            </Background>
        );
    }
}
