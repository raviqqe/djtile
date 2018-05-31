import * as React from "react";
import styled from "styled-components";

const Tile = styled.div`
    width: 2cm;
    height: 2cm;
    background: red;
`;

export default class extends React.Component {
    public render() {
        return <Tile />;
    }
}
