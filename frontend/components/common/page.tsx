import { styled } from "../../stitches.config";

export const Page = styled("div", {
  width: "100%",
  position: "relative",

  variants: {
    withNavbar: {
      true: {
        minHeight: "calc(100vh - $9)",
      },
      false: {
        minHeight: " 100vh",
      },
    },
  },

  defaultVariants: {
    withNavbar: false,
  },
});
