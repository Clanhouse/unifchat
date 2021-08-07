import Image from "next/image";
import UnifchatLogo from "../../public/logo.svg";
import { styled } from "../../stitches.config";

export const Logo = () => (
  <ItemContainer>
    <Image src={UnifchatLogo} height={32} width={32} alt="Unifchat logo" />
    <LogoText>UnifChat</LogoText>
  </ItemContainer>
);

export const ItemContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
});

const LogoText = styled("div", {
  fontWeight: "700",
});
