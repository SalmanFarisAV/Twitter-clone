import React from "react";
import "./Notifeed.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

function Notifeed() {
  const navigateTo = useNavigate();

  return (
    <Grid className="notifeed">
      <Card>
        <h1 style={{ fontSize: 18, display: "flex", padding: 12 }}>
          Notifications
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            className="textdecoration"
            fullWidth
            size="large"
            style={{
              textTransform: "none",
              color: "#000",
              fontSize: 20,
            }}
          >
            All
          </Button>
          <Button
            fullWidth
            size="large"
            style={{ textTransform: "none", color: "#000" }}
            onClick={() => navigateTo("/notifications/verified")}
          >
            Verified
          </Button>
          <Button
            fullWidth
            size="large"
            onClick={() => navigateTo("/notifications/mention")}
            style={{ textTransform: "none", color: "#000" }}
          >
            Mentions
          </Button>
        </div>
      </Card>
      <div style={{ padding: 20 }}>
        <h2
          style={{
            alignItems: "center",
            fontSize: 30,
            fontWeight: 1000,
            justifyContent: "center",
            display: "flex",
          }}
        >
          Nothing to see here
        </h2>
        <h2
          style={{
            fontSize: 30,
            fontWeight: 1000,
            justifyContent: "center",
            display: "flex",
          }}
        >
          — yet
        </h2>
        <p
          style={{
            fontSize: 15,
            display: "center",
            justifyContent: "flex",
            alignItems: "flex",
            textAlign: "center",
          }}
        >
          From likes to Retweets and a whole lot more, this is where all the
          action happens.
        </p>
      </div>
    </Grid>
  );
}

export default Notifeed;
