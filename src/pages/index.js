import React, { useEffect, useState } from 'react';
import loadable from '@loadable/component';
import Gui, { GuiBool, GuiNumber } from 'react-gui-controller';

const ShaderCanvas = loadable(() => import('@signal-noise/react-shader-canvas'));

import Layout from '../components/layout';
import SEO from '../components/seo';
import useViewport from '../hooks/use-viewport';
import useReducedMotion from '../hooks/use-prefers-reduced-motion';
import useDarkMode from '../hooks/use-dark-mode';

import frag from '../shaders/a11y-blob.frag';
import vert from '../shaders/standard.vert';

const PURPLE = {
  rgb: { r: 166, g: 64, b: 191 },
  hsl: { h: 288, s: 0.5, l: 0.5 },
  hex: '#a640bf'
};

const PINK = {
  hsl: { h: 320.4, s: 0.45, l: 0.6 }
};

const ShaderConfig = ({ uniforms, setUniforms }) => {
  const handleUpdate = ({ u_hue, u_sat, u_lum, u_variance, u_reduce_motion }) => {
    setUniforms((prevState) => {
      return {
        ...prevState,
        u_hue: Number(u_hue),
        u_sat: Number(u_sat),
        u_lum: Number(u_lum),
        u_variance: Number(u_variance),
        u_reduce_motion: !!u_reduce_motion
      };
    });
  };

  return (
    <Gui data={uniforms} onUpdate={handleUpdate}>
      <GuiNumber path='u_hue' label='Hue' min={0} max={1} step={0.01} />
      <GuiNumber path='u_sat' label='Sat' min={0} max={1} step={0.05} />
      <GuiNumber path='u_lum' label='Luminance' min={0} max={1} step={0.05} />
      <GuiNumber path='u_variance' label='Color Variance' min={0} max={1} step={0.05} />
      <GuiBool path='u_reduce_motion' label='Reduce Motion' />
    </Gui>
  );
};

const IndexPage = () => {
  const { width, height } = useViewport();
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isDarkMode = useDarkMode();

  const backdropStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  };

  const [color, setColor] = useState(isDarkMode ? PURPLE : PINK);

  const [uniforms, setUniforms] = useState({
    aspect: width / height,
    u_hue: color.hsl.h / 360.0,
    u_sat: color.hsl.s,
    u_lum: color.hsl.l,
    u_variance: 0.1,
    u_reduce_motion: useReducedMotion()
  });

  useEffect(() => {
    setColor(isDarkMode ? PURPLE : PINK);
  }, [isDarkMode]);

  useEffect(() => {
    setUniforms((prevState) => ({
      ...prevState,
      u_hue: color.hsl.h / 360.0,
      u_sat: color.hsl.s,
      u_lum: color.hsl.l,
    }));
  }, [color]);

  return (
    <Layout
      disableTitle={true}
      style={{
        background: 'transparent',
        color: 'white',
        fontFamily: '"Fantasque Sans Mono" monospace',
        paddingTop: '3em'
      }}
    >
      <SEO title="Home" />

      {isDevelopment ? <ShaderConfig uniforms={uniforms} setUniforms={setUniforms} /> : ''}

      <div style={{ display: 'flex' }}>
        <div>
          <h1>Patrick Lindsay</h1>
          <p>is a Senior Software Engineer at <a href="https://dockyard.com">DockYard</a>.</p>
        </div>
      </div>
      <ShaderCanvas
        height={height}
        width={width}
        fragShader={frag}
        vertShader={vert}
        uniforms={uniforms}
        style={{
          ...backdropStyles,
          zIndex: -2
        }} />
    </Layout>
  );
};

export default IndexPage;
