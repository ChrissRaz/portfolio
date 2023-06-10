import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeJSTag: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Création de la scène
      const scene = new THREE.Scene();

      // Création de la caméra
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Création du rendu
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Création du tag
      const tagGroup = new THREE.Group(); 

      const tagGeometry = new THREE.BoxGeometry(2, 0.5, 0.1);
      const tagMaterial = new THREE.MeshBasicMaterial({ color: 0x23627 });

      const tag1 = new THREE.Mesh(tagGeometry, tagMaterial);
      tag1.position.set(-2, 0, 0);
      tag1.rotation.y = Math.PI / 6;
      tag1.userData.word = "#AppDevelopment";
      tagGroup.add(tag1);

      const tag2 = new THREE.Mesh(tagGeometry, tagMaterial);
      tag2.position.set(0, 0, 0);
      tag2.userData.word = "#TeamLeading";
      tagGroup.add(tag2);

      const tag3 = new THREE.Mesh(tagGeometry, tagMaterial);
      tag3.position.set(2, 0, 0);
      tag3.rotation.y = -Math.PI / 6;
      tag3.userData.word = "#ProjectManagement";
      tagGroup.add(tag3);

      scene.add(tagGroup);

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);

        tagGroup.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();

      // Nettoyage lors du démontage du composant
      return () => {
        renderer.dispose();
      };
    }
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeJSTag;
