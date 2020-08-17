var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); //appending the object to HTML

var geometry = new THREE.BoxGeometry(); //geometry of the object
var material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); //Color
var material2 = new THREE.MeshBasicMaterial({ color: 0x238c42 }); //Color
var cube1 = new THREE.Mesh(geometry, material1);
var cube2 = new THREE.Mesh(geometry, material2);

// material1.position.set(100, 100, 0);
// material2.position.set(100, 100, 0);

scene.add(cube1);
scene.add(cube2);


camera.position.z = 5;

(function animate() {
  requestAnimationFrame(animate);

  cube1.rotation.x += 0.05;
  cube1.rotation.y += 0.05;
  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;

  renderer.render(scene, camera);
})();

// animate();
