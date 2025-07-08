import * as THREE from "three";
import { CameraControls, OrbitControls, useFBX } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Car } from "@/data/cars";

interface ShowRoomProps {
  car: Car;
  onBack: () => void;
}
export default function ShowRoom({ car, onBack }: ShowRoomProps) {
  console.log("car", car);
  const fbx = useFBX(car.modelPath);

  const handleModelClick = () => {
    console.log("Clicked FBX object:", fbx);
  };

  return (
    <div className="w-screen h-screen bg-black relative">
      <button
        onClick={onBack}
        className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded z-10"
      >
        Back to Lobby
      </button>
      <Canvas>
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <pointLight position={[0, 5, -5]} intensity={7} />
        <pointLight position={[5, 5, 0]} intensity={7} />
        <pointLight position={[0, 5, -5]} intensity={10} />
        <pointLight position={[-5, 5, 0]} intensity={7} />
        <CameraControls />
        <primitive
          object={fbx}
          scale={0.0015}
          onClick={handleModelClick}
          position={[-1, 0, 3]}
        />
        <gridHelper />
      </Canvas>
    </div>
  );
}
