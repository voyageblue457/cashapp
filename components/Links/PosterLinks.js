import { useSession } from "next-auth/react";
import React from "react";
import { FaGlobe } from "react-icons/fa";
import Loader from "../common/Loader";
import Table from "../Table";
import { linkColumn } from "../Table/columns/linkColumn";
// import { linkData } from "../data/linkData";
import useGetData from "../../hooks/useGetData";
import { posterLinksColumn } from "../Table/columns/posterLinksColumn";
import Tabs from "../Tabs";
import PosterDynamicLinkForm from "../Form/PosterDynamicLinkForm";

function PosterLinks({ id, admin }) {
  // const { data: session } = useSession();
  // const { id, username, admin, adminId } = session ? session.user : "";

  // const { data: fetchedData, isLoading } = useGetData(
  //   `/link/get/${id}/${admin}`
  // );
  const { data: fetchedData, isLoading } = useGetData(
    `/link/get/all/hello/world/com/data/${id}/${admin}`
  );
  // console.log("links", fetchedData);

  // const allSites = fetchedData?.sites;
  const activeSites = fetchedData?.data?.data;


  const sites = activeSites?.map((site) => {
    return {
      site: site,
    };
  });
  // const x = allSites?.map((site) => site.name);
  // const y = activeSites?.map((site) => site);

  // const status = () => {
  //   const check = x?.map((site) => {
  //     if (y.includes(site)) {
  //       return "active";
  //     } else {
  //       return "inactive";
  //     }
  //   });
  //   return check;
  // };

  // console.log(status());

  // const linksData = allSites?.map((site) => {
  //   const checkStatus = () => {
  //     if (activeSites?.includes(site.name)) {
  //       return "Active";
  //     } else {
  //       return "Inactive";
  //     }
  //   };

  //   return {
  //     site: site.name,
  //     status: checkStatus(),
  //   };
  // });
  // console.log("table", linksData);

  // const checkStatus = (site) => {
  //   if (activeSites?.includes(site.name)) {
  //     return "Active";
  //   } else {
  //     return "Inactive";
  //   }
  // };

  const tabsData = [
    {
      label: "All Links",
      content: (
        <div className="mt-7 bg-white p-4 lg:p-8 rounded shadow-md">
          <h4 className="text-xl font-semibold">All Links</h4>
          {sites && (
            <Table columnsHeading={posterLinksColumn} usersData={sites} />
          )}
        </div>
      ),
    },
    {
      label: "Create Link",
      content: (
        <div className="mt-7 bg-white p-4 lg:p-8 rounded shadow-md">
          <PosterDynamicLinkForm id={id} assignedLinks={activeSites} />
        </div>
      ),
    },
  ];

  return (
    <div className="relative">
      <Loader isLoading={isLoading}>
        <Tabs tabsData={tabsData} />
      </Loader>
    </div>
  );
}

export default PosterLinks;
