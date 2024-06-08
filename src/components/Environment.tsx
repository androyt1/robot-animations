import Sphere from "../models/Sphere";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Grid, Html, useProgress } from "@react-three/drei";
import { useState, Suspense } from "react";
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

type ButtonProp = {
    label: string;
    action: ActionName;
};

const Environment = () => {
    const { loaded } = useProgress();
    const ButtonNames: ButtonProp[] = [
        {
            label: "Action 1",
            action: "Default Take",
        },
        {
            label: "Action 2",
            action: "01_Sphere_bot_Roll",
        },
        {
            label: "Action 3",
            action: "02_Sphere_bot_Run_Cycle",
        },
        {
            label: "Action 4",
            action: "02_Sphere_bot_Run_Cycle_001",
        },
        {
            label: "Action 5",
            action: "03_Sphere_bot_Open",
        },
        {
            label: "Action 6",
            action: "05_Sphere_bot_WalkCycle",
        },
        {
            label: "Action 7",
            action: "06_Sphere_bot_Run_Attack",
        },
        {
            label: "Action 8",
            action: "07_Sphere_bot_Jump",
        },
        {
            label: "Action 9",
            action: "08_Sphere_bot_Bake_Pose",
        },
    ];

    const [action, setAction] = useState<ActionName>("Default Take");

    const handleActionChange = (newAction: ActionName) => {
        setAction(newAction);
    };

    return (
        <div className='w-full h-[90vh] relative'>
            <Canvas flat camera={{ fov: 35, position: [0, 0, 20] }}>
                <fog attach='fog' args={["gray", 15, 23.5]} />

                <Suspense fallback={<Html>Loading {loaded} %</Html>}>
                    <Stage
                        intensity={2}
                        environment='city'
                        shadows={{ type: "accumulative", bias: -0.001, intensity: Math.PI }}
                        adjustCamera={false}>
                        <Sphere actionName={action} />
                    </Stage>
                </Suspense>
                <directionalLight position={[10, 10, 10]} intensity={4} />
                <ambientLight intensity={3} />

                <Grid
                    renderOrder={-1}
                    position={[0, -1.85, 0]}
                    infiniteGrid
                    cellSize={0.6}
                    cellThickness={0.6}
                    sectionSize={3.3}
                    sectionThickness={1.5}
                    fadeDistance={30}
                />
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.05}
                    enableZoom={false}
                    makeDefault
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>

            <div className='hidden md:flex flex-col justify-center items-center shadow-md shadow-black/50 absolute top-2 right-0 h-fit w-[300px] bg-transparent gap-3 px-3 py-5'>
                {ButtonNames?.map(({ label, action: active }) => (
                    <button
                        className={` px-12 w-full py-1 rounded-2xl ${
                            action === active ? "bg-stone-500 text-stone-50" : "bg-stone-100"
                        } `}
                        onClick={() => handleActionChange(active)}
                        key={label}>
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Environment;
