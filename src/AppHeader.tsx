import React from "react";
import {
  AppBar,
  Icon,
  IconButton,
  Toolbar,
  Container,
  Tooltip,
  Typography,
} from "@mui/material";
import format from "date-fns/format";

// import Logo from "common/Logo";
import { Link } from "react-router-dom";
import { RouteEnum } from "constants/RouteConstants";

function AppHeader() {
  return (
    <div className='bg-gray-300'>
    <AppBar elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={RouteEnum.HOME}>
            <div className='text-blue-500 font-bold text-lg'>Colabspace</div>
          </Link>

          <div className="flex-1" />
          <Typography className="text-gray-300">{format(new Date(), "p . E, LLL qo")}</Typography>

          <div className="flex items-center">
            <Tooltip title="Settings">
              <IconButton>
                <Icon>settings</Icon>
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}

export default AppHeader;
