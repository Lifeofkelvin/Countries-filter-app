import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Outlet } from "react-router-dom";

function Header({ colorMode, toggleColorMode }) {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      background={colorMode === "light" ? "#edeffa" : "#242e41"}
      p={{ base: "10px 16px", md: "10px 25px" }}
      boxShadow={"0px 0px 15px #7d7f85"}
    >
      <Heading
        cursor={"pointer"}
        fontSize={{ base: "16px", md: "24px" }}
        fontWeight={"600"}
      >
        Where in the world?
      </Heading>

      <Button
        border={"none"}
        backgroundColor={"transparent"}
        variant={"ghost"}
        onClick={toggleColorMode}
        _active={"none"}
        _hover={"none"}
        display={"flex"}
        alignItems={"center"}
        gap={"5px"}
        fontSize={{ base: "16px", md: "24px" }}
      >
        {colorMode === "light" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        Dark Mode
      </Button>
      <Outlet />
    </Flex>
  );
}

export default Header;
