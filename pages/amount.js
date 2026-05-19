import { useSession } from "next-auth/react";
import { FaDollarSign } from "react-icons/fa";
import Loader from "../components/common/Loader";
import Table from "../components/Table";
import useGetData from "../hooks/useGetData";
import { getTimeDistance } from "../utils/getTimeDistance";

const getAmountColumn = (admin, posterUsername) => [
  {
    Header: "Website",
    accessor: "site",
    width: "auto",
  },
  {
    Header: "Username",
    accessor: (row) => row.root?.username || (admin ? "Admin" : (posterUsername || "Admin")),
    id: "username",
    width: "auto",
  },
  {
    Header: "Amount",
    accessor: "amount",
    width: "auto",
    Cell: ({ value }) => {
      const parsed = parseFloat(value);
      return (
        <span className="font-bold text-emerald-600">
          {value ? (!isNaN(parsed) ? `$${parsed.toFixed(2)}` : value) : "-"}
        </span>
      );
    },
  },
  {
    Header: "Time",
    accessor: "createdAt",
    disableSortBy: true,
    width: "auto",
    Cell: ({ row }) => (
      <div className="flex justify-center items-center">
        {row.original.createdAt && getTimeDistance(row.original.createdAt)}
      </div>
    ),
  },
];

function AmountPage() {
  const { data: session } = useSession();
  const admin = session?.user?.admin;
  const id = admin ? session?.user?.adminId : (session?.user?.posterId || session?.user?.id);

  console.log(id, 'posterId')

  const { data: fetchedData, isLoading } = useGetData(
    id ? `/amount/list/${id}` : null
  );

  const details = fetchedData?.data?.data;
  console.log('details', details)

  const columns = getAmountColumn(admin, session?.user?.username);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaDollarSign />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">
          Amount History
        </h1>
      </div>

      <Loader isLoading={isLoading}>
        <div className="mt-7">
          <div className="p-4 bg-white rounded shadow-md lg:p-8">
            {details && details.length > 0 ? (
              <Table columnsHeading={columns} usersData={details} />
            ) : (
              <p className="text-gray-500 py-4 text-center">No amount logs found</p>
            )}
          </div>
        </div>
      </Loader>
    </div>
  );
}

export default AmountPage;
