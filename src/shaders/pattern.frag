precision highp float;

#pragma glslify: dither = require('glsl-dither');

uniform vec2 u_resolution;
uniform float u_time;
uniform float aspect;

varying vec2 vUv;

float circle(in vec2 _st, in float _radius) {
  vec2 l = _st - vec2(0.5);
  return 1.-smoothstep(_radius - (_radius * 0.01),
                       _radius + (_radius * 0.01),
                       dot(l, l) * 4.0);
}

vec2 tile(vec2 space, float tileFactor) {
  space *= tileFactor;
  space -= 0.5;
  return fract(space);
}

void main() {
  vec2 st = vUv;
  st.x *= aspect; // fix stretching
  /* st *= 5.3; // tile 5x5 */
  /* st = fract(st); */

  st = tile(st, 4.0);

  vec3 color = vec3(st, 0.5);
  float circleSize = 0.5;

  color = vec3(circle(st, circleSize), st.x, st.y);
  gl_FragColor = vec4(color, 1.0);
}

