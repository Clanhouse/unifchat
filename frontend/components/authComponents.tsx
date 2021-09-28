import { styled } from "../stitches.config";
import { Page } from "./common";

export const AuthPage = styled(Page, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  py: "$5",
});

export const FormContainer = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
  p: "$5",
  mx: "$3",
  mt: "$10",
  borderRadius: "$2",
  filter: "drop-shadow($shadows$default)",
  backgroundColor: "$white",

  maxWidth: "48ch",
  width: "100%",
});

export const HeaderDescription = styled("div", {
  color: "$grey",
});

export const InputsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

export const SecondaryActionContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "$2",
});

export const SecondaryActionDescription = styled("div", {
  color: "$grey",
});
