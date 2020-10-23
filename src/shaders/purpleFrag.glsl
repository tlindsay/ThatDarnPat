precision highp float;

#pragma glslify: noise = require('glsl-noise/simplex/3d');
#pragma glslify: hsl2rgb = require('glsl-hsl2rgb');

uniform float u_time;
uniform float aspect;

varying vec2 vUv;

void main () {
  vec2 center = vUv - 0.5;
  center.x *= aspect;

  float time = u_time * 0.5;

  float n = noise(vec3(center * 1.25, time));
  vec3 color = hsl2rgb(
      0.8 + n * 0.1,
      0.5,
      0.5
      );
  gl_FragColor = vec4(color, 1.0);
}
