// {/* <script>
// var s = skrollr.init({
//   smoothScrolling: true,
// });

// window.addEventListener("scroll", () => {
//   let scrollTop =
//     window.pageYOffset ||
//     document.documentElement.scrollTop ||
//     window.scrollY;

//   document.querySelectorAll(".scroll").forEach((sc) => {
//     sc.innerText = Math.round(scrollTop);
//   });
// });

// gsap.set(".sec1 .desc > div", { opacity: 0, y: 50 }); // 한줄씩 올라오게
// gsap.set(".sec1 .desc > div strong", { opacity: 0, x: 250 }); // 열정, 도전정신
// gsap.set(".sec1 .desc > div em", { opacity: 0, x: 250 }); // 개발자
// gsap.set(".sec1 .desc > div i", { opacity: 0, y: 250 }); // 이모티콘들
// gsap.set("#header", { opacity: 0, top: -100 }); // 맨 위에서 내려오게

// setTimeout(() => {
//   gsap.to(".sec1 .desc > div", {
//     opacity: 1,
//     duration: 0.4,
//     stagger: 0.6,
//     y: 0,
//   });
//   gsap.to(".sec1 .desc > div strong", {
//     opacity: 1,
//     duration: 0.4,
//     x: 0,
//     delay: 4,
//   });
//   gsap.to(".sec1 .desc > div em", {
//     opacity: 1,
//     duration: 0.4,
//     x: 0,
//     ease: "bounce.out",
//     delay: 4.4,
//   });
//   gsap.to(".sec1 .desc > div i", {
//     opacity: 1,
//     duration: 0.4,
//     y: 0,
//     ease: "bounce.out",
//     delay: 4.8,
//   });
//   gsap.to("#header", { opacity: 1, top: 0, duration: 0.4, delay: 6 });
// }, 1000);
// </script>
// <script type="x-shader/x-vertex" id="vertCode">
// uniform float time;
// </script>

// <script type="x-shader/x-vertex" id="vertMain">
// float maxOffLen = 0.4;
// vec2 p = uv * vec2(PI*2.0);

// vec3 offset = normalize(normal) * vec3(sin(time * 4.0 + p.y ) * maxOffLen - maxOffLen);

// gl_Position.x += offset.x;
// gl_Position.y += offset.y;
// gl_Position.z += offset.z;
// </script>

// <script type="x-shader/x-fragment" id="fragCode">
//     uniform float time;

//     vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
//     vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
//     vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

//     float cnoise(vec3 P){
//     vec3 Pi0 = floor(P); // Integer part for indexing
//     vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
//     Pi0 = mod(Pi0, 289.0);
//     Pi1 = mod(Pi1, 289.0);
//     vec3 Pf0 = fract(P); // Fractional part for interpolation
//     vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
//     vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
//     vec4 iy = vec4(Pi0.yy, Pi1.yy);
//     vec4 iz0 = Pi0.zzzz;
//     vec4 iz1 = Pi1.zzzz;

//     vec4 ixy = permute(permute(ix) + iy);
//     vec4 ixy0 = permute(ixy + iz0);
//     vec4 ixy1 = permute(ixy + iz1);

//     vec4 gx0 = ixy0 / 7.0;
//     vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
//     gx0 = fract(gx0);
//     vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
//     vec4 sz0 = step(gz0, vec4(0.0));
//     gx0 -= sz0 * (step(0.0, gx0) - 0.5);
//     gy0 -= sz0 * (step(0.0, gy0) - 0.5);

//     vec4 gx1 = ixy1 / 7.0;
//     vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
//     gx1 = fract(gx1);
//     vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
//     vec4 sz1 = step(gz1, vec4(0.0));
//     gx1 -= sz1 * (step(0.0, gx1) - 0.5);
//     gy1 -= sz1 * (step(0.0, gy1) - 0.5);

//     vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
//     vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
//     vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
//     vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
//     vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
//     vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
//     vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
//     vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

//     vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
//     g000 *= norm0.x;
//     g010 *= norm0.y;
//     g100 *= norm0.z;
//     g110 *= norm0.w;
//     vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
//     g001 *= norm1.x;
//     g011 *= norm1.y;
//     g101 *= norm1.z;
//     g111 *= norm1.w;

//     float n000 = dot(g000, Pf0);
//     float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
//     float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
//     float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
//     float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
//     float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
//     float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
//     float n111 = dot(g111, Pf1);

