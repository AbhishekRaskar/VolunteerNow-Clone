import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiList,
  FiBell,
  FiChevronDown,
  FiEdit2,
  FiUsers,
  FiUserPlus,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText, useState } from "react";
import Logo from "../../Images/JustServe.png";
import { NavLink } from "react-router-dom";
import React from "react";
import { AddList } from "../../pages/Admin/AddList";
import { createElement } from "react";
import { OurVolunteer } from "../../pages/Admin/OurVolunteer";
import { VolunteerList } from "../../pages/Admin/VolunteerList";
import { AdminList } from "../../pages/Admin/AdminList";
import { AdminNew } from "../../pages/Admin/AdminNew";

// const dashboardRoutes = [
//   { name: "Home", icon: FiHome, link: "/admindashboard" },
//   { name: "Our Volunteers", icon: FiTrendingUp, link: "/ourvolunteers" },
// ];

// const menuRoutes = [
//   { name: "VolunteerList", icon: FiList, link: "/volunteerlist" },
//   {
//     name: "Add Volunteer Opportunities",
//     icon: FiEdit2,
//     link: "/addvolunteers",
//   },
// ];

// const adminRoutes = [
//   { name: "Admins", icon: FiUsers, link: "/adminlist" },
//   { name: "RegisterAdmin", icon: FiUserPlus, link: "/registeradmin" },
// ];

export const AdminSidebar = () => {
  const [showAddList, setShowAddList] = useState(true);
  const [showOurVolunteer, setShowOurVolunteer] = useState(true);
  const [showVolunteerList, setShowVolunteerList] = useState(true);
  const [showAdminList, setShowAdminList] = useState(true);
  const [showNewAdmin, setShowNewAdmin] = useState(true);

  const handleToggleAddList = () => {
    setShowAddList(true);
    setShowOurVolunteer(false);
    setShowAdminList(false)
    setShowNewAdmin(false)
    setShowVolunteerList(false);
  };

  const handleToggleOurVolunteer = () => {
    setShowAddList(false);
    setShowVolunteerList(false);
    setShowAdminList(false)
    setShowNewAdmin(false)
    setShowOurVolunteer(true);
  };

  const handleToggleVolunteerList = () => {
    setShowAddList(false);
    setShowOurVolunteer(false);
    setShowAdminList(false)
    setShowNewAdmin(false)
    setShowVolunteerList(true);
  };

  const handleToggleAdminList = () => {
    setShowAddList(false);
    setShowOurVolunteer(false);
    setShowVolunteerList(false);
    setShowNewAdmin(false)
    setShowAdminList(true)
  };

  const handleToggleNewAdmin = () => {
    setShowAddList(false);
    setShowOurVolunteer(false);
    setShowVolunteerList(false);
    setShowAdminList(false)
    setShowNewAdmin(true)
  };

  return (
    <div >
      <Flex bg="#eff2f5">
        <Box bg="white"   border="1px solid red" width="25%" height="100vh">
          <Box  width="45%" margin="auto">
            <img src={Logo} alt="" />
          </Box>
          <VStack  p="10">
            <Text color="gray.500" width="90%">
              Dashboard
              <hr />
            </Text>

            <VStack width="90%">
              <Button bg="white" width="100%" leftIcon={<FiHome />}>
                Home
              </Button>

              <Button
                bg="white"
                width="100%"
                onClick={handleToggleOurVolunteer}
                leftIcon={<FiTrendingUp />}
              >
                Our Volunteer
              </Button>
            </VStack>

            <Text color="gray.500" width="90%">
              All Menu
              <hr />
            </Text>
            <VStack width="90%">
              <Button onClick={handleToggleVolunteerList} bg="white" width="100%" leftIcon={<FiList />}>
                Volunteer List
              </Button>

              <Button
                onClick={handleToggleAddList}
                bg="white"
                width="100%"
                leftIcon={<FiEdit2 />}
              >
                Add Volunteer Opportunities
              </Button>
            </VStack>

            <Text color="gray.500" width="90%">
              Employees
              <hr />
            </Text>
            <VStack width="90%">
              <Button onClick = {handleToggleAdminList} bg="white" width="100%" leftIcon={<FiUsers />}>
                Admins
              </Button>

              <Button onClick={handleToggleNewAdmin} bg="white" width="100%" leftIcon={<FiUserPlus />}>
                Register Admins
              </Button>
            </VStack>
          </VStack>
        </Box>

        <Box
          border="1px solid blue"
          width="70%"
          position={"absolute"}
          top="10%"
          right="2.5%"
        >
          
          {showAddList && <AddList />}
          {showOurVolunteer && <OurVolunteer />}
          {showVolunteerList && <VolunteerList />}
          {showAdminList && <AdminList />}
          {showNewAdmin && <AdminNew />}
        </Box>

        <Flex 
        bg="white"
          border="1px solid red"
          height="80px"
          pr="40px"
          alignItems="center"
          justifyContent="flex-end"
          width="75%"
        >
          <img
            style={{
              border: "1px solid blue",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
            src=""
            alt=""
          />
        </Flex>
      </Flex>
    </div>
  );
};
