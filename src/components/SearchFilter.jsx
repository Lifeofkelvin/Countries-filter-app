import { Box, Flex, Input, UnorderedList } from "@chakra-ui/react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";

function SearchFilter({ colorMode, search, setSearch, setRegion }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <Flex
      justifyContent={"space-between"}
      p={"0px 30px"}
      flexDirection={{ base: "column", md: "row" }}
      w={"100%"}
      gap={"20px"}
    >
      <Flex
        alignItems={"center"}
        background={colorMode === "light" ? "#edeffa" : "#242e41"}
        boxShadow={"0px 2px 3px #7d7f85"}
        borderRadius={"5px"}
        p={{ base: "10px 20px", md: "15px 25px" }}
        w={{ base: "100%", md: "45%" }}
        gap={"20px"}
      >
        <FaSearch size={20} />
        <Input
          focusBorderColor={"transparent"}
          border={"none"}
          outline={"none"}
          type="text"
          placeholder="Search for a country"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Flex>
      <Box
        display={"flex"}
        alignItems={"center"}
        position={"relative"}
        background={colorMode === "light" ? "#edeffa" : "#242e41"}
        boxShadow={"0px 2px 3px ##7d7f85"}
        p={{ base: "15px 20px", md: "10px 25px" }}
        w={{ base: "50%", md: "25%" }}
        onClick={() => setShowDropdown(!showDropdown)}
        borderRadius={"5px"}
      >
        <Flex
          fontSize={{ base: "14px", md: "20px" }}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
          cursor={"pointer"}
        >
          <p>Filter by Region</p>
          <FaChevronDown />
        </Flex>
        {showDropdown && (
          <Box
            position="absolute"
            background={colorMode === "light" ? "#edeffa" : "#242e41"}
            boxShadow={"0px 2px 3px ##7d7f85"}
            w={"100%"}
            top={"110%"}
            left={"0"}
            p={"10px"}
            zIndex={1}
            borderRadius={"10px"}
          >
            <UnorderedList
              display={"flex"}
              flexDirection={"column"}
              fontSize={{ base: "12px", md: "18px" }}
              gap={3}
              w={"100%"}
              ml={"20px"}
            >
              {regions.map((region) => (
                <Box
                  key={region}
                  cursor={"pointer"}
                  onClick={() => setRegion(region)}
                >
                  {region}
                </Box>
              ))}
            </UnorderedList>
          </Box>
        )}
      </Box>
    </Flex>
  );
}

export default SearchFilter;
