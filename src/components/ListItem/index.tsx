import { useState, KeyboardEvent } from 'react'
import * as Styled from './styles'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

type Item = {
  id: number
  name: string
  done: boolean
}

type Props = {
  item: Item
  onDelete: (id: number) => void
  onChange: (id: number, done: boolean) => void
  onEdit: (id: number, name: string) => void
}

const ListItem = ({ item, onDelete, onChange, onEdit }: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const handleOnDoubleClick = () => {
    setIsEditing(!isEditing)
  }
  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter'){
        setIsEditing(!isEditing)
    }
  }
  return (
    <Styled.Item done={item.done}>
      <input
        type='checkbox'
        checked={item.done}
        onChange={(e) => onChange(item.id, e.target.checked)}
      />
      {isEditing ? (
        <input
          className='edit'
          value={item.name}
          type='text'
          onDoubleClick={() => handleOnDoubleClick()}
          onChange={(e) => onEdit(item.id, e.target.value)}
          onKeyUp={handleKeyUp}
        />
      ) : (
        <label onDoubleClick={() => handleOnDoubleClick()}>{item.name}</label>
      )}
      <DeleteForeverIcon className='excludeItem' onClick={() => onDelete(item.id)} />
    </Styled.Item>
  )
}

export default ListItem
