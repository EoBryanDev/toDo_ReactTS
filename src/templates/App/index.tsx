import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/global-styles'
import defaultTheme from '../../styles/defaultTheme'
import MainContainer from '../../components/MainContainer'
import ToDoContainer from '../../components/ToDoContainer'
import Header from '../../components/Header'
import { useState } from 'react'
import { Item } from '../../types/Item'
import ListItem from '../../components/ListItem';

function App() {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar pao', done: false},
    {id: 2, name: 'Comprar manteiga', done: false}
  ])
  return (
    // Redux Toolkit | Exportar config.json do vscode
    <ThemeProvider theme={defaultTheme}>
      <MainContainer>
        <ToDoContainer>
          <Header>Lista de Tarefas</Header>
          {/* Adicionar Nova tarefa */}

          {/* Lista de Tarefas */}
          {list.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ToDoContainer>
      </MainContainer>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
