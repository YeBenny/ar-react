import React, { useState } from "react";
import {
  InstantTracker,
  ZapparCamera,
  ZapparCanvas,
} from "@zappar/zappar-react-three-fiber";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Container, Navbar } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function InstantTracking(props) {
  let [placementMode, setPlacementMode] = useState(true);

  const fbxFile = new URL("../../models/hoodie.fbx", import.meta.url).href;
  const fbx = useLoader(FBXLoader, fbxFile);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <Icon.ArrowLeftShort width={40} height={24} />
            Instant Tracking
          </Navbar.Brand>
        </Container>
      </Navbar>
      <ZapparCanvas>
        <ZapparCamera />
        <InstantTracker
          placementMode={placementMode}
          placementCameraOffset={[0, 0, -10]}
        >
          <primitive
            object={fbx}
            position={[0, 0, 0]}
            scale={[0.05, 0.05, 0.05]}
            children-0-castShadow
            onClick={() => {
              setPlacementMode((currentPlacementMode) => !currentPlacementMode);
            }}
          />
        </InstantTracker>
        <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      </ZapparCanvas>
    </>
  );
}

export default InstantTracking;
