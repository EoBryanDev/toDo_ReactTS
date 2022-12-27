import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../styles/global-styles';
import defaultTheme from '../../styles/defaultTheme';
import Heading from '../../components/Heading';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Heading>Typescript + React + Vite + Eslint + Prettier *Boilerplate*</Heading>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
