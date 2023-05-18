import React from "react";
import "./Trending.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
function Trending({ head, tag, tweet }) {
  return (
    <div className="trend">
      <div className="trending">
        <div className="trending_header">
          <h6 className="h6">{head}</h6>
          <Button className="b1">
            <MoreHorizIcon fontSize="small" />
          </Button>
        </div>
        <div className="trending_tag">
          <h5>#{tag}</h5>
        </div>
        <div className="tweets">
          <h6 className="h6">{tweet} Tweets</h6>
        </div>
      </div>
    </div>
  );
}

export default Trending;
