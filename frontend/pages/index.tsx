import { styled } from "stitches.config";

export default function Home() {
  return <Component>Hello, world!</Component>;
}

const Component = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
});
