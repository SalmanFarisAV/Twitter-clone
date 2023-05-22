import React from "react";
import "./Trending.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FlipMove from "react-flip-move";
import { Button } from "@mui/material";
function Trending({ head, tag, tweet }) {
  return (
    <FlipMove>
      <div className="trend">
        <div className="trending">
          <div className="trending_header">
            <h5 className="h6">{head}</h5>
            <Button className="b11">
              <MoreHorizIcon fontSize="small" />
            </Button>
          </div>
          <div className="trending_tag">
            <h4>{tag}</h4>
          </div>
          <div className="tweets">
            <h5 className="h6">{tweet}</h5>
          </div>
        </div>
      </div>
    </FlipMove>
  );
}

export default Trending;
