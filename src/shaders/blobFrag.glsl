precision highp float;

#pragma glslify: noise = require('glsl-noise/simplex/3d');
#pragma glslify: hsl2rgb = require('glsl-hsl2rgb');

uniform float u_time;
uniform float aspect;

varying vec2 vUv;

float circle(vec2 point) {
  vec2 pos = vUv - point;
  pos.x *= aspect;
  return length(pos);
}

void main() {
  float distFromCenter = circle(vec2(0.5));
  float mask = smoothstep(0.25, 0.2475, distFromCenter);

  vec2 q = vUv;
  q.x *= aspect;

  float d = 0.0;
  d += (noise(vec3(q * 1.0, u_time * 0.5)) * 0.5 + 0.5) * 0.5;
  d += (noise(vec3(q * 0.25 + 0.5, u_time * 0.25)) * 0.5 + 0.5) * 0.5;
  d = clamp(d, 0.0, 1.0);

  vec3 color = hsl2rgb(
    mod(u_time * 0.05, 1.0) + (0.5 + d * 0.5),
    0.5,
    0.5 + d * 0.25
  );

  gl_FragColor = vec4(vec3(color), 1.0);
}
