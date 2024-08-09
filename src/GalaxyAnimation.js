import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import './GalaxyAnimation.css';

function GalaxyAnimation() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Galaxy Geometry
    const geometry = new THREE.BufferGeometry();
    const starCount = 10000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Galaxy Material
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.01,
    });

    // Galaxy Points
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotating the galaxy
      points.rotation.y += 0.0005;
      points.rotation.x += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    // Mouse move animation
    const onMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      gsap.to(points.rotation, {
        x: mouseY * 0.1,
        y: mouseX * 0.1,
        duration: 0.5,
        ease: 'power1.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="galaxy"></div>;
}

export default GalaxyAnimation;