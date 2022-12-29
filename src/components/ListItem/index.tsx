import { useState } from 'react'
import * as Styled from './styles'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type Item = {
  id: number
  name: string
  done: boolean
}

type Props = {
  item: Item
  onDelete : (id : number) => void
}

const ListItem = ({ item, onDelete }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done)
  return (
    <Styled.Item done={isChecked}>
      <input 
      type='checkbox' 
      checked={isChecked} 
      onChange={e => setIsChecked(e.target.checked)} 
      />
      <label>{item.name}</label>
      <DeleteForeverIcon className='excludeItem' onClick={() => onDelete(item.id)} />
    </Styled.Item>
  )
}

export default ListItem
