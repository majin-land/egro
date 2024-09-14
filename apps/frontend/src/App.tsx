import { DAppKitProvider } from "@vechain/dapp-kit-react";
import { ChakraProvider, Container, Flex } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar, SubmissionModal } from "./components";
import { lightTheme } from "./theme";
import BrowseGardensPage from "./pages/BrowseGardensPage"; // Import the new page
import ChallengesPage from "./pages/ChallengesPage";
import MyGardenPage from "./pages/MyGardenPage";
import HomePage from "./pages/HomePage";
import CommunityPage from "./pages/CommunityPage";
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
                <Route path="/" element={<HomePage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/browse-gardens" element={<BrowseGardensPage />} />
                <Route path="/challenges" element={<ChallengesPage />} />
                <Route path="/my-garden" element={<MyGardenPage />} />
              </Routes>
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
