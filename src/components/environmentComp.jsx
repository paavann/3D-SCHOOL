import { Canvas } from "@react-three/fiber";
import { Box, Gltf, PerspectiveCamera, Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "../../public/models/pavan-avatar";

export default function EnvironmentComp() {
    return(
    <Canvas>
        <OrbitControls />
        <Environment preset="dawn" />
        <ambientLight intensity={0.8} color={"white"}/>

        <Gltf 
          src="/models/classroom.glb" 
          position={[0, -8, 0]} 
          rotation={[0, Math.PI, 0]}
        />
        <Avatar
          scale={(7, 7, 7)}
          position={[-11, -7.95, -14]} 
          rotation={[0, 0.5, 0]}
        />
    </Canvas>
    );
}