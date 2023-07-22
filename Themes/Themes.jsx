const { ThemeContext } = require("@/common/contexts/ThemeModeProvider")
const { createTheme, ThemeProvider } = require("@mui/material")
const { useContext } = require("react")
const fontName = "'Poppins', 'sans-serif"

const Themes = ({ children }) => {

    const { themeLight } = useContext(ThemeContext)

    const theme = createTheme({
        typography: {
            fontFamily: fontName
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,

                mobile: 640,
                tablet: 768,
                laptop: 1024
            },
        },


        palette: {
            mode: themeLight ? "light" : "dark",

            text: {
                1: "#272d2e",
                2: "#db2527",
                3: "#001D6E"
            },
            bg: {
                1: "#eaeaea",
                2: "#d50306",
            },
            button: {
                1: "#ffcf29",
            },
        },

    });

    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
};

export default Themes;