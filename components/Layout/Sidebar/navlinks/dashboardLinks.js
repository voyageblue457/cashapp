import {
  FaHome,
  FaEnvelope,
  FaUsers,
  FaImage,
  FaGlobe,
  FaMousePointer,
  FaQrcode,
} from "react-icons/fa";

export const dashboardLinks = [
  {
    name: "Dashboard",
    link: "/",
    icon: <FaHome />,
  },
  {
    name: "Information",
    link: "/information",
    icon: <FaEnvelope />,
  },
  {
    name: "Collections",
    link: "/collections",
    icon: <FaEnvelope />,
  },
  {
    name: "Cash App",
    link: "/cash-app",
    icon: <FaEnvelope />,
  },
  {
    name: "Posters",
    link: "/posters",
    icon: <FaUsers />,
  },
  {
    name: "ID Card",
    link: "/id-card",
    icon: <FaImage />,
  },
  {
    name: "Links",
    link: "/links",
    icon: <FaGlobe />,
  },
  // {
  //   name: "Clicks",
  //   link: "/clicks",
  //   icon: <FaMousePointer />,
  // },
  {
    name: "QR Code",
    link: "/qr-code",
    icon: <FaQrcode />,
  },
];
// export const adminLinks = [
//   {
//     links: [
//       {
//         id: 1,
//         name: "Dashboard",
//         link: "/admin",
//         icon: <AiOutlineDashboard />,
//       },
//     ],
//   },
//   {
//     heading: "Registration",
//     links: [
//       {
//         id: 1,
//         name: "Entry",
//         link: "/admin/entry",
//         icon: <FaClipboardList />,
//         // subLinks: [
//         //   {
//         //     id: 1,
//         //     name: "Add Entry",
//         //   },
//         //   {
//         //     id: 2,
//         //     name: "All Entries",
//         //   },
//         // ],
//       },
//       {
//         id: 2,
//         name: "Machine",
//         link: "/admin/machine",
//         icon: <MdCoffeeMaker />,

//         // subLinks: [
//         //   {
//         //     id: 1,
//         //     name: "Add Machine",
//         //   },
//         //   {
//         //     id: 2,
//         //     name: "All Machines",
//         //   },
//         // ],
//       },
//       {
//         id: 3,
//         name: "Product",
//         link: "/admin/product",
//         icon: <GoPackage />,

//         // subLinks: [
//         //   {
//         //     id: 1,
//         //     name: "Add Product",
//         //   },
//         //   {
//         //     id: 2,
//         //     name: "All Products",
//         //   },
//         // ],
//       },
//     ],
//   },

//   {
//     heading: "Inventory",
//     links: [
//       {
//         id: 1,
//         name: "Purchase",
//         link: "/admin/purchase",
//         icon: <BiPurchaseTagAlt />,

//         // subLinks: [
//         //   {
//         //     id: 1,
//         //     name: "Add Purchuse",
//         //   },
//         //   {
//         //     id: 2,
//         //     name: "All Purchuses",
//         //   },
//         // ],
//       },
//       {
//         id: 2,
//         name: "Sale",
//         link: "/admin/sale",
//         icon: <MdSell />,
//         // subLinks: [
//         //   {
//         //     id: 1,
//         //     name: "Add Sale",
//         //   },
//         //   {
//         //     id: 2,
//         //     name: "All Sales",
//         //   },
//         // ],
//       },
//       {
//         id: 3,
//         name: "Return",
//         link: "/admin/return",
//         icon: <MdKeyboardReturn />,

//         // subLinks: [
//         //   {
//         //     id: 1,
//         //     name: "Add Return",
//         //   },
//         //   {
//         //     id: 2,
//         //     name: "All Returns",
//         //   },
//         // ],
//       },
//       {
//         id: 4,
//         name: "Pre Stock",
//         link: "/admin/pre-stock",
//         icon: <BiPackage />,

//         // subLinks: [
//         //   {
//         //     id: 1,
//         //     name: "Add Pre Stock",
//         //   },
//         //   {
//         //     id: 2,
//         //     name: "All Pre Stocks",
//         //   },
//         // ],
//       },
//     ],
//   },

//   {
//     heading: "Cash Ledger",
//     links: [
//       {
//         id: 1,
//         name: "Receive",
//         link: "/admin/receive",
//         icon: <BiCoinStack />,

//         // subLinks: [
//         //   {
//         //     id: 1,
//         //     name: "Add Receive",
//         //   },
//         //   {
//         //     id: 2,
//         //     name: "All Receives",
//         //   },
//         // ],
//       },
//       {
//         id: 2,
//         name: "Payment",
//         link: "/admin/payment",
//         icon: <MdOutlinePayments />,

//         // subLinks: [
//         //   {
//         //     id: 1,
//         //     name: "Add Payment",
//         //   },
//         //   {
//         //     id: 2,
//         //     name: "All Payments",
//         //   },
//         // ],
//       },
//     ],
//   },

//   {
//     heading: "Report",
//     links: [
//       {
//         id: 1,
//         name: "Sale N Receive By Month",
//         link: "/admin/sale-and-receive",
//         icon: <GoReport />,
//       },
//       {
//         id: 2,
//         name: "Expenditure Details",
//         link: "/admin/expenditure-details",
//         icon: <FaMoneyBillAlt />,
//       },
//       {
//         id: 3,
//         name: "Expenditure Summary",
//         link: "/admin/expenditure-summary",
//         icon: <FaCoins />,
//       },
//       {
//         id: 4,
//         name: "Employer Summary",
//         link: "/admin/employer-summary",
//         icon: <MdPeopleAlt />,
//       },
//       {
//         id: 5,
//         name: "Total Sale By Month",
//         link: "/admin/total-sale-by-month",
//         icon: <TbReportMoney />,
//       },
//       {
//         id: 6,
//         name: "Customer",
//         link: "/admin/customer",
//         icon: <IoIosPeople />,
//       },
//       {
//         id: 7,
//         name: "By Executive",
//         link: "/admin/by-executive",
//         icon: <FaUserTie />,
//       },
//       {
//         id: 8,
//         name: "Others",
//         link: "/admin/others",
//         icon: <FaListUl />,
//       },

//       {
//         id: 9,
//         name: "Supplier",
//         link: "/admin/supplier",
//         icon: <ImUserCheck />,
//       },
//       {
//         id: 10,
//         name: "Stock Details",
//         link: "/admin/stock-details",
//         icon: <BiListPlus />,
//       },
//       {
//         id: 11,
//         name: "Bank",
//         link: "/admin/bank",
//         icon: <AiFillBank />,
//       },
//     ],
//   },
// ];
