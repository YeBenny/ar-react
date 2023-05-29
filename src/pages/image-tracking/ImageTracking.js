import {
  ZapparCamera,
  ImageTracker,
  ZapparCanvas,
} from "@zappar/zappar-react-three-fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function ImageTracking() {
  const [visiable, setVisiable] = useState(false);

  // Use Webpack to load in target file
  const targetFile = new URL("../../assets/webank.zpt", import.meta.url).href;

  const gltfFile = new URL("../../models/duck.glb", import.meta.url).href;
  const gltf = useLoader(GLTFLoader, gltfFile);

  const fbxFile = new URL("../../models/hoodie.fbx", import.meta.url).href;
  const fbx = useLoader(FBXLoader, fbxFile);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <Icon.ArrowLeftShort width={40} height={24}/>
            Image Tracking
          </Navbar.Brand>
        </Container>
      </Navbar>
      <ZapparCanvas>
        {/* Setup Zappar Camera*/}
        <ZapparCamera />
        {/* Setup Image Tracker, passing our target file */}
        <ImageTracker
          onVisible={() => setVisiable(true)}
          onNotVisible={() => setVisiable(false)}
          targetImage={targetFile}
        >
          {/* Create a normal pink sphere to be tracked to the target */}
          {visiable && (
            <primitive
              object={fbx}
              position={[0, 0, 0]}
              scale={[0.05, 0.05, 0.05]}
              children-0-castShadow
            />
          )}
        </ImageTracker>
        {/* Normal directional light */}
        <directionalLight />
      </ZapparCanvas>
    </>
  );
}

export default ImageTracking;
