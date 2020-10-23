import React, { useEffect, useState } from 'react';
import ShaderCanvas from '@signal-noise/react-shader-canvas';

import Layout from '../components/layout';
import SEO from '../components/seo';
import useViewport from '../hooks/use-viewport';

import Ball from '../images/Ball.svg';
import frag from '../shaders/purpleFrag.glsl';
import vert from '../shaders/standardVert.glsl';

const IndexPage = () => {
  const { width, height } = useViewport();
  const backdropStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  };

  return (
    <Layout style={{ background: 'transparent', color: 'white', fontFamily: `"Fantasque Sans Mono" monospace` }}>
      <SEO title="Home" />
      <h1>Patrick Lindsay</h1>
      <p>is a Senior Software Engineer at DockYard.</p>
      <ShaderCanvas
        height={height}
        width={width}
        fragShader={frag}
        vertShader={vert}
        uniforms={{
          aspect: (width / height),
        }}
        style={{
          ...backdropStyles,
          zIndex: -2
        }} />
      <Ball style={{
        ...backdropStyles,
        backgroundColor: 'transparent'
      }} />
    </Layout>
  )
};

export default IndexPage;
