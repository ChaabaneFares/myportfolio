// src/Shaders.js

export const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;

  void main() {
    vUv = uv;

    // Calculate rotation matrix
    float angle = uTime;
    mat4 rotationMatrix = mat4(
      cos(angle), -sin(angle), 0.0, 0.0,
      sin(angle),  cos(angle), 0.0, 0.0,
      0.0,         0.0,        1.0, 0.0,
      0.0,         0.0,        0.0, 1.0
    );

    // Apply rotation to the position
    vec4 rotatedPosition = rotationMatrix * vec4(position, 1.0);

    gl_Position = projectionMatrix * modelViewMatrix * rotatedPosition;
  }
`;

export const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec2 vUv;

  void main() {
    vec4 textureColor = texture2D(uTexture, vUv);
    vec4 blendColor = vec4(0.807843, 0.729412, 0.717647, 1.0); 

    // Blend the texture color with the blend color
    vec4 color = mix(textureColor, blendColor, 0.9); // 0.5 can be adjusted for more or less blending
    gl_FragColor = color;
  }
`;
