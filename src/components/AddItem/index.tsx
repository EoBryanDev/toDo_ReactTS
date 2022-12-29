import { useState, KeyboardEvent } from 'react'
import * as Styled from './styles'
import AddIcon from '@mui/icons-material/Add'

type Props ={
    onEnter: (taskName: string) => void
}

const AddArea = ({ onEnter } : Props) => {
  const [task, setTask] = useState('')
  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && task !== '') {
        onEnter(task);
        setTask('')
    }
  }
  return (
    <Styled.Container>
      <AddIcon />
      <input
        type='text'
        placeholder='Add a new task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Styled.Container>
  )
}

export default AddArea
