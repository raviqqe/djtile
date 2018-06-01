import * as React from "react";
import styled from "styled-components";

const Tile = styled.div`
    width: 2cm;
    height: 2cm;
    background: ${({ color }) => color};
`;

interface IProps {
    color: string;
}

export default class extends React.Component<IProps> {
    public render() {
        return <Tile {...this.props} />;
    }
}
