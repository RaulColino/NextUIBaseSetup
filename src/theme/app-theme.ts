import { createTheme, Theme } from "@nextui-org/react";

const fonts = {
  sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
};

const sharedTheme: Theme = {
  theme: {
    fonts,
  },
};

const lightTheme = createTheme({
  ...sharedTheme,
  type: "light",
  className: "my-light-theme", //important for next-themes to work
  theme: {
    colors: {
      myCustomColor: "#ff4ecd",
    },
  },
});

const darkTheme = createTheme({
  ...sharedTheme,
  type: "dark",
  className: "my-dark-theme", //important for next-themes to work
});

// Needed by ThemeProvider from next-themes inside App.tsx
export const appThemes = {
  myLightTheme: lightTheme.className,
  myDarkTheme: darkTheme.className,
};

// Keys of the object above
export const appThemeKeys = {
  lightThemeKey: Object.keys(appThemes)[0],
  darkThemeKey: Object.keys(appThemes)[1],
};
