import {
  Button,
  Flex,
  Box,
  Image,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Country = ({ colorMode }) => {
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();
  const [allBorders, setAllBorders] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const country = await response.json();
      setCountry(country);
    };
    const fetchAllBorders = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      const allBorders = await res.json();
      setAllBorders(allBorders);
    };
    fetchCountry();
    fetchAllBorders();
  }, []);

  const getBorderCountryName = (border) => {
    const country = allBorders.find((c) => c.cca3 === border);
    return country ? country.name.common : "";
  };
  return (
    <Flex w={"100%"} flexDirection={"column"} gap={"40px"} p={"20px"}>
      <Link to="/">
        <Button
          display={"flex"}
          alignItems={"center"}
          gap={"2"}
          size="md"
          fontWeight="600"
          fontSize={{ base: "14px", md: "20px" }}
          padding="10px 20px"
          border="1px solid gray"
          borderRadius="10px"
          marginTop="20px"
          _hover={{
            bg: colorMode === "light" ? "#242e41" : "#edeffa",
            borderColor: "#ccc",
            color: colorMode === "light" ? "#fff" : "#333",
            transform: "scale(1.02)",
          }}
        >
          <FaArrowLeft size={20} />
          Back Home
        </Button>
      </Link>
      <Flex>
        {country.map((c) => {
          const {
            numericCode,
            name,
            flags,
            population,
            nativeName,
            region,
            subregion,
            capital,
            timezones,
            currencies,
            languages,
            borders,
          } = c;

          return (
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              w={{ base: "400px", md: "100%" }}
              key={numericCode}
            >
              <Box
                display={"flex"}
                w={"100%"}
                alignItems={"left"}
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={"space-around"}
                gap={{ base: "20px", md: "0px" }}
              >
                <Image
                  src={flags.png}
                  alt={name.common}
                  w={{ base: "300px", md: "500px" }}
                  borderRadius={'15px'}
                />

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={{ base: "10px", md: "20px" }}
                >
                  <Heading>{name.common}</Heading>
                  <Box
                    display={"flex"}
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent={"space-between"}
                    gap={{ base: "10px", md: "2em" }}
                  >
                    <List>
                      <ListItem
                        fontSize={{ base: "14px", md: "20px" }}
                        fontWeight={"600"}
                      >
                        Capital:{" "}
                        <span
                          style={{
                            fontWeight: "400",
                          }}
                        >
                          {capital}
                        </span>
                      </ListItem>
                      <ListItem
                        fontSize={{ base: "14px", md: "20px" }}
                        fontWeight={"600"}
                      >
                        Native Name:{" "}
                        <span
                          style={{
                            fontWeight: "400",
                          }}
                        >
                          {nativeName}
                        </span>
                      </ListItem>
                      <ListItem
                        fontSize={{ base: "14px", md: "20px" }}
                        fontWeight={"600"}
                      >
                        Population:{" "}
                        <span
                          style={{
                            fontWeight: "400",
                          }}
                        >
                          {population}
                        </span>
                      </ListItem>
                      <ListItem
                        fontSize={{ base: "14px", md: "20px" }}
                        fontWeight={"600"}
                      >
                        Region:{" "}
                        <span
                          style={{
                            fontWeight: "400",
                          }}
                        >
                          {region}
                        </span>
                      </ListItem>
                      <ListItem
                        fontSize={{ base: "14px", md: "20px" }}
                        fontWeight={"600"}
                      >
                        Sub Region:{" "}
                        <span
                          style={{
                            fontWeight: "400",
                          }}
                        >
                          {subregion}
                        </span>
                      </ListItem>
                    </List>

                    <List>
                      <ListItem
                        fontSize={{ base: "14px", md: "20px" }}
                        fontWeight={"600"}
                      >
                        Time-Zone:{" "}
                        <span
                          style={{
                            fontWeight: "400",
                          }}
                        >
                          {timezones}
                        </span>
                      </ListItem>
                      <ListItem
                        fontSize={{ base: "14px", md: "20px" }}
                        fontWeight={"600"}
                      >
                        Currencies:{" "}
                        <span
                          style={{
                            fontWeight: "400",
                          }}
                        >
                          {Object.keys(currencies)[0]}
                        </span>
                      </ListItem>
                      <ListItem
                        fontSize={{ base: "14px", md: "20px" }}
                        fontWeight={"600"}
                      >
                        Languages:{" "}
                        <span
                          style={{
                            fontWeight: "400",
                          }}
                        >
                          {Object.keys(languages)[0]}
                        </span>
                      </ListItem>
                    </List>
                  </Box>
                  <Flex gap={"5"} flexDirection={{ base: "column", md: "row" }}>
                    <Heading fontSize={"24px"} fontWeight={"500"}>
                      Border Countries:
                    </Heading>
                    {
                      <List
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        gap={{ base: "5px", md: "10px" }}
                      >
                        {borders?.map((border) => (
                          <ListItem
                            key={border}
                            p="2px 5px"
                            borderWidth="1px"
                            borderRadius="md"
                            boxShadow={"0px 0px 5px gray"}
                          >
                            {getBorderCountryName(border)}
                          </ListItem>
                        )) || (
                          <ListItem
                            key="no-borders"
                            p="2px 5px"
                            borderWidth="1px"
                            borderRadius="md"
                            boxShadow={"0px 0px 5px gray"}
                          >
                            No border countries
                          </ListItem>
                        )}
                      </List>
                    }
                  </Flex>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Country;
