import {ThemeProvider} from 'styled-components'
import GlobalStyles from './pokeDex/GlobalStyles';
import PokeDex from './pokeDex/PokeDex';


const theme = {
  colors:{
    body: '#09090D'
  },
}

function App() {
  return (
  <ThemeProvider theme={theme}>
    <PokeDex />

    <GlobalStyles />
  </ThemeProvider>  
  );
}

export default App;
