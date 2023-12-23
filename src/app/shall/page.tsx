import UserTable from "@/components/Table/User";

import FetchMimic from "@/components/FetchMimic";
import Loading from "./loading";
import { Suspense } from "react";
import Footer from "@/components/Arch/Footer";
import dynamic from "next/dynamic";
const Shallow = dynamic(() => import("@/components/Shallow"), {
  ssr: false,
  loading: () => <></>,
});

const Page = (props: any) => {
  return (
    <>
      <Shallow />
      {/* <Suspense fallback={<Loading />}>
        <FetchMimic user={props.searchParams.user} />
      </Suspense>
      <UserTable />
      <Footer /> */}
    </>
  );
};

export default Page;
