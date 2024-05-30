import { IoMdHome } from "react-icons/io";
import { BiMoviePlay } from "react-icons/bi";
import { PiTelevisionBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

export const navigation = [
  {
    label: "TV shows",
    href: "tv",
    icon: <PiTelevisionBold />,
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiMoviePlay />,
  },
];
export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <IoMdHome />,
  },

  ...navigation,

  {
    label: "Home",
    href: "/search",
    icon: <FaSearch />,
  },
];
