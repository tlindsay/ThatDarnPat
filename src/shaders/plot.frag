precision highp float;

#ifdef GL_OES_standard_derivatives
#extension GL_OES_standard_derivatives : enable
#endif

#pragma glslify: aastep = require('glsl-aastep');


varying vec2 vUv;

/* float plot(vec2 st) { */
/*   float thickness = 0.03; */
/*   return step(abs(st.y - st.x), thickness); */
/*   /1* return smoothstep(thickness, 0.0, abs(st.y - st.x)); *1/ */
/* } */

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) -
          smoothstep( pct, pct+0.02, st.y);
}

void main() {
  vec2 st = vUv.xy;
  float y = st.x;
  vec3 color = vec3(y);

  vec3 lineColor = vec3(1.0, 0.5, 0.9);

  float pct = plot(st, y);
  color = (1.0 - pct) * color + pct * lineColor;
  gl_FragColor = vec4(color, 1.0);
}
