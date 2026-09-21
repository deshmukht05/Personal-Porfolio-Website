import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loader } from "lucide-react";

export const AppLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loader />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
