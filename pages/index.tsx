import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import Navbar from "@components/Navbar/Index";
import parser from "ua-parser-js";
import Header from "@components/Header";
import MainGrid from "@components/MainGrid/Index";
import Testimonials from "@components/Testimonials";
import Gallery from "@components/Gallery";
import Footer from "@components/Footer";
import { createContext } from "react";

export const DeviceType = createContext("desktop");

const Home: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ deviceType }) => {
  return (
    <DeviceType.Provider value={deviceType}>
      <Navbar />
      <Header />
      <main>
        <MainGrid />
        <Testimonials />
      </main>
      <Gallery />
      <Footer />
    </DeviceType.Provider>
  );
};

export const getServerSideProps: GetServerSideProps<{
  deviceType: string;
}> = async ({ req: { headers } }) => {
  return {
    props: {
      deviceType: parser(headers["user-agent"]).device.type || "desktop",
    },
  };
};

export default Home;
