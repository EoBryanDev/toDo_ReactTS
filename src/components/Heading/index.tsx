import React from 'react';
import * as Styled from './styles';

interface IProps {
  children: React.ReactNode
}

const Heading: React.FC<IProps> = ({ children }) => (
    <Styled.Title>
        {children}
    </Styled.Title>
)

export default Heading
