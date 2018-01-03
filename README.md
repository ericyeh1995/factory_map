# Factory Map
**threejs app for factory monitoring**

![alt text][factory]

[factory]: https://github.com/ericyeh1995/factory_map/blob/master/images/factory.png "factory"


## Functionality
* Factory map in 3D
* Cursor control: orbit, zoom, pan
* Orbit ball [TODO]
* Machine name label
* Real-time machine status light [TODO]
* Interaction: select on hover
* Real-time data and visualization [TODO]
* Fast development
---
## Note on code
### Set gamma to true for the correct color
```javascript
renderer.gammaInput = true;
renderer.gammaOutput = true;
```
## Camera and Control

```javascript
function init() {
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
    camera.position.z = 20;
    camera.position.y = 10;
    scene.add(camera);
    
    controls = new THREE.OrbitControls(camera);
    // Min and max distance
    controls.minDistance = 1;
    controls.maxDistance = 20;
    controls.enablePan = false;
    // Limiting angle:
    controls.maxPolarAngle = Math.PI / 2 + 0.1;
}
```
```javascript
function onWindowResize() {
    // Adjust for resizing windows
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
```
In render in animate:
```javascript
function render() {
    controls.update();
    renderer.render( scene, camera );
}
```

## Hover to select:

![alt text][interaction]

[interaction]: https://github.com/ericyeh1995/factory_map/blob/master/images/interaction.png "interaction"

```javascript
var mouse = new THREE.Vector2(), INTERSECTED;
```
```javascript
function init() {
    // INTERACTIVE
    raycaster = new THREE.Raycaster();
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
}
```
```javascript
function onDocumentMouseMove( event ) {
    event.preventDefault();
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}
```
```javascript
function render() {
    // INTERACTIVE: INTERSECTIONS
    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects( scene.children );
    if (intersects.length > 0) {
        if ( INTERSECTED != intersects[ 0 ].object ) {
            if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
            INTERSECTED = intersects[ 0 ].object;
            INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
            INTERSECTED.material.emissive.setHex( 0xff0000 );
		 }
    } else {
        if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
        INTERSECTED = null;
    }
}
```
## Adding label
Import CSS2DRenderer

![alt text][label]

[label]: https://github.com/ericyeh1995/factory_map/blob/master/images/label.png "label"

```javascript
<script type="text/javascript" src="../static/CSS2DRenderer.js"></script>
```
```javascript
function init() {
    // Init: label
    var texts = ["machine_01"]
    var element = document.createElement( 'div' );
    element.className = 'label';
    element.textContent = texts[0]

    var label = new THREE.CSS2DObject( element );
    label.position.set(1,-0.3,0.8);
    scene.add( label );
    
    // Init: label Renderer
    labelRenderer = new THREE.CSS2DRenderer();
    labelRenderer.setSize( window.innerWidth, window.innerHeight );
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0';
    labelRenderer.domElement.style.pointerEvents = 'none'
    container.appendChild( labelRenderer.domElement );
}
```
```javascript
function onWindowResize() {
    labelRenderer.setSize( window.innerWidth, window.innerHeight );
}
```
```javascript
function render() {
    labelRenderer.render(scene, camera);
}
```
## Adding stats

![alt text][stats]

[stats]: https://github.com/ericyeh1995/factory_map/blob/master/images/stats.png "stats"

```html
<script type="text/javascript" src="../static/stats.min.js"></script>
```
```javascript
function init() {
    stats = new Stats();
    container.appendChild(stats.dom);
}
```
```javascript
function animate() {
    stats.update();
}
```



