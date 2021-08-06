import { styled } from "stitches.config";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Component>Hello, world!</Component>
    </>
  );
}

const Component = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
});
