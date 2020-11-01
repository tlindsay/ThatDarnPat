/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import './layout.css';

const Layout = ({ children, style, disableTitle = false }) => {
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
    <div
      style={{
        ...style,
        alignItems: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'space-evenly',
        margin: '0 auto',
        maxWidth: 960,
        padding: '0 1.0875rem 1.45rem',
      }}
    >
      <main>{children}</main>
      <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>© {new Date().getFullYear()} Patrick Lindsay</div>
        <nav>
          <ul>
            <li style={{ display: 'inline', listStyle: 'none', marginLeft: '1em' }}>
              <a style={{ color: 'white' }} href="https://github.com/tlindsay">Github</a>
            </li>
            <li style={{ display: 'inline', listStyle: 'none', marginLeft: '1em' }}>
              <a style={{ color: 'white' }} href="https://twitter.com/thatdarnpat">Twitter</a>
            </li>
            <li style={{ display: 'inline', listStyle: 'none', marginLeft: '1em' }}>
              <a style={{ color: 'white' }} href="https://linkedin.com/thomaspatricklindsay">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
