import LZString from 'lz-string';

// Compress text
export const compressText = (text) => {
  return LZString.compressToUTF16(text);
};

// Decompress text
export const decompressText = (compressedText) => {
  return LZString.decompressFromUTF16(compressedText);
};

// Convert string to ArrayBuffer
export const stringToArrayBuffer = (string) => {
  const encoder = new TextEncoder();
  return encoder.encode(string).buffer;
};

// Convert ArrayBuffer to string
export const arrayBufferToString = (buffer) => {
  const decoder = new TextDecoder();
  return decoder.decode(new Uint8Array(buffer));
};
