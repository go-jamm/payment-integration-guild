import logo from "./logo.svg";
// import './App.css';
import Navigation from "../src/pages/Navigation";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { MenuContextProvider } from "./context/MenuContext";
const theme = createTheme({});
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MenuContextProvider>
          <Navigation />
        </MenuContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
