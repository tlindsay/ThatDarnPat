precision highp float;

#extension GL_OES_standard_derivatives : enable

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

float patternLine(float v) {
  float f = abs(fract(v) - .5);
  float df = fwidth(v) * 1.0;
  return smoothstep(0., df, f);
}

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

  vec2 coord = center + mouse * 0.25;

  vec3 seed = vec3(coord, time);
  float n = noise(seed);

  /* float d = fract(n); */
  /* if(mod(n, 2.0) > 1.0) d = 1.-d; */
  /* d = d/fwidth(n); */

  vec3 white = vec3(1.0);
  float hue = mix(.1, .98, patternLine(u_hue + n * u_variance));
  vec3 color = hsl2rgb(
    hue,
    u_sat,
    u_lum 
  );

  /* if (mod(d, 2.0) > 1.0) color = white; */
  gl_FragColor = vec4(color, 1.0);
}
