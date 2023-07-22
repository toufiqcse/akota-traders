import Themes from "@/Themes/Themes"
import ThemeModeProvider from "../contexts/ThemeModeProvider"
import { CssBaseline } from "@mui/material"
import Footer from "../components/shared/Footer/Footer"
import Navbar from "../components/shared/Navbar/Navbar"
import TopAdvertise from "../components/marketing/Carousel/TopAdv/TopAdvertise"

const Layout = ({ children }) => {
    return (
        <ThemeModeProvider>
            <Themes>
                <CssBaseline enableColorScheme />
                <div>
                    <TopAdvertise />
                    <div className="maxWidth">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </div>


            </Themes>
        </ThemeModeProvider>
    )
}

export default Layout