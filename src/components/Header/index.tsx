import React from 'react'
import * as Styled from './styles'

interface IProps {
  children: React.ReactNode
}

const Header: React.FC<IProps>  = ({ children }) => {
    return (
        <Styled.Heading>
            {children}
        </Styled.Heading>
    )
}

export default Header;
