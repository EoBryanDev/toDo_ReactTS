import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/global-styles'
import defaultTheme from '../../styles/defaultTheme'
import MainContainer from '../../components/MainContainer'
import ToDoContainer from '../../components/ToDoContainer'
import Header from '../../components/Header'
import { useState, useMemo } from 'react'
import { Item } from '../../types/Item';
import ListItem from '../../components/ListItem';
import AddItem from '../../components/AddItem';



function App() {
  const [list, setList] = useState<Item[]>([
  ])
  const showList = useMemo(() => list, [list])

  const handleAddTask = (taskLabel: string) => {
    const newList = [...list]
    newList.push({
        id: list.length + 1,
        name: taskLabel,
        done: false
    })
    setList(newList)
  }
  const handleEditTask = (id: number, name: string) => {
    const newList = [...list];
    console.log(newList);
    
    for(const i in newList) {
      if(newList[i].id === id) {
        newList[i].name = name;
      }
    }
    setList(newList)
  }
  const handleDeleteTask = (id : number) => {
    const newList = list.filter(item => (
        item.id != id
    ))
    setList(newList)
    
  }
  const handleDoneTask = (id: number, done: boolean) => {
    const newList = [...list];
    console.log(newList);
    
    for(const i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList)
  }
  
  return (
    // Redux Toolkit | Exportar config.json do vscode
    <ThemeProvider theme={defaultTheme}>
      <MainContainer>
        <ToDoContainer>
          <Header>Lista de Tarefas</Header>
          {/* Adicionar Nova tarefa */}
          <AddItem onEnter={handleAddTask} />

          {/* Lista de Tarefas */}
          {showList.map((item, index) => (
            <ListItem key={index} item={item} onDelete={handleDeleteTask} onChange={handleDoneTask} onEdit={handleEditTask} />
          ))}
        </ToDoContainer>
      </MainContainer>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
