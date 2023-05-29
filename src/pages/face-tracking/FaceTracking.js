import { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import {
  FaceBufferGeometry,
  FaceTracker,
  ZapparCamera,
  ZapparCanvas,
  BrowserCompatibility,
} from "@zappar/zappar-react-three-fiber";
import { Container, Navbar } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function FaceMeshMaterial() {
  const faceMapTexture = useLoader(
    TextureLoader,
    new URL("../../assets/faceMeshTemplate.png", import.meta.url).href
  );
  return <meshStandardMaterial transparent map={faceMapTexture} color="red" />;
}

function FaceTracking() {
  const [visiable, setVisiable] = useState(false);
  const faceTrackerGroup = useRef();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <Icon.ArrowLeftShort width={40} height={24} />
            Face Tracking
          </Navbar.Brand>
        </Container>
      </Navbar>
      <BrowserCompatibility fallback={<div>Sorry!</div>} />
      <ZapparCanvas>
        <ZapparCamera userFacing />
        <FaceTracker
          ref={faceTrackerGroup}
          onVisible={() => setVisiable(true)}
          onNotVisible={() => setVisiable(false)}
        >
          {visiable && (
            <mesh>
              <FaceBufferGeometry
                attach="geometry"
                trackerGroup={faceTrackerGroup}
              />
              <FaceMeshMaterial />
            </mesh>
          )}
        </FaceTracker>
        <directionalLight />
      </ZapparCanvas>
    </>
  );
}

export default FaceTracking;
