import { Box, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./components/Header";
import "./index.css";
import SearchFilter from "./components/SearchFilter";
import Countries from "./components/countries";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Country from "./components/Country";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <Router>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={{ base: "20px", md: "2rem" }}
      >
        <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <SearchFilter
                  search={search}
                  setSearch={setSearch}
                  colorMode={colorMode}
                  setRegion={setRegion}
                />

                <Countries
                  search={search}
                  region={region}
                  colorMode={colorMode}
                />
              </>
            }
          ></Route>
          <Route path="/countries/:countryName" element={<Country />}></Route>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
