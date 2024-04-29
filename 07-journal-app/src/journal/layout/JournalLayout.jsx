import { Box, Toolbar } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components/SideBar";

export const JournalLayout = ({ children }) => {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />

      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};