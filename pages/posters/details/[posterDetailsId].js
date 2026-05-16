import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";
import Table from "../../../components/Table";
import { collectionColumn } from "../../../components/Table/columns/collectionColumn";
import useGetData from "../../../hooks/useGetData";
import Loader from "../../../components/common/Loader";

function PosterDetailsPage() {
  const { back, query } = useRouter();
  const { posterDetailsId } = query;
  const { data, isLoading } = useGetData(`/posters/details/${posterDetailsId}`);

  // console.log("poster collection", data?.data?.data);

  // const { username, password, posterId, links, details } = data
  //   ? data?.data?.data
  //   : "";

  const { _doc, details } = data ? data?.data?.data : "";

  const { username, password, posterId, links } = _doc ? _doc : "";

  console.log("poster data _doc:", _doc);
  // console.log("poster id", posterId);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaUser />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">Poster Details</h1>
      </div>

      <div className="my-5">
        <span
          className="text-sm text-blue-700 hover:text-blue-900 cursor-pointer"
          onClick={() => back()}
        >
          {"<"} Go Back
        </span>
      </div>

      <Loader isLoading={isLoading}>
        <div className="mt-7 flex flex-col lg:flex-row gap-5">
          <div className="lg:sticky top-[95px] lg:self-start">
            <div className="text-sm text-custom-gray3 font-semibold min-w-[350px] bg-white p-5 lg:p-6 rounded shadow-md">
              <h4 className="text-xl text-black">Informations:</h4>
              <div className="mt-3 space-y-3">
                <p className="grid grid-cols-2">
                  <span>Username:</span> <span>{username}</span>
                </p>
                <p className="grid grid-cols-2">
                  <span>Password:</span> <span>{password}</span>
                </p>
                <p className="grid grid-cols-2">
                  <span>Poster ID:</span> <span>{posterId}</span>
                </p>
              </div>

              <div className="mt-7">
                <h4 className="text-xl text-black">Links:</h4>
                <div className="mt-3 space-y-3">
                  {links && links?.map((link, i) => <p key={i}>{link}</p>)}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex-1">
            <div className="bg-white p-4 lg:p-8 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-5">Collections:</h2>
              <div className="-mt-10">
                {details && (
                  <Table
                    columnsHeading={collectionColumn}
                    usersData={details}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Loader>
    </div>
  );
}

export default PosterDetailsPage;
