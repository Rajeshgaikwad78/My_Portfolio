import "react-pro-sidebar/dist/css/styles.css";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiHome, FiLogOut } from "react-icons/fi";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import {
  RiPencilLine,
  RiFileCopy2Line,
  RiMailFill,
  RiUser2Fill,
} from "react-icons/ri";
import { RiAccountBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import "./SidebarShow.css";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./SidebarShow.css";

const SidebarShow = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.clear();
    navigate("/");
  };
  const styles = {
    sideBarHeight: {
      height: "85vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ProSidebar bg="light" style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<FiHome />}>
          {" "}
          
          <NavLink to="/dashboard">Home</NavLink>
        </MenuItem>
        <MenuItem icon={<RiUser2Fill />}>
          <NavLink to="/dashboard/user">User</NavLink>
        </MenuItem>
        <MenuItem icon={<RiPencilLine />}>
          <NavLink to="/dashboard/adduser">Add user</NavLink>
        </MenuItem>
        <MenuItem icon={<RiPencilLine />}>
          <NavLink to="/dashboard/employeelist">Employee List</NavLink>
        </MenuItem>
        <SubMenu title="Account" icon={<RiAccountBoxLine />}>
          <MenuItem>Permissions</MenuItem>
          <MenuItem>Settings</MenuItem>
        </SubMenu>
        <SubMenu title="Email" icon={<RiMailFill />}>
          <MenuItem>Notification</MenuItem>
        </SubMenu>
      </Menu>
      <SidebarFooter>
        <Menu iconShape="square">
          <MenuItem icon={<FiLogOut />}>
            {" "}
            <Nav.Link className="" href="/" onClick={Logout}>
              Logout
            </Nav.Link>
          </MenuItem>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SidebarShow;
