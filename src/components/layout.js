/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';

const Layout = ({ children, style }) => (
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
          <li style={{ display: 'inline', listStyle: 'none', marginRight: '1em' }}>
            <a style={{ color: 'white' }} href="https://read.cv/thatdarnpat">CV</a>
          </li>
          <li style={{ display: 'inline', listStyle: 'none', marginRight: '1em' }}>
            <a style={{ color: 'white' }} href="https://github.com/tlindsay">Github</a>
          </li>
          <li style={{ display: 'inline', listStyle: 'none', marginRight: '1em' }}>
            <a style={{ color: 'white' }} href="https://twitter.com/thatdarnpat">Twitter</a>
          </li>
          <li style={{ display: 'inline', listStyle: 'none', marginRight: '1em' }}>
            <a style={{ color: 'white' }} href="https://linkedin.com/in/thomaspatricklindsay">LinkedIn</a>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
