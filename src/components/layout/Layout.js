import BasicBreadcrumbs from "./BasicBreadcrumbs";
import HeaderAppBar from "./HeaderAppBar";
import { Box } from "@mui/material";

function Layout(props) {
  return (
    <Box component="main" sx={{ p: 3, height: 400 }}>
      <HeaderAppBar />
      <BasicBreadcrumbs />
      <main>{props.children}</main>
    </Box>
  );
}

export default Layout;
