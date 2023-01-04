import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./styles/theme";
import { LoginProvider } from "./contexts/loginContext";
import { VehicleProvider } from "./contexts/VehicleContext";
import { ModalProvider } from "./contexts/ModalContext";
import { UserProvider } from "./contexts/userContext";
import { CommentProvider } from "./contexts/CommentContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ChakraProvider resetCSS theme={theme}>
      <LoginProvider>
        <ModalProvider>
          <VehicleProvider>
            <UserProvider>
              <CommentProvider>
                <App />
              </CommentProvider>
            </UserProvider>
          </VehicleProvider>
        </ModalProvider>
      </LoginProvider>
    </ChakraProvider>
  </BrowserRouter>
);
