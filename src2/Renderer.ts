/* The game needs to send out a tick for every frame. Other structures in the program 
listen for this */
import * as THREE from "three";

export class gameScreen {
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  ticker: number;

  constructor() {
    this.scene = new THREE.Scene;
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.Renderer = new THREE.WebGLRenderer
  }
  
}
