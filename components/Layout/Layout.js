import { useRouter } from "next/router";
import Header from "../Header/Header";
import Meta from "../Meta/Meta";

import { HEADER_ROUTES } from "../../utils/constants";

const { HOME, CREATE_ITEM, MY_ASSETS, CREATOR_DASHBOARD } = HEADER_ROUTES;

const navOptions = [
  { route: HOME, label: "Home" },
  { route: CREATE_ITEM, label: "Sell digital asset" },
  { route: MY_ASSETS, label: "My digital assets" },
  { route: CREATOR_DASHBOARD, label: "Creatord dashboard" },
];

const defaultMetaTitle = "Metaverse";

const Layout = ({ children }) => {
  const { route } = useRouter();

  const routeTitle = navOptions.find((option) => option.route === route)?.label;

  return (
    <>
      <Meta title={`${defaultMetaTitle} ${routeTitle}`} />
      <div>
        <Header currentRoute={route} navOptions={navOptions} />
        <div className="p-4">{children}</div>
      </div>
    </>
  );
};

export default Layout;
