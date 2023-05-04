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
let wall = 0;
let roomRotation = 0;
let rotateDir = 0;

loader.load( 'room.glb', function ( gltf ) {

    scene.add(gltf.scene);
    room = gltf.scene;
    console.log(room);
    /*const texture = new THREE.TextureLoader().load( "LightmapFull.png" );
    const material = new THREE.MeshBasicMaterial({map: texture});
    gltf.scene.children.forEach(mesh => {
        mesh.material = material;
    });*/

}, undefined, function ( error ) {

    console.error( error );

} );

// const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
// scene.add( directionalLight );
// const light = new THREE.AmbientLight( 0x101010 ); // soft white light
// scene.add( light );

const clock = new THREE.Clock();

;(function animate() {
    let dt = clock.getDelta();
    requestAnimationFrame( animate );
    if(room && roomRotation > 0){
        let dy = dt * 90;
        room.rotation.y += THREE.MathUtils.degToRad(dy) * rotateDir;
        roomRotation -= dy;
    }
    renderer.render( scene, camera );
})();

//===============================================================================================//

function rotate(w){
    let c;
    let deg = 0;
    switch(wall){
        case 0: switch(w){
            case 1: deg = 90; c = 90; break;
            case 3: deg = -90; c = -90; break;
        } 
        case 1: switch(w){
            case 0: deg = 90; c = 0; break;
            case 2: deg = -90; c = 180; break;
        } 
        case 2: switch(w){
            case 1: deg = 90; c = 90; break;
            case 3: deg = -90; c = 270; break;
        } 
        case 3: switch(w){
            case 2: deg = 90; c = 180; break;
            case 0: deg = -90; c = 0; break;
        } 
    }
    wall = w;
    roomRotation = (deg == 0 ? 0 : 90);
    rotateDir = Math.sign(deg);
    console.log(deg);
    const cube = document.getElementById('cube');
    cube.setAttribute("class" , `rotate${c}`);
}

document.getElementsByClassName("cube__face--left")[0].addEventListener("click", () => rotate(1));
document.getElementsByClassName("cube__face--back")[0].addEventListener("click", () => rotate(0));
document.getElementsByClassName("cube__face--right")[0].addEventListener("click", () => rotate(3));
document.getElementsByClassName("cube__face--front")[0].addEventListener("click", () => rotate(2));