// import Button from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Ejemplos() {
  return (
    <>
      <Button variant="contained" color="error">
        Click
      </Button>
      <Button
        variant="contained"
        sx={{
          bgcolor: "transparent",
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
      >
        Click
      </Button>
      <TextField
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
      />
      <Checkbox {...label} />
      <Box component="section">
        <Typography variant="h6" component="span">
          Lorem ipsum dolor sit.
        </Typography>
      </Box>
    </>
  );
}
