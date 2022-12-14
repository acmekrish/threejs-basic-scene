//console.log(THREE)



const canvas = document.querySelector('canvas.webgl');

//Size
const size = {
    width: 800,
    height: 600
}

//Scene
const set = new THREE.Scene()

//Blue Cube
const box = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial({color: 0x7492B9});
const mesh = new THREE.Mesh(box, material);
set.add(mesh)

//Camera
const eye = new THREE.PerspectiveCamera(75, size.width/size.height);
eye.position.z = 3
set.add(eye)

//Renderer

const renderer = new THREE.WebGLRenderer({
    canvas
});

renderer.setSize(size.width, size.height)
renderer.render(set, eye)

