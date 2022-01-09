import logo from "./logo.svg";
// import './App.css';
import Navigation from "../src/pages/Navigation";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { MenuContextProvider } from "./context/MenuContext";
import { ActiveMenuContextProvider } from "./context/ActiveMenuContext";
const theme = createTheme({});
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ActiveMenuContextProvider>
          <MenuContextProvider>
            <Navigation />
          </MenuContextProvider>
        </ActiveMenuContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
