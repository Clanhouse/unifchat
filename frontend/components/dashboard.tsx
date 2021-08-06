import { styled } from "stitches.config";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import DiscordLogo from "public/discordIcon.png";
import AvatarPlaceholder from "public/avatar1.png";

enum MenuTab {
  All,
  Discord,
  Slack,
}

enum Communicator {
  Discord,
  Slack,
}

export const Dashboard = () => (
  <PageContainer>
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle>Dashboard</DashboardTitle>
        <DashboardMenu>
          <MenuItem tabVariant={MenuTab.All} />
          <Divider />
          <MenuItem tabVariant={MenuTab.Discord} />
          <Divider />
          <MenuItem tabVariant={MenuTab.Slack} />
        </DashboardMenu>
      </DashboardHeader>
      <PostsList>
        {Array.from(Array(10).keys()).map((key) => (
          <Post key={key} />
        ))}
      </PostsList>
    </DashboardContainer>
  </PageContainer>
);

const MENU_TABS = {
  [MenuTab.All]: {
    displayText: "All",
    tab: undefined,
  },
  [MenuTab.Discord]: {
    displayText: "Discord",
    tab: "discord",
  },
  [MenuTab.Slack]: {
    displayText: "Slack",
    tab: "slack",
  },
} as const;

interface MenuLinkProps {
  tabVariant: MenuTab;
}

const MenuItem = ({ tabVariant }: MenuLinkProps) => {
  const { query, pathname } = useRouter();
  const { tab, displayText } = MENU_TABS[tabVariant];

  const newQuery = tab && { tab };

  return (
    <Link href={{ pathname, query: newQuery }} passHref>
      <MenuLink active={query.tab === tab}>{displayText}</MenuLink>
    </Link>
  );
};

const Post = () => (
  <PostContainer>
    <FlexRow>
      <CommunicatorHeader>
        <Image src={DiscordLogo} width={20} height={20} alt={"Discord logo"} />
        <CommunicatorTitle>Discord</CommunicatorTitle>
      </CommunicatorHeader>
      <Time>1 min ago</Time>
    </FlexRow>
    <ContentRow>
      <MessageContainer>
        <MessageTitle>Alexander Chichaev</MessageTitle>
        <MessageContent>
          Oh yeah, I have already made it, but we didn’t discussed it with Qas
          yet. I can upload it to the Zeplin and send to you
        </MessageContent>
      </MessageContainer>
      <Image
        src={AvatarPlaceholder}
        width={64}
        height={64}
        alt="Avatar placeholder"
      />
    </ContentRow>
  </PostContainer>
);

const PageContainer = styled("div", {
  width: "100%",
  minHeight: "calc(100vh - $9)",
});

const DashboardContainer = styled("main", {
  mt: "$7",
  px: "$6",
  mx: "auto",
  maxWidth: "80ch",
});

const DashboardHeader = styled("div", {
  height: 40,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const DashboardTitle = styled("div", {
  fontSize: "$7",
  fontWeight: 700,
});

const DashboardMenu = styled("div", {
  height: 36,
  py: "$2",
  display: "grid",
  gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
  backgroundColor: "$white",
  gap: "$1",
  borderRadius: "$2",
  filter: "drop-shadow($shadows$default)",
});

const MenuLink = styled("a", {
  display: "flex",
  justifyContent: "center",
  px: "$5",
  textDecoration: "none",

  variants: {
    active: {
      false: {
        color: "$grey",
      },
      true: {
        color: "$black",
        fontWeight: 700,
      },
    },
  },
});

const Divider = styled("div", {
  backgroundColor: "$background",
});

const PostsList = styled("div", {
  display: "flex",
  flexDirection: "column",
  mt: "$6",
  gap: "$5",
});

const PostContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
  backgroundColor: "$white",
  filter: "drop-shadow($shadows$default)",
  borderRadius: "$2",
  p: "$5",
});

const FlexRow = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "$4",
});

const CommunicatorHeader = styled("div", {
  display: "flex",
  gap: "$3",
  alignItems: "center",
});

const CommunicatorTitle = styled("div", {
  textTransform: "uppercase",
  fontSize: 14,
  fontWeight: 600,
  color: "$grey",
});

const Time = styled("div", {
  color: "$grey",
});

const ContentRow = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 64px",
  gap: "$5",
});

const MessageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

const MessageTitle = styled("div", {
  fontWeight: 700,
});

const MessageContent = styled("div", {
  display: "-webkit-box",
  "-webkit-line-clamp": 2,
  "-webkit-box-orient": "vertical",
  overflow: "hidden",
});
