import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import SideBar from "./partial/SideBar";
import GuildDetailSide from "./partial/GuildDetailSide";

const IntegrationGuild = () => {
  const [active, setActive] = useState("synopsis");
  const [clickedOn, setClickedOn] = useState("");

  return (
    <div>
      <h1 style={{ color: "#262D54" }}>Web Integration Guide</h1>
      <Grid container>
        <Grid item xs={2.5}>
          <div style={{ position: "sticky", top: 0 }}>
            <SideBar
              active={active}
              setActive={setActive}
              clickedOn={clickedOn}
              setClickedOn={setClickedOn}
            />
          </div>
        </Grid>
        <Grid item xs={9.5}>
          <GuildDetailSide
            active={active}
            setActive={setActive}
            clickedOn={clickedOn}
            setClickedOn={setClickedOn}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default IntegrationGuild;
