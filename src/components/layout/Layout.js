// import MainNavigation from "../old/MainNavigation";
import FooterNavigation from "./FooterNavigation";

import BasicBreadcrumbs from "./BasicBreadcrumbs";
import HeaderAppBar from "./HeaderAppBar";
import { Box } from "@mui/material";

function Layout(props) {
  return (
    <Box component="main" sx={{ p: 3, height: 400 }}>
      <HeaderAppBar />
      {/* <MainNavigation /> */}
      <BasicBreadcrumbs />
      <main>{props.children}</main>
      <FooterNavigation />
    </Box>
  );
}

export default Layout;