//     vec3 fade_xyz = fade(Pf0);
//     vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
//     vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
//     float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
//     return 2.2 * n_xyz;
// }
// </script>

// <script type="x-shader/x-fragment" id="fragColor">
// float r = abs(sin( (vUv.x + time * 0.125 ) * 4.0 )) * 0.2 + 0.7;
// float g = abs(sin( (vUv.y + time * 0.245 ) * 2.0 )) * 0.2 + 0.7;
// float b = abs(sin( (vUv.y - time * 0.333 ) * 2.0 )) * 0.2 + 0.7;

// r += cnoise(vec3(vUv.x*4.0,vUv.y*4.0, time)) * 0.1;
// g += cnoise(vec3(vUv.x*8.0,vUv.y*5.0, time*2.0)) * 0.1;
// b += cnoise(vec3(vUv.x*12.0,vUv.y*6.0, time*3.0)) * 0.1;

// color = vec3(r,g,b);
// </script>

// <script>
// //화면 생성
// const scene = new THREE.Scene();

// //카메라 설정
// const camera = new THREE.PerspectiveCamera(
//   95,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 10;

// //렌더링 설정
// const canvas = document.querySelector("#canvas");
// renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvas });
// renderer.setClearColor(0xe2ded2, 1.0);
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setPixelRatio(window.devicePixelRatio);
// // document.body.appendChild(renderer.domElement);

// //메쉬 설정
// var geometry = new THREE.SphereGeometry(6, 64, 64);

// var uniforms = THREE.UniformsUtils.merge([
//   THREE.UniformsLib["ambient"],
//   THREE.UniformsLib["lights"],
//   THREE.UniformsUtils.clone(THREE.ShaderLib.phong.uniforms),
//   {
//     diffuse: {
//       type: "c",
//       value: new THREE.Color(0xff00ff),
//     },
//     dirSpecularWeight: {
//       type: "v3",
//       value: new THREE.Vector3(1, 9, 1),
//     },
//     time: {
//       type: "f",
//       value: 0.0,
//     },
//   },
// ]);

// var vertex = [
//   "#define PHONG",
//   "varying vec3 vViewPosition;",
//   "varying vec2 vUv;",
//   "varying vec3 vNormal;",
//   THREE.ShaderChunk["common"],
//   THREE.ShaderChunk["uv_pars_vertex"],
//   THREE.ShaderChunk["uv2_pars_vertex"],
//   THREE.ShaderChunk["displacementmap_pars_vertex"],
//   THREE.ShaderChunk["envmap_pars_vertex"],
//   THREE.ShaderChunk["color_pars_vertex"],
//   THREE.ShaderChunk["fog_pars_vertex"],
//   THREE.ShaderChunk["morphtarget_pars_vertex"],
//   THREE.ShaderChunk["skinning_pars_vertex"],
//   THREE.ShaderChunk["shadowmap_pars_vertex"],
//   THREE.ShaderChunk["logdepthbuf_pars_vertex"],
//   THREE.ShaderChunk["clipping_planes_pars_vertex"],
//   document.getElementById("vertCode").text,
//   "void main() {",
//   THREE.ShaderChunk["uv_vertex"],
//   THREE.ShaderChunk["uv2_vertex"],
//   THREE.ShaderChunk["color_vertex"],
//   THREE.ShaderChunk["beginnormal_vertex"],
//   THREE.ShaderChunk["morphnormal_vertex"],
//   THREE.ShaderChunk["skinbase_vertex"],
//   THREE.ShaderChunk["skinnormal_vertex"],
//   THREE.ShaderChunk["defaultnormal_vertex"],
//   "vNormal = normalize( transformedNormal);",
//   THREE.ShaderChunk["begin_vertex"],
//   THREE.ShaderChunk["displacementmap_vertex"],
//   THREE.ShaderChunk["morphtarget_vertex"],
//   THREE.ShaderChunk["skinning_vertex"],
//   THREE.ShaderChunk["project_vertex"],
//   THREE.ShaderChunk["logdepthbuf_vertex"],
//   THREE.ShaderChunk["clipping_planes_vertex"],
//   "vViewPosition = - mvPosition.xyz;",
//   THREE.ShaderChunk["worldpos_vertex"],
//   THREE.ShaderChunk["envmap_vertex"],
//   THREE.ShaderChunk["shadowmap_vertex"],
//   THREE.ShaderChunk["fog_vertex"],
//   "vUv = uv;",
//   document.getElementById("vertMain").text,
//   "}",
// ].join("\n");

