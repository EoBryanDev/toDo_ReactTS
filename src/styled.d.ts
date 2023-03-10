// styled.d.ts
import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string,
    colors: {
        primaryColor : IPalette,
        secondaryColor: IPalette,
        thirdColor: IPalette,
    }
  }
}
