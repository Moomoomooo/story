import * as THREE from "three";

const scene: Scene = new THREE.scene();
const camera: PerspectiveCamera = THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000)
const renderer: WebGLRenderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', (event): void => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
})

