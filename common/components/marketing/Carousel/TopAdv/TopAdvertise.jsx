import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import { socialLink } from "@/data/link-url";
import { Typography, styled } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";



const Main = styled("div")(({ theme }) =>
    theme.unstable_sx({
        display: "flex",
        justifyContent: "space-evenly",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "bg.1",
        px: createFluidValue(0.4, 1),
        height: createFluidValue(1, 2),
        userSelect: "none",
    }),
);
const AdvRun = styled("div")(({ theme }) =>
    theme.unstable_sx({
        display: "flex",
        alignItems: "center",
        px: createFluidValue(0.4, 1),
        height: createFluidValue(1, 2),
        userSelect: "none",
        "& p": {
            fontSize: createFluidValue(0.6, 0.9)
        },
        "p:nth-of-type(2)": {
            background: "linear-gradient(60deg, #FB2576, #F31559, #FEC260)",
            color: "transparent",
            backgroundClip: "text",
            fontWeight: 600,
            px: '0.5em'
        },
        "p:nth-of-type(1)": {
            color: "text.3"
        }
    }),
);

const SocialLogo = styled("div")(({ theme }) =>
    theme.unstable_sx({
        display: "flex",
        alignItems: "center",
        px: createFluidValue(0.4, 1),
        height: createFluidValue(1, 2),
        userSelect: "none",
        "& a": {
            color: "text.3",
            display: "flex",
            alignItems: "center",
            fontSize: createFluidValue(0.6, 0.9)
        },
        " & svg ": {
            ml: createFluidValue(0.5, 1),

        },
        "& svg:hover": {
            cursor: "pointer",
            color: "text.1"
        }
    }),
);



const TopAdvertise = () => {
    return (
        <Main>
            <AdvRun>
                <Typography>{"Get up to 50% OFF use Promo Code "}</Typography>
                <Typography>{"AKOTA#70"}</Typography>
            </AdvRun>
            <SocialLogo>

                {
                    socialLink.map((sLink, i) => (
                        <Link href={sLink.url} key={i}>{sLink.name}</Link>
                    ))
                }
            </SocialLogo>
        </Main>
    )
}
export default TopAdvertise