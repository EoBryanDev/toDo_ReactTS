import { useState } from 'react'
import * as Styled from './styles'

type Item = {
  id: number
  name: string
  done: boolean
}

type Props = {
  item: Item
}

const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done)
  return (
    <Styled.Item done={isChecked}>
      <input 
      type='checkbox' 
      checked={isChecked} 
      onChange={e => setIsChecked(e.target.checked)} 
      />
      <label>{item.name}</label>
    </Styled.Item>
  )
}

export default ListItem
