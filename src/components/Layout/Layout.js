import React, { useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createMuiTheme from "../../theme/createMuiTheme";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";
import Header from "./Header";
import Footer from "./Footer";
import { initializeThemeModeCookie, setUpCookie } from "../functions/cookie";
import { useStaticQuery, graphql } from "gatsby";
import PageTransition from "./PageTransition";
import ContainerVertical from "./ContainerVertical";

function Layout({ children }) {
  const data = useStaticQuery(query);
  const { header: content } = data.contentYaml;
  //darkMode
  const [themeMode, setThemeMode] = useState(
    initializeThemeModeCookie("muiThemeMode")
  );
  const cachedMuiTheme = useMemo(() => createMuiTheme(themeMode), [themeMode]);
  const handleToggle_themeMode = () => {
    setThemeMode((previousMode) => {
      const newMode = previousMode === "light" ? "dark" : "light";
      setUpCookie("muiThemeMode", newMode);
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={cachedMuiTheme}>
      <CssBaseline />
      <HtmlAttributesAndHead content={data.site.siteMetadata} />
      <ContainerVertical>
        <Header
          content={content}
          currentThemeMode={themeMode}
          onThemeModeTrigger={handleToggle_themeMode}
        />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </ContainerVertical>
    </ThemeProvider>
  );
}

export default Layout;

const query = graphql`
  query component_layout {
    site {
      siteMetadata {
        description
      }
    }
    contentYaml {
      header {
        logo
        mainAction
        tabs {
          tab1 {
            name
            url
          }
          tab2 {
            name
            url
          }
          tab3 {
            name
            url
          }
          tab4 {
            name
            url
          }
        }
      }
    }
  }
`;
