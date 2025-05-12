import { Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";

// eslint-disable-next-line react/prop-types
export const CodeFragment = ({ position }) => {
  const mesh = useRef();
  const { viewport } = useThree();
  const codeSnippets = [
    "Algorithm",
    "Backend",
    "Bug",
    "Code",
    "Compiler",
    "Debugging",
    "DevOps",
    "Frontend",
    "Framework",
    "Git",
    "Interface",
    "Library",
    "Repository",
    "Script",
    "Variable",
  ];

  const text = useMemo(
    () => codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
    []
  );

  useFrame(() => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.005;
    mesh.current.position.y -= 0.01;
    if (mesh.current.position.y < -viewport.height / 2 - 1) {
      mesh.current.position.y = viewport.height / 2 + 1;
    }
  });

  return (
    // eslint-disable-next-line react/no-unknown-property
    <mesh ref={mesh} position={position}>
      <Text
        color="cyan"
        anchorX="center"
        anchorY="middle"
        fontSize={0.5}
        maxWidth={2}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="left"
        opacity={0.2} // Reduced opacity for a more faded look
      >
        {text}
      </Text>
    </mesh>
  );
};
