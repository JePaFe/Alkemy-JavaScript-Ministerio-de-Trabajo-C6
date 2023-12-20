import { AppBar, Toolbar, Typography } from "@mui/material";

export default function NavigationBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" component="h1">
          Mi Aplicación
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