// var fragment = [
//   "#define PHONG",
//   "uniform vec3 diffuse;",
//   "uniform float opacity;",
//   "uniform vec3 ambient;",
//   "uniform vec3 emissive;",
//   "uniform vec3 specular;",
//   "uniform float shininess;",
//   "varying vec2 vUv;",
//   THREE.ShaderChunk["common"],
//   THREE.ShaderChunk["packing"],
//   THREE.ShaderChunk["color_pars_fragment"],
//   THREE.ShaderChunk["uv_pars_fragment"],
//   THREE.ShaderChunk["uv2_pars_fragment"],
//   THREE.ShaderChunk["map_pars_fragment"],
//   THREE.ShaderChunk["alphamap_pars_fragment"],
//   THREE.ShaderChunk["aomap_pars_fragment"],
//   THREE.ShaderChunk["lightmap_pars_fragment"],
//   THREE.ShaderChunk["emissivemap_pars_fragment"],
//   THREE.ShaderChunk["envmap_pars_fragment"],
//   THREE.ShaderChunk["gradientmap_pars_fragment"],
//   THREE.ShaderChunk["fog_pars_fragment"],
//   THREE.ShaderChunk["bsdfs"],
//   THREE.ShaderChunk["lights_pars"],
//   THREE.ShaderChunk["lights_phong_pars_fragment"],
//   THREE.ShaderChunk["shadowmap_pars_fragment"],
//   THREE.ShaderChunk["bumpmap_pars_fragment"],
//   THREE.ShaderChunk["normalmap_pars_fragment"],
//   THREE.ShaderChunk["specularmap_pars_fragment"],
//   THREE.ShaderChunk["logdepthbuf_pars_fragment"],
//   THREE.ShaderChunk["clipping_planes_pars_fragment"],
//   document.getElementById("fragCode").text,
//   "void main() {",
//   "vec3 color = vec3(1.0);",
//   document.getElementById("fragColor").text,
//   "vec4 diffuseColor = vec4( color, opacity );",
//   "ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",
//   "vec3 totalEmissiveRadiance = emissive;",
//   THREE.ShaderChunk["logdepthbuf_fragment"],
//   THREE.ShaderChunk["map_fragment"],
//   THREE.ShaderChunk["color_fragment"],
//   THREE.ShaderChunk["alphamap_fragment"],
//   THREE.ShaderChunk["alphatest_fragment"],
//   THREE.ShaderChunk["specularmap_fragment"],
//   THREE.ShaderChunk["normal_flip"],
//   THREE.ShaderChunk["normal_fragment"],
//   THREE.ShaderChunk["emissivemap_fragment"],
//   THREE.ShaderChunk["lights_phong_fragment"],
//   THREE.ShaderChunk["lights_template"],
//   THREE.ShaderChunk["aomap_fragment"],
//   "vec3 outgoingLight = reflectedLight.directDiffuse +reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;",
//   THREE.ShaderChunk["envmap_fragment"],
//   "gl_FragColor = vec4( outgoingLight, diffuseColor.a );",
//   THREE.ShaderChunk["premultiplied_alpha_fragment"],
//   THREE.ShaderChunk["tonemapping_fragment"],
//   THREE.ShaderChunk["encodings_fragment"],
//   THREE.ShaderChunk["fog_fragment"],
//   "}",
// ].join("\n");

// var material = new THREE.ShaderMaterial({
//   uniforms: uniforms,
//   vertexShader: vertex,
//   fragmentShader: fragment,
//   lights: true,
// });
// material.uniforms.shininess.value = 34.0;
// var sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);

// //조명 설정
// var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
// hemiLight.color.setHSL(0.6, 1, 0.8);
// hemiLight.position.set(0, 10, 0);
// scene.add(hemiLight);

// var dirLight = new THREE.DirectionalLight(0xffffff, 0.45);
// dirLight.color.setHSL(0.1, 1.0, 0.8);
// dirLight.position.set(-1, 1.75, 1);
// dirLight.position.multiplyScalar(30);
// scene.add(dirLight);

// //애니메이션 설정
// function animate(timestamp) {
//   requestAnimationFrame(animate);

//   var t = timestamp * 0.00051;
//   material.uniforms.time.value = t;
//   sphere.rotation.z = -t * 0.02 - 0.2;

//   renderer.render(scene, camera);
// }
// animate();

// //화면 사이즈 설정
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// }
// window.addEventListener("resize", onWindowResize);
// </script> */}
