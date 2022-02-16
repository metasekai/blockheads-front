// Chakra imports
import React, { useState } from "react";
import { Portal, useDisclosure } from "@chakra-ui/react";

import Main from "./Main";
import Footer from "./components/footer/Footer";
import AdminNavbar from "./components/navbar/AdminNavbar";
import AuthNavbar from "./components/navbar/AuthNavbar";
import MainPanel from "./components/layout/MainPanel";
import PanelContainer from "./components/layout/PanelContainer";
import PanelContent from "./components/layout/PanelContent";
import Configurator from "./components/configurator/Configurator";
import routes from "./routes";

export default function App(props) {
  const { ...rest } = props;
  const [fixed, setFixed] = useState(false);
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      console.log(window.location.href);
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i];
      }
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  document.documentElement.dir = "ltr";
  // Chakra Color Mode

  return (
    <>
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100%)",
        }}
      >
        <Portal>
          {getActiveRoute(routes).layout === "simple" ? (
            <AuthNavbar
              secondary={getActiveRoute(routes).name}
              logoText="BLOCKHEADS"
            />
          ) : (
            <AdminNavbar
              onOpen={onOpen}
              logoText={"Dashboard"}
              brandText={getActiveRoute(routes).name}
              {...rest}
            />
          )}
        </Portal>
        <PanelContent>
          <PanelContainer>
            <Main routes={routes} />
          </PanelContainer>
        </PanelContent>
        <Footer />
        <Configurator
          secondary={false}
          isOpen={isOpen}
          onClose={onClose}
          isChecked={fixed}
          onSwitch={(value) => {
            setFixed(value);
          }}
          onOpaque={() => setSidebarVariant("opaque")}
          onTransparent={() => setSidebarVariant("transparent")}
        />
      </MainPanel>
    </>
  );
}
