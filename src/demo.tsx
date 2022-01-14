import * as React from "react";
import { Chip, Typography, Box, Stack } from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { amber, deepPurple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#00fff0",
    },
  },
});
const theme2 = createTheme({
  palette: {
    primary: amber,
    secondary: deepPurple,
  },
});

const ColorBox = ({ color, name }) => (
  <Box
    width={50}
    height={50}
    bgcolor={color}
    color={name === "contrastText" ? "black" : "white"}
    display="flex"
    justifyContent="center"
    alignContent="center"
    border={1}
  >
    <Typography variant="caption">{name}</Typography>
  </Box>
);

const Content = ({ title }) => {
  const theme = useTheme();
  const { primary, secondary } = theme.palette;

  return (
    <Stack direction="row">
      <Box mr={5}>
        <Typography variant="h6">{title}</Typography>
        <Chip color="primary" label="chip" />
        <Chip color="secondary" label="chip" />
        <Typography variant="body1">primary</Typography>
        <Stack gap={2} direction="row" mb={2}>
          <ColorBox color={primary.main} name="main" />
          <ColorBox color={primary.dark} name="dark" />
          <ColorBox color={primary.light} name="light" />
          <ColorBox color={primary.contrastText} name="contrastText" />
        </Stack>
        <Typography variant="body1">secondary</Typography>
        <Stack gap={2} direction="row" mb={2}>
          <ColorBox color={secondary.main} name="main" />
          <ColorBox color={secondary.dark} name="dark" />
          <ColorBox color={secondary.light} name="light" />
          <ColorBox color={secondary.contrastText} name="contrastText" />
        </Stack>
      </Box>
      <pre>{JSON.stringify({ primary, secondary }, null, 4)}</pre>
    </Stack>
  );
};

export default function BasicUsage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Content title="Custom color" />
      </ThemeProvider>
      <ThemeProvider theme={theme2}>
        <Content title="MUI color" />
      </ThemeProvider>
    </>
  );
}
