import { styled } from "stitches.config";
import Image from "next/image";
import PlaceholderAvatar from "public/avatar1.png";
import { Logo, ItemContainer } from "./common";

export const Navbar = () => (
  <NavContainer>
    <Logo />
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

const ProfileText = styled("div", {
  fontWeight: "600",
});
