import logo from "./logo.svg";
// import './App.css';
import Navigation from "../src/pages/Navigation";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
const theme = createTheme({
 
});
function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </div>
  );
}

export default App;
