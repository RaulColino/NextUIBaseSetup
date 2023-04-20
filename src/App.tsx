import { NextUIProvider } from "@nextui-org/react";
import Dashboard from "./Example";
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
        <Dashboard />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default App;
