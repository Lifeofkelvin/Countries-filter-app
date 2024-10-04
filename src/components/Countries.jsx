import { Box, Button, Flex, Grid, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const apiUrl = "https://restcountries.com/v3.1/all";

function Countries({ colorMode, search, region }) {
  const [countries, setCountries] = useState([]);
  const fetchData = async () => {
    const response = await fetch(apiUrl);
    const countries = await response.json();
    setCountries(countries);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredCountries = countries
    .filter(
      (country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase()) &&
        (region === "" || country.region.toLowerCase() === region.toLowerCase())
    )
    .sort((a, b) => a.name.common.localeCompare(b.name.common));
  return (
    <Flex alignItems={"center"} justifyContent={"center"} p={"25px"}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={"40px"}
      >
        {filteredCountries.map((country) => {
          const { numericCode, name, population, region, capital, flags } =
            country;
          return (
            <Box
              background={colorMode === "light" ? "#edeffa" : "#242e41"}
              boxShadow={"0px 2px 3px ##7d7f85"}
              borderRadius={"10px"}
              pb={"40px"}
              key={numericCode}
            >
              <Box
                w={{ base: "350px", md: "100%" }}
                display={"flex"}
                flexDirection={"column"}
                gap={"20px"}
              >
                <Image
                  w={"100%"}
                  h={{ base: "300px", md: "200px" }}
                  src={flags.png}
                  alt={name.common}
                  borderTopRadius={"10px"}
                />
                <Heading pl={"25px"} size="lg">
                  {name.common}
                </Heading>
                <Box
                  pl={"25px"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"10px"}
                >
                  <Heading size="md">
                    Population:{" "}
                    <span style={{ fontWeight: "300", fontSize: "20px" }}>
                      {population}
                    </span>
                  </Heading>
                  <Heading size="md">
                    Region:{" "}
                    <span style={{ fontWeight: "300", fontSize: "20px" }}>
                      {region}
                    </span>
                  </Heading>
                  <Heading size="md">
                    Capital:{" "}
                    <span style={{ fontWeight: "300", fontSize: "20px" }}>
                      {capital}
                    </span>
                  </Heading>
                </Box>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <RouterLink to={`/countries/${name.common}`}>
                    <Button
                      size="md"
                      fontWeight="700"
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
                      Learn More
                    </Button>
                  </RouterLink>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Grid>
    </Flex>
  );
}

export default Countries;
