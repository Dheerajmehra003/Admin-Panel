import { createContext, useState, useMemo } from "react";
import {createTheme} from '@mui/material/styles'

//color design token 
export const tokens = (mode) => ({
...(mode === "dark"
    ? {
        gray: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        primary: {
            100: "#d0d1d4",
            200: "#a1a3a9",
            300: "#73757f",
            400: "#444754",
            500: "#151929",
            600: "#111421",
            700: "#0d0f19",
            800: "#080a10",
            900: "#040508"
        },
        greenAccent: {
            100: "#ddf9f2",
            200: "#bbf4e5",
            300: "#98eed8",
            400: "#76e9cb",
            500: "#54e3be",
            600: "#43b698",
            700: "#328872",
            800: "#225b4c",
            900: "#112d26"
        },
        redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f"
        }, 
        blueAccent: {
            100: "#e0e2ff",
            200: "#c1c4ff",
            300: "#a1a7ff",
            400: "#8289ff",
            500: "#636cff",
            600: "#4f56cc",
            700: "#3b4199",
            800: "#282b66",
            900: "#141633"
        },
    }
     : {
        gray: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
        },
        primary: {
            100: "#040508",
            200: "#080a10",
            300: "#0d0f19",
            400: "#f2f0f0",
            500: "#151929",
            600: "#444754",
            700: "#73757f",
            800: "#a1a3a9",
            900: "#d0d1d4",
        },
        greenAccent: {
            100: "#112d26",
            200: "#225b4c",
            300: "#328872",
            400: "#43b698",
            500: "#54e3be",
            600: "#76e9cb",
            700: "#98eed8",
            800: "#bbf4e5",
            900: "#ddf9f2",
        },
        redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb",
        }, 
        blueAccent: {
            100: "#141633",
            200: "#282b66",
            300: "#3b4199",
            400: "#4f56cc",
            500: "#636cff",
            600: "#8289ff",
            700: "#a1a7ff",
            800: "#c1c4ff",
            900: "#e0e2ff",
        },
    }
)
})

//mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
        mode: mode,
        ...(mode === 'dark'
            ? {
              primary: {
                main: colors.primary[500],
              },   
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.gray[700],
                main: colors.gray[500],
                light: colors.gray[100]
              },
              background: {
                default: colors.primary[500]
              }   
            } : {
                primary: {
                    main: colors.primary[100],
                  },   
                  secondary: {
                    main: colors.greenAccent[500],
                  },
                  neutral: {
                    dark: colors.gray[700],
                    main: colors.gray[500],
                    light: colors.gray[100]
                  },
                  background: {
                    default:"fcfcfc",
                  }, 
       }),
    },
    typography: {
        fontFamily: ["Source code pro", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Source code pro", "sans-serif"].join(","),
            fontSize: 40,
        },
        h2: {
            fontFamily: ["Source code pro", "sans-serif"].join(","),
            fontSize: 32,
        },
        h3: {
            fontFamily: ["Source code pro", "sans-serif"].join(","),
            fontSize: 24,
        },
        h4: {
            fontFamily: ["Source code pro", "sans-serif"].join(","),
            fontSize: 20,
        },
        h5: {
            fontFamily: ["Source code pro", "sans-serif"].join(","),
            fontSize: 16,
        },
        h6: {
            fontFamily: ["Source code pro", "sans-serif"].join(","),
            fontSize: 14,
        }
    }
  }
}

// context color mode 
export const colorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () =>{
    const [mode, setMode] = useState("dark")

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)),[mode]);

    return[theme, colorMode];
}
