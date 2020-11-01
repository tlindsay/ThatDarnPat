precision highp float;

#pragma glslify: noise = require('glsl-noise/simplex/3d');
#pragma glslify: hsl2rgb = require('glsl-hsl2rgb');

uniform float u_time;
uniform float aspect;
uniform float u_hue;
uniform float u_sat;
uniform float u_lum;
uniform float u_variance;
uniform bool u_reduce_motion;
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
  if (u_reduce_motion) {
    time = 0.0;
  }

  float n = noise(vec3(center + mouse * 0.25, time));
  vec3 color = hsl2rgb(
    u_hue + n * u_variance,
    u_sat,
    u_lum
  );
  gl_FragColor = vec4(color, 1.0);
}
