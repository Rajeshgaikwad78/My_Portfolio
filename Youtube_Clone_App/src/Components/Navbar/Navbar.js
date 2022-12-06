import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../Utils/Constants";
import "./Navbar.css";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={1}
    sx={{
      position: "sticky",
      background: "#000",
      justifyContent: "space-between",
      top: 0,
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img alt="logo" src={logo} height={45} className="logo" />
      {/* <h3 className="logo">Logo</h3> */}
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
