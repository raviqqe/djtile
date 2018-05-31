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

const Tiles = styled.div`
    display: grid;
`;

export default class extends React.Component {
    public render() {
        return <Background><Tiles><Tile /></Tiles></Background>;
    }
}
