import { styled } from "../stitches.config";

export const FormContainer = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
  p: "$5",
  borderRadius: "$2",
  filter: "drop-shadow($shadows$default)",
  backgroundColor: "$white",

  maxWidth: "48ch",
  width: "100%",

  position: "absolute",
  bottom: "50%",
  left: "50%",
  transform: "translate(-50%, 30%)",
});

export const InputsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

export const LogoBottomContainer = styled("div", {
  position: "absolute",
  bottom: "$5",
  left: "50%",
  transform: "translateX(-50%)",
});

export const SecondaryActionContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "$2",
});

export const SecondaryActionDescription = styled("div", {
  color: "$grey",
});
