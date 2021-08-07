import NextLink from "next/link";
import { ComponentProps, ReactNode } from "react";
import { styled } from "../../stitches.config";

interface LinkProps extends ComponentProps<typeof NextLink> {
  children: ReactNode;
}

export const Link = (props: LinkProps) => {
  const { children, ...nextLinkProps } = props;
  return (
    <NextLink {...nextLinkProps} passHref>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  );
};

const StyledLink = styled("a", {
  textDecoration: "none",
  color: "$black",
});
