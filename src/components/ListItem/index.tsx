import React from 'react'
import { Item } from '../../types/Item'
import * as Styled from './styles'

 type Props = {
  //    children: React.ReactNode
  item: Item
} 

const ListItem = ({ item } : Props) => {
    return (
        <Styled.Item>
            {item.name}
        </Styled.Item>
    )
}

export default ListItem;
