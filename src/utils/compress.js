import pkg from 'draco3dgltf';


const inputFilePath = '../../public/developer/scene.gltf'; // Replace with your GLTF file path
const outputFilePath = '../../public/model-draco.gltf'; // Replace with desired output path
const {compress} = pkg;

compress(inputFilePath, outputFilePath)
  .then(() => console.log('Compression successful. File saved to:', outputFilePath))
  .catch(error => console.error('An error occurred:', error));
