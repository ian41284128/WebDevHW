import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

const loader = new GLTFLoader();
let room;
let roomRotation = 0;

loader.load( 'room.glb', function ( gltf ) {

    scene.add(gltf.scene);
    room = gltf.scene;
    /*const texture = new THREE.TextureLoader().load( "SmallLightmap.png" );
    const material = new THREE.MeshPhongMaterial();
    gltf.scene.children.forEach(mesh => {
        mesh.material = material;
        scene.add(mesh);
    });*/

}, undefined, function ( error ) {

    console.error( error );

} );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const clock = new THREE.Clock();

;(function animate() {
    requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    if(room){
        room.rotation.y = Math.min(clock.getElapsedTime()/1.0, 1.0) * roomRotation;
    }
    renderer.render( scene, camera );
})();

//===============================================================================================//

function rotate(){
    const cube = document.getElementsByClassName('cube')[0];
    cube.classList.add('rotated');
    roomRotation = THREE.MathUtils.degToRad(90);
    clock.start();
}

document.getElementsByClassName("cube__face--back")[0].addEventListener("click", rotate);