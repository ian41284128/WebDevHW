import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';

function lerp( a, b, alpha ) {
    return a + alpha * ( b - a );
   }

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// camera.position.z = 2;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("WebGL").appendChild( renderer.domElement );

//const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

const loader = new GLTFLoader();
let room;
let wall = 0;
let roomRotation = 0;
let desiredRoomRotation = 0;
let rotateDir = 0;

loader.load( 'room.glb', function ( gltf ) {

    scene.add(gltf.scene);
    room = gltf.scene;
    console.log(room);
    /*const texture = new THREE.TextureLoader().load( "LightmapFull.png" );
    const material = new THREE.MeshBasicMaterial({map: texture});
    gltf.scene.children.forEach.call(mesh => {
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
    /*if(room){
        room.rotation.y = lerp(room.rotation.y, THREE.MathUtils.degToRad(desiredRoomRotation), dt);
    }*/
    if(room && (roomRotation > 0 || room.rotation.y % 90 > 10)){
        let dy = dt * 90;
        room.rotation.y += THREE.MathUtils.degToRad(dy) * rotateDir;
        roomRotation -= dy;
    }
    renderer.render( scene, camera );
})();

//===============================================================================================//

const cubes = document.getElementsByClassName('cube');
let walls = [document.getElementsByClassName("cube__face--back"),
            document.getElementsByClassName("cube__face--left"),
            document.getElementsByClassName("cube__face--front"),
            document.getElementsByClassName("cube__face--right")]

console.log(walls);

function rotate(w){
    if (w == wall){
        return;
    }

    [].forEach.call(walls[(wall+2)%4], element => {
        element.classList.remove("backface");
    });
    [].forEach.call(walls[(w+2)%4], element => {
        element.classList.add("backface");
    });
    [].forEach.call(walls[w], element => {
        element.classList.add("frontface");
    });
    [].forEach.call(walls[wall], element => {
        element.classList.remove("frontface");
    });
    let c = roomRotation;
    let deg = 0;
    console.log(`wall:${wall} -> ${w}`)
    switch(wall){
        case 0: switch(w){
            case 1: deg = 90; c = 90; break;
            case 3: deg = -90; c = -90; break;
            default: break;
        } ; break;
        case 1: switch(w){
            case 0: deg = -90; c = 0; break;
            case 2: deg = 90; c = 180; break;
            default: break;
        }  ; break;
        case 2: switch(w){
            case 1: deg = -90; c = 90; break;
            case 3: deg = 90; c = 270; break;
            default: break;
        }  ; break;
        case 3: switch(w){
            case 2: deg = -90; c = 180; break;
            case 0: deg = 90; c = 0; break;
            default: break;
        }  ; break;
    }
    wall = w;
    desiredRoomRotation += deg;
    roomRotation = Math.abs(deg) - roomRotation;
    rotateDir = Math.sign(deg);
    console.log(`rotate${c}, ${deg}, ${rotateDir}`);
    [].forEach.call(cubes, element => {
        element.setAttribute("class" , `cube rotate${c}`);
    });
}

[].forEach.call(walls[1], element => {
   element.addEventListener("click", () => rotate(1)); 
});
[].forEach.call(walls[0], element => {
    element.addEventListener("click", () => rotate(0)); 
 });
[].forEach.call(walls[3], element => {
    element.addEventListener("click", () => rotate(3)); 
 });
[].forEach.call(walls[2], element => {
    element.addEventListener("click", () => rotate(2)); 
 });