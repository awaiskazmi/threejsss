import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Group
const group = new THREE.Group();

// Cube 1
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.set(1, 1, 1);

group.add(cube1);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.set(1, 1, 1);
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube2.position.set(-1, -1, -1);

group.add(cube3);

scene.add(group);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 3;
scene.add(camera);

// Group Transforms
group.rotation.z = Math.PI / 3;

// Render
const canvas = document.getElementById("webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);

// Clock
const clock = new THREE.Clock();

gsap.to(group.position, { duration: 1, x: 2 });
gsap.to(group.position, { duration: 1, delay: 2, x: 0 });

// Animation
const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // camera.position.x = Math.sin(elapsedTime); // half rotation per second
  // camera.position.y = Math.cos(elapsedTime); // half rotation per second
  // camera.lookAt(group.position);

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
