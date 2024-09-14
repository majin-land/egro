import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Footer,
  InfoCard,
  Instructions,
  Navbar,
  SubmissionModal,
} from "./components";
import { lightTheme } from "./theme";
import BrowseGardens from "./components/pages/BrowseGardens"; // Import the new page
// import { MobileCamera } from "./components/MobileCamera";

function App() {
  return (
    <ChakraProvider theme={lightTheme}>
      <DAppKitProvider
        usePersistence
        requireCertificate={false}
        genesis="test"
        nodeUrl="https://testnet.vechain.org/"
        logLevel={"DEBUG"}
      >
        <Router>
          <Navbar />
          <Flex flex={1}>
            <Container
              mt={{ base: 4, md: 10 }}
              maxW={"container.xl"}
              mb={{ base: 4, md: 10 }}
              display={"flex"}
              flex={1}
              alignItems={"center"}
              justifyContent={"flex-start"}
              flexDirection={"column"}
            >
              <Routes>
                {/* Define Routes */}
                <Route path="/" element={<InfoCard />} />
                <Route path="/browse-gardens" element={<BrowseGardens />} />
              </Routes>
              <Instructions />
            </Container>
          </Flex>
          <Footer />
          {/* MODALS  */}
          <SubmissionModal />
        </Router>
      </DAppKitProvider>
    </ChakraProvider>
  );
}

export default App;
