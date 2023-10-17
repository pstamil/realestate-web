import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Collapse,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandLess } from "@mui/icons-material";

function CantactNotify() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        border: "2px solid #F96423",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontWeight: "bold" }}>Notification Title</p>
          <span style={{ color: "gray", fontSize: "13px" }}>xxx.gamil.com</span>
        </Box>

        <Collapse in={expanded}>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Full message content goes here.
          </Typography>
        </Collapse>
        <div>
          <Button
            color="error"
            size="small"
            onClick={handleExpandClick}
            endIcon={expanded ? <ExpandLess /> : <ExpandMoreIcon />}
          >
            {expanded ? "Show Less" : "View Details"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CantactNotify;
