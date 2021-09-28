import { styled } from "../../stitches.config";
import { Button } from "./";
import { ComponentProps, ReactNode } from "react";

import NextLink from "next/link";
import Image from "next/image";




interface LinkButtonProps extends ComponentProps<typeof NextLink> {
    src : StaticImageData ;
    alt : string ;
    children : ReactNode ;
}

export const LinkButton = (props: LinkButtonProps) => {
  const { children, src, alt, ...nextLinkProps } = props;
  return (
        <NextLink {...nextLinkProps} >
            <StyledLinkButton>
                <Image src={src} height={20} width={20} alt={alt} />
                {children}
            </StyledLinkButton>
        </NextLink>
  );
};

const StyledLinkButton = styled("button", {
    backgroundColor: "$background",
    border: "none",
    borderRadius: "$2",
    fontWeight: "bold",
    py: "$3",
    gap: "$2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",   
    
  });
