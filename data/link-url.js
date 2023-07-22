import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import YoutubeIcon from "@mui/icons-material/YouTube";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import StoreIcon from "@mui/icons-material/Store";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export const socialLink = [
  { id: 2, name: <FacebookIcon />, url: "/#" },
  { id: 3, name: <InstagramIcon />, url: "/#" },
  { id: 4, name: <EmailIcon />, url: "/#" },
  { id: 5, name: <YoutubeIcon />, url: "/#" },
];

export const NavLinks = [
  { name: "Home", href: "/", icon: <HomeIcon /> },
  { name: "Products", href: "/products", icon: <StoreIcon /> },
  { name: "Brands", href: "/menu", icon: <WidgetsIcon /> },
  { name: "Categories", href: "/offers", icon: <EventIcon /> },
  { name: "Store", href: "/store", icon: <ContactPageIcon /> },
  { name: "FAQ", href: "/blog", icon: <ArticleIcon /> },
];
