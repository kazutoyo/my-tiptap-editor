import { createTheme } from "@kuma-ui/core";
import { breakpoints, colors } from "@/theme";

const theme = createTheme({
  colors: colors,
  breakpoints: breakpoints,
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
