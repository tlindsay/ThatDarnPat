precision highp float;

#pragma glslify: noise = require('glsl-noise/simplex/3d');
#pragma glslify: hsl2rgb = require('glsl-hsl2rgb');
#pragma glslify: dither = require('glsl-dither/8x8');

uniform float u_time;
uniform float aspect;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

varying vec2 vUv;

void main () {
  vec2 center = vUv - 0.5;
  vec2 mouse = u_mouse / u_resolution;
  vec2 st = vUv;
  st.x *= aspect;
  center.x *= aspect;

  float time = u_time * 0.5;

  float n = noise(vec3(center + mouse * 2.25, time));
  vec3 color = hsl2rgb(
      0.8 + n * 0.1,
      0.5,
      0.35
      );
  gl_FragColor = vec4(dither(gl_FragCoord.xy, color), 1.0);
}
