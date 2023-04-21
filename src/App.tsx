import { NextUIProvider } from "@nextui-org/react";
import Example from "./components/Example";
import { appThemeKeys, appThemes } from "./theme/app-theme";
import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider
      //disableTransitionOnChange
      attribute="class"
      defaultTheme={appThemeKeys.lightThemeKey} //one of the keys of appThemes object ('light' and 'dark')
      value={appThemes}
    >
      <NextUIProvider>
        <Example />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default App;
