"use client"

import { Float, OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const ProfileMesh = () => {
    const texture = useTexture("/assets/profile.png"); // profile.png should be in /public

    return (
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
            <mesh>
                <planeGeometry args={[2.5, 3.2]} />
                <meshBasicMaterial map={texture} transparent />
            </mesh>
        </Float>
    );
};


const Profile3D = () => {
    return (
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            <Canvas>
                {/* Camera */}
                <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1} />

                {/* Floating Image */}
                <ProfileMesh />

                {/* Orbit Controls */}
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default Profile3D;