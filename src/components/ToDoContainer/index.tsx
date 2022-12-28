import React from 'react'
import * as Styled from './styles'

interface IProps {
  children: React.ReactNode
}

const ToDoContainer: React.FC<IProps>  = ({ children }) => {
    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    )
}

export default ToDoContainer;
