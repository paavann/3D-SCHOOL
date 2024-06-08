import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import pathModel from "/models/avatar.glb";

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(pathModel);
  const { actions, mixer } = useAnimations(animations, group);
  console.log("ANIMATIONS", animations)

useEffect(() => {
  if (actions["IdleV4.2(maya_head)"]){
    const animation = actions["IdleV4.2(maya_head)"];
    animation.play();
  }
}, [actions]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="avatar">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="avatar_body"
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
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(pathModel)
