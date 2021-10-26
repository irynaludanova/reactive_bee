import React from "react"
import { Canvas } from "@react-three/fiber"
import { Three } from "../../components/Three/Three"
const Home = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Three position={[-1.2, 0, 0]} />
      <Three position={[1.2, 0, 0]} />
    </Canvas>
  )
}

export default Home
