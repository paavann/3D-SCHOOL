import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import patModel from "/models/avatar.glb";

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(patModel);
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["idle"]) {
      const animation = actions["idle"];
      animation.play();
    }
  }, [actions]);

  useEffect(() => {
    // Logging the nodes and materials to check if they are correctly loaded
    console.log("Nodes:", nodes);
    console.log("Materials:", materials);

    // Check if the body geometry and skeleton exist
    if (!nodes.avaturn_body || !nodes.avaturn_body.geometry || !nodes.avaturn_body.skeleton) {
      console.error("Body geometry or skeleton not found");
    }
  }, [nodes, materials]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="pavan">
          <skinnedMesh
            name="avaturn_body"
            geometry={nodes.avaturn_body.geometry}
            material={materials.avaturn_body_material}
            skeleton={nodes.avaturn_body.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_0"
            geometry={nodes.avaturn_hair_0.geometry}
            material={materials.avaturn_hair_0_material}
            skeleton={nodes.avaturn_hair_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0"
            geometry={nodes.avaturn_look_0.geometry}
            material={materials.avaturn_look_0_material}
            skeleton={nodes.avaturn_look_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0"
            geometry={nodes.avaturn_shoes_0.geometry}
            material={materials.avaturn_shoes_0_material}
            skeleton={nodes.avaturn_shoes_0.skeleton}
          />
          <primitive object={nodes.Hips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(patModel);
