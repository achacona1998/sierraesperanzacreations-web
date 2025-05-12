import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import { CodeFragment } from "./CodeFragment";

export const CodeAnimation = () => {
  const { viewport } = useThree();
  const fragments = useMemo(
    () =>
      Array.from(
        { length: 100 },
        (
          _,
          i // Increased number of fragments
        ) => (
          <CodeFragment
            key={i}
            position={[
              Math.random() * viewport.width - viewport.width / 2,
              Math.random() * viewport.height - viewport.height / 2,
              Math.random(),
            ]}
          />
        )
      ),
    [viewport]
  );

  return <>{fragments}</>;
};
