import './App.css'
import * as THREE from "three";

function App() {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const canvas = document.getElementById("bg");
  const renderer = new THREE.WebGLRenderer({canvas});

  renderer.setPixelRatio( window.devicePixelRatio);
  renderer.setSize( window.innerWidth, window.innerHeight);
  camera.position.setZ(30);
 
  const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16);
  const material = new THREE.MeshStandardMaterial({color:0x00ff00});
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);

  const light = new THREE.PointLight(0xffffff);
  light.position.set(0,0, 15);
  scene.add(light);
  const lightHelp = new THREE.SpotLightHelper( light, 5);
  scene.add(lightHelp);
  
  function animate() {
    requestAnimationFrame( animate );
    box.rotation.x += 0.05;
    renderer.render( scene, camera);
  }

  animate();

  return (
    <div className="App">

      <h1>hello?</h1>
    </div>
  )
}

export default App
