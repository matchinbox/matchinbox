import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  Button,
  Box,
  MenuDivider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const NavMenu = ({ children }) => {
  return (
    <Menu>
      <MenuButton as={Box}>{children}</MenuButton>
      <MenuList>
        <Link to={"/"}>
          <MenuItem>OUR FEATURES</MenuItem>
        </Link>
        <Link to={"/product"}>
          <MenuItem> OUR PRODUCT</MenuItem>
        </Link>
        <Link to={"/aboutus"}>
          <MenuItem>ABOUT US </MenuItem>
        </Link>
        <Link to={"/privacypolicy"}>
          <MenuItem>PRIVACY POLICY</MenuItem>
        </Link>
        <Link to={"/termsandcondition"}>
          <MenuItem>TERMS AND CONDITION</MenuItem>
        </Link>
        <MenuItem>Download</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
