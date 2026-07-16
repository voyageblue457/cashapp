import { useState } from "react";
import { useSession } from "next-auth/react";
import { FaEnvelope } from "react-icons/fa";
import Loader from "../components/common/Loader";
import Table from "../components/Table";
import { getCollectionColumn } from "../components/Table/columns/collectionColumn";
import { API_URL } from "../config";
import useGetData from "../hooks/useGetData";
import { toast } from "react-toastify";

function CollectionsPage() {
  const { data: session } = useSession();
  const id = session?.user?.id;
  const [checkingIds, setCheckingIds] = useState({});

  const { data: fetchedData, isLoading, refetch } = useGetData(`/posters/details/${id}`);

  const handleCheckStatus = async (infoId) => {
    setCheckingIds((prev) => ({ ...prev, [infoId]: true }));
    try {
      const res = await fetch(`${API_URL}/payment/check/${infoId}`);
      const data = await res.json();
      if (data && data.success) {
        toast.success("Payment verified & marked as Paid!");
        refetch();
      } else {
        toast.info(data.error || "Payment is still pending.");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      toast.error("Failed to verify payment status. Try again.");
    } finally {
      setCheckingIds((prev) => ({ ...prev, [infoId]: false }));
    }
  };

  const posterData = fetchedData?.data?.data;
  const details = posterData?.details?.map(item => ({
    ...item,
    owner: posterData?.root?.username,
    admin: posterData?.root?.adminId,
    posterUsername: posterData?.username
  })) || [];

  const columns = getCollectionColumn(handleCheckStatus, checkingIds);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaEnvelope />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">Collections</h1>
      </div>

      <Loader isLoading={isLoading}>
        <div className="mt-7">
          <div className="p-4 bg-white rounded shadow-md lg:p-8">
            {details.length > 0 ? (
              <Table columnsHeading={columns} usersData={details} />
            ) : (
              <p className="">No details found</p>
            )}
          </div>
        </div>
      </Loader>
    </div>
  );
}

export default CollectionsPage;

