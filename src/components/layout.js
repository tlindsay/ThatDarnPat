/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children, style }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div
        style={{
          ...style,
          alignItems: 'stretch',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-between',
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        <Header siteTitle="ThatDarnPat" />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Patrick Lindsay</footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
