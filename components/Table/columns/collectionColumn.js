import Link from "next/link";
import { getTimeDistance } from "../../../utils/getTimeDistance";

export const getCollectionColumn = (handleCheckStatus, checkingIds) => [
  {
    Header: "Website",
    accessor: "site",
    width: "auto",
  },
  {
    Header: "Owner",
    accessor: "owner",
    width: "auto",
    Cell: ({ row, value }) => {
      return (
        <span className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer font-semibold">
          {value || "-"}
        </span>
      );
    }
  },
  {
    Header: "Admin",
    accessor: "admin",
    width: "auto",
    Cell: ({ value }) => <span>{value || "-"}</span>
  },
  {
    Header: "Amount",
    accessor: "amount",
    width: "auto",
    Cell: ({ value }) => {
      if (!value) return <span className="text-gray-400">-</span>;
      const parsed = parseFloat(value);
      return (
        <span className="font-bold text-emerald-600">
          {!isNaN(parsed) ? `$${parsed.toFixed(2)}` : `$${value}`}
        </span>
      );
    }
  },
  {
    Header: "Status",
    accessor: "status",
    width: "auto",
    Cell: ({ value }) => {
      const statusVal = value;
      let bg = "bg-yellow-100 text-yellow-800 border border-yellow-200";
      let label = "PENDING";

      if (statusVal === true || statusVal === "true" || statusVal === "successful" || statusVal === "paid" || statusVal === "PAID") {
        bg = "bg-green-100 text-green-800 border border-green-200";
        label = "PAID";
      }

      return (
        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${bg}`}>
          {label}
        </span>
      );
    }
  },
  {
    Header: "Check Payment",
    accessor: "_id",
    disableSortBy: true,
    width: "auto",
    Cell: ({ row }) => {
      const statusVal = row.original.status;
      const isPaid = statusVal === true || statusVal === "true" || statusVal === "successful" || statusVal === "paid" || statusVal === "PAID";
      const isChecking = checkingIds && checkingIds[row.original._id];

      if (isPaid) {
        return (
          <span className="text-green-600 font-bold text-xs uppercase tracking-wider">
            PAID / VERIFIED
          </span>
        );
      }

      return (
        <button
          onClick={() => handleCheckStatus && handleCheckStatus(row.original._id)}
          disabled={isChecking}
          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded shadow-sm hover:shadow transition-all disabled:opacity-50 flex items-center gap-1 active:scale-95 cursor-pointer animate-fade-in"
        >
          {isChecking && (
            <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}
          <span>Verify</span>
        </button>
      );
    }
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
