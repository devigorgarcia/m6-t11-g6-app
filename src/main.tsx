import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./styles/theme";
import { LoginProvider } from "./contexts/loginContext";
import { RegisterProvider } from "./contexts/registerContext";
import { VehicleProvider } from "./contexts/VehicleContext";
import { ModalProvider } from "./contexts/ModalContext";
import { UserProvider } from "./contexts/userContext";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ChakraProvider resetCSS theme={theme}>
      <LoginProvider>
        <RegisterProvider>
          <ModalProvider>
            <VehicleProvider>
              <UserProvider>
                <App />
              </UserProvider>
            </VehicleProvider>
          </ModalProvider>
        </RegisterProvider>
      </LoginProvider>
    </ChakraProvider>
  </BrowserRouter>
);
