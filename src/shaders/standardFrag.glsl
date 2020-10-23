precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_clock;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution;
  gl_FragColor = vec4(vec3(st.y * u_clock), 1.0);
}
