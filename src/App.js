import logo from "./logo.svg";
// import './App.css';
import Navigation from "../src/pages/Navigation";

import Container from "@mui/material/Container";
import GuildDetailSide from "./pages/partial/GuildDetailSide";

function App() {
  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Navigation />
      {/* <GuildDetailSide /> */}
    </Container>
  );
}

export default App;
