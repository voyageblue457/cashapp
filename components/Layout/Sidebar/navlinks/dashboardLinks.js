import {
  FaHome,
  FaEnvelope,
  FaUsers,
  FaGlobe,
  FaDollarSign,
} from "react-icons/fa";

export const dashboardLinks = [
  {
    name: "Dashboard",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "Collections",
    link: "/collections",
    icon: <FaEnvelope />,
  },
  {
    name: "Amount",
    link: "/amount",
    icon: <FaDollarSign />,
  },
  {
    name: "Posters",
    link: "/posters",
    icon: <FaUsers />,
  },
  {
    name: "Links",
    link: "/links",
    icon: <FaGlobe />,
  },
  {
    name: "Withdraw",
    link: "/withdraw",
    icon: <FaGlobe />,
  },
];
