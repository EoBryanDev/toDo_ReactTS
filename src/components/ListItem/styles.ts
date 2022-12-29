import styled from 'styled-components'

type ContainerProps = {
    done : boolean
}

export const Item = styled.div(
  ( { done }: ContainerProps ) =>
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    justify-content: space-around;
    align-items: center;
    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
    
    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through': 'initial'};
    }
    .edit {
        width: 50%;
        padding: 10px;
        border: 1px solid #555;
        border-radius: 5px;
        border: 0;
        outline: 0;
        background: rgba(255,255,255,0.2);
        color: yellow;
    }
    .excludeItem:hover{
        color: red;
    }
    `,
)
