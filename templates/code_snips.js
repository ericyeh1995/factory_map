
pointLight = new THREE.PointLight( 0xffffff, 0.9 );
pointLight.decay = 2;
pointLight.position.set(3, 5, 1);
scene.add(pointLight);
var pointLightHelper = new THREE.PointLightHelper( pointLight );
scene.add( pointLightHelper );

pointLight = new THREE.PointLight( 0xffffff, 0.3 );
pointLight.decay = 2;
pointLight.position.set(-2, 3, -3);
scene.add(pointLight);
var pointLightHelper = new THREE.PointLightHelper( pointLight );
scene.add( pointLightHelper );







spotLight = new THREE.SpotLight( 0x4682b4 );
spotLight.intensity = 2;
spotLight.distance = 20;
spotLight.angle = Math.PI/4;
spotLight.decay = 1;
//spotLight.castShadow = true;
scene.add( spotLight );
spotLightHelper = new THREE.SpotLightHelper( spotLight );
scene.add( spotLightHelper );

spotLight2 = new THREE.SpotLight( 0xddad0dd );
spotLight2.intensity = 2;
spotLight2.distance = 20;
spotLight2.angle = Math.PI/4;
spotLight2.decay = 1;
//spotLight.castShadow = true;
scene.add( spotLight2 );
spotLightHelper2 = new THREE.SpotLightHelper( spotLight2 );
scene.add( spotLightHelper2 );

spotLight.position.set(Math.sin( (time+Math.PI) * 1.4 ) * 10,
                       5,
                       Math.cos( time * 1.4 ) * 10);
spotLightHelper.update();

spotLight2.position.set(Math.sin( (time+Math.PI/2) * 1.4) * 10,
                        5,
                        Math.cos( time * 1.4 ) * 10);
spotLightHelper2.update();






var origin = new THREE.Object3D();
var rectLight = new THREE.RectAreaLight( 0xffff00, 1000, 10, 10 );
rectLight.decay = 1
rectLight.position.set( 1, 4, 0 );
rectLight.lookAt( origin.position );
scene.add( rectLight );
rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
scene.add( rectLightHelper );





//
var box = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
var box_mat = new THREE.MeshStandardMaterial( 0.1, 0 );
var mesh = new THREE.Mesh( box, box_mat );
mesh.position.set( 0,2,0 );
scene.add( mesh );
