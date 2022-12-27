import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/global-styles';
import defaultTheme from '../../styles/defaultTheme';
import Heading from '../../components/Heading';
import { Counter } from '../../features/counter';

function App() {
  return (
    // Redux Toolkit | Exportar config.json do vscode
    <ThemeProvider theme={defaultTheme}>
      <Heading>Typescript + React + Vite + Eslint + Prettier *Boilerplate*</Heading>
      <hr />
      <Counter />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
