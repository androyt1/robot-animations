import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Object_44: THREE.Mesh;
        Object_12: THREE.SkinnedMesh;
        Object_14: THREE.SkinnedMesh;
        Object_16: THREE.SkinnedMesh;
        Object_18: THREE.SkinnedMesh;
        Object_20: THREE.SkinnedMesh;
        Object_22: THREE.SkinnedMesh;
        Object_24: THREE.SkinnedMesh;
        Object_26: THREE.SkinnedMesh;
        Object_28: THREE.SkinnedMesh;
        Object_30: THREE.SkinnedMesh;
        Object_32: THREE.SkinnedMesh;
        Object_34: THREE.SkinnedMesh;
        Object_36: THREE.SkinnedMesh;
        Object_38: THREE.SkinnedMesh;
        Object_40: THREE.SkinnedMesh;
        GLTF_created_0_rootJoint: THREE.Bone;
    };
    materials: {
        Material_001: THREE.MeshStandardMaterial;
        Material_004: THREE.MeshStandardMaterial;
        Material_003: THREE.MeshStandardMaterial;
        Material: THREE.MeshStandardMaterial;
        Material_002: THREE.MeshStandardMaterial;
    };
    animations: GLTFAction[];
};

type ActionName =
    | "Default Take"
    | "01_Sphere_bot_Roll"
    | "02_Sphere_bot_Run_Cycle"
    | "02_Sphere_bot_Run_Cycle_001"
    | "03_Sphere_bot_Open"
    | "04_Sphere_bot_Attack"
    | "05_Sphere_bot_WalkCycle"
    | "06_Sphere_bot_Run_Attack"
    | "07_Sphere_bot_Jump"
    | "08_Sphere_bot_Bake_Pose";
interface GLTFAction extends THREE.AnimationClip {
    name: ActionName;
}

type SphereProps = JSX.IntrinsicElements["group"] & {
    actionName: ActionName;
};

const Sphere = ({ actionName, ...props }: SphereProps) => {
    const group = useRef<THREE.Group>(null); //Ref<Group<Object3DEventMap>> | undefined
    const { nodes, materials, animations } = useGLTF("./models/sphere.glb") as GLTFResult;
    const { actions, mixer } = useAnimations(animations, group);

    useEffect(() => {
        if (actions) {
            mixer.stopAllAction();
            actions[actionName]?.play();
        }
    }, [actions, actionName, mixer]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name='Sketchfab_Scene'>
                <group name='Sketchfab_model' rotation={[-Math.PI / 2, 0, 0]}>
                    <group name='root'>
                        <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0, 0]}>
                            <group
                                name='RootNode_(gltf_orientation_matrix)_0'
                                rotation={[-Math.PI / 2, 0, 0]}>
                                <group name='RootNode_(model_correction_matrix)_1'>
                                    <group
                                        name='Sphere_Bot_High_Poly5fbx_2'
                                        rotation={[Math.PI / 2, 0, 0]}>
                                        <group name='_3'>
                                            <group name='RootNode_4'>
                                                <group name='_5'>
                                                    <group name='GLTF_created_0'>
                                                        <primitive
                                                            object={nodes.GLTF_created_0_rootJoint}
                                                        />
                                                        <group name='_9' />
                                                        <group name='_12' />
                                                        <group name='_15' />
                                                        <group name='_18' />
                                                        <group name='_21' />
                                                        <group name='_24' />
                                                        <group name='_27' />
                                                        <group name='_30' />
                                                        <group name='_33' />
                                                        <group name='_36' />
                                                        <group name='_39' />
                                                        <group name='_42' />
                                                        <group name='_45' />
                                                        <group name='_48' />
                                                        <group name='_49' />
                                                        <group
                                                            name='Plane_131'
                                                            rotation={[-Math.PI / 2, 0, 0]}>
                                                            <group name='Geode_132'>
                                                                <group name='Plane_Material_001_0_133'>
                                                                    <mesh
                                                                        name='Object_44'
                                                                        geometry={
                                                                            nodes.Object_44.geometry
                                                                        }
                                                                        material={
                                                                            materials.Material_001
                                                                        }
                                                                    />
                                                                </group>
                                                            </group>
                                                        </group>
                                                        <skinnedMesh
                                                            name='Object_12'
                                                            geometry={nodes.Object_12.geometry}
                                                            material={materials.Material_004}
                                                            skeleton={nodes.Object_12.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_14'
                                                            geometry={nodes.Object_14.geometry}
                                                            material={materials.Material_003}
                                                            skeleton={nodes.Object_14.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_16'
                                                            geometry={nodes.Object_16.geometry}
                                                            material={materials.Material_003}
                                                            skeleton={nodes.Object_16.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_18'
                                                            geometry={nodes.Object_18.geometry}
                                                            material={materials.Material_003}
                                                            skeleton={nodes.Object_18.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_20'
                                                            geometry={nodes.Object_20.geometry}
                                                            material={materials.Material_003}
                                                            skeleton={nodes.Object_20.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_22'
                                                            geometry={nodes.Object_22.geometry}
                                                            material={materials.Material_003}
                                                            skeleton={nodes.Object_22.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_24'
                                                            geometry={nodes.Object_24.geometry}
                                                            material={materials.Material_003}
                                                            skeleton={nodes.Object_24.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_26'
                                                            geometry={nodes.Object_26.geometry}
                                                            material={materials.Material_003}
                                                            skeleton={nodes.Object_26.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_28'
                                                            geometry={nodes.Object_28.geometry}
                                                            material={materials.Material_003}
                                                            skeleton={nodes.Object_28.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_30'
                                                            geometry={nodes.Object_30.geometry}
                                                            material={materials.Material_003}
                                                            skeleton={nodes.Object_30.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_32'
                                                            geometry={nodes.Object_32.geometry}
                                                            material={materials.Material_003}
                                                            skeleton={nodes.Object_32.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_34'
                                                            geometry={nodes.Object_34.geometry}
                                                            material={materials.Material_003}
                                                            skeleton={nodes.Object_34.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_36'
                                                            geometry={nodes.Object_36.geometry}
                                                            material={materials.Material_003}
                                                            skeleton={nodes.Object_36.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_38'
                                                            geometry={nodes.Object_38.geometry}
                                                            material={materials.Material}
                                                            skeleton={nodes.Object_38.skeleton}
                                                        />
                                                        <skinnedMesh
                                                            name='Object_40'
                                                            geometry={nodes.Object_40.geometry}
                                                            material={materials.Material_002}
                                                            skeleton={nodes.Object_40.skeleton}
                                                        />
                                                    </group>
                                                </group>
                                            </group>
                                        </group>
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload("./models/sphere.glb");

export default Sphere;
