import "./style.css";
import * as THREE from "three";
import { AxesHelper } from "three";

const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0.7, -0.6, 1);
scene.add(mesh);

// Axis Helper
const axisHelper = new THREE.AxesHelper(2); // x:red, y:gree, z:blue
scene.add(axisHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);

mesh.scale.x = 2;
// mesh.rotation.reorder("ZXY"); // ???
mesh.rotation.z = Math.PI / 3;

camera.lookAt(mesh.position);

// Render
const canvas = document.getElementById("webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
