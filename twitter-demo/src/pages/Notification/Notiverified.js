import React from "react";

import "./Notifeed.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Notiverified() {
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
            fullWidth
            size="large"
            onClick={() => navigateTo("/notifications")}
            style={{ color: "#000", textTransform: "none" }}
          >
            All
          </Button>
          <Button
            className="textdecoration"
            fullWidth
            size="large"
            style={{ textTransform: "none", color: "#000", fontSize: 20 }}
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
      <div style={{ padding: 20, textAlign: "center" }}>
        <img
          src="https://abs.twimg.com/responsive-web/client-web/verification-check-400x200.v1.46c9cb39.png"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        />
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
          }}
        >
          Likes, mentions, Retweets, and a whole lot more — when it comes from a
          verified account, you’ll find it here
        </p>
        <div style={{ display: "flow" }}>
          <Link
            component="button"
            variant="body2"
            style={{
              color: "#000",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Learn more.
          </Link>
        </div>
      </div>
    </Grid>
  );
}

export default Notiverified;
