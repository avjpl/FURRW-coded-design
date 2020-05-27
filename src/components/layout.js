import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'

import Header from './header';

import { useGlobalStateContent } from '../context/globalContext'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme: { background } }) => background};
    overscroll-dehaviour: none;
    overflow-x: hidden;
  }
`;

const Layout = ({ children }) => {
  const { currentTheme } = useGlobalStateContent();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: '#000',
    text: '#fff',
    red: '#ea291e'
  };

  const lightTheme = {
    background: '#fff',
    text: '#000',
    red: '#ea291e'
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
