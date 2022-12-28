import React from 'react'
import * as Styled from './styles'

interface IProps {
  children: React.ReactNode
}

const MainContainer: React.FC<IProps>  = ({ children }) => {
    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    )
}

export default MainContainer;
