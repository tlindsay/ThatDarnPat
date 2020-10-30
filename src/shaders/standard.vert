attribute vec2 a_position;
attribute vec2 a_texcoord;

varying vec2 vUv;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  vUv = a_texcoord;
}
