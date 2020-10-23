precision highp float;
uniform vec2 u_resolution;
uniform float u_time;

varying vec2 vUv;

void main() {
  vec3 color = 0.5 + 0.5 * cos(u_time + vUv.xyx + vec3(0.0, 2.0, 4.0));

  gl_FragColor = vec4(color, 1.0);
}
