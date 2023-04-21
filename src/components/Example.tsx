import React from "react";
import { Switch, styled, useTheme } from "@nextui-org/react";
import { useTheme as useNextThemes } from "next-themes";
import { appThemeKeys, appThemes } from "../theme/app-theme";

/* Tips: Don't install stitchesjs, use it from @nextui-org/react as it is already included in NextUI.
If you do it you cant use the theme from NextUI. */

const Button = styled("button", {
  color: "red",
  backgroundColor: "$myCustomColor",
  "&:hover": {
    color: "blue",
    backgroundColor: "red",
  },
});

const Container = styled("div", {
  backgroundColor: "$secondaryLight",
});

type Props = {};

export default function Example({}: Props) {
  //const { theme } = useTheme();
  const { theme, setTheme } = useNextThemes();
  return (
    <Container>
      <Button>Click me</Button>
      {/* <p style={{ color: theme?.colors.myDarkColor.value }}>NextUI</p> //this snippet doesn't work*/}
      {/* Switch to change theme */}
      <Switch
        checked={theme === appThemeKeys.darkThemeKey}
        onChange={(e) => {
          setTheme(
            e.target.checked
              ? appThemeKeys.darkThemeKey
              : appThemeKeys.lightThemeKey
          );
        }}
      />
    </Container>
  );
}
