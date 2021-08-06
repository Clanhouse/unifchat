import { styled } from "stitches.config";
import Image from "next/image";
import UnifchatLogo from "public/logo.svg";
import PlaceholderAvatar from "public/avatar1.png";

export const Navbar = () => (
  <NavContainer>
    <ItemContainer>
      <Image src={UnifchatLogo} height={32} width={32} alt="Unifchat logo" />
      <LogoText>UnifChat</LogoText>
    </ItemContainer>
    <ItemContainer>
      <ProfileText>Lew Konopajew</ProfileText>
      <Image
        src={PlaceholderAvatar}
        height={40}
        width={40}
        alt="Avatar placeholder"
        placeholder="blur"
      />
    </ItemContainer>
  </NavContainer>
);

const NavContainer = styled("nav", {
  px: "$6",
  height: "$9",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "$white",
});

const ItemContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
});

const LogoText = styled("div", {
  fontWeight: "700",
});

const ProfileText = styled("div", {
  fontWeight: "600",
});
