import { Canvas } from "@react-three/fiber";
import { CodeAnimation } from "../utils/CodeAnimation";

export const CanvasAnimation = () => {
  return (
    <div className="absolute inset-0 w-full h-full ">
      <Canvas camera={{ position: [0, 0, 15] }}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={0.2} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <CodeAnimation />
      </Canvas>
    </div>
  );
};
