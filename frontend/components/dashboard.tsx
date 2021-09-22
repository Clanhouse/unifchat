import { styled } from "stitches.config";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import DiscordLogo from "public/discordIcon.png";
import SlackLogo from "public/slackIcon.png";
import AvatarPlaceholder1 from "public/avatar2.png";
import AvatarPlaceholder2 from "public/avatar3.png";
import { Container, Header, Page } from "./common";

enum MenuTab {
  All,
  Discord,
  Slack,
}

enum Communicator {
  Discord,
  Slack,
}

const POSTS = [
  {
    id: 1,
    communicator: Communicator.Slack,
    avatar: AvatarPlaceholder1,
    time: 1,
    username: "Alexander Chichaev",
    content:
      "Oh yeah, I have already made it, but we didn’t discussed it with Qas yet. I can upload it to the Zeplin and send to you",
  },
  {
    id: 2,
    communicator: Communicator.Discord,
    avatar: AvatarPlaceholder2,
    time: 2,
    username: "Yuriy Chichaev",
    content:
      "Hi Lew, Would you be able to export the SVG icons for the mobile menu and send them to me? Thanks",
  },
  {
    id: 3,
    communicator: Communicator.Slack,
    avatar: AvatarPlaceholder1,
    time: 4,
    username: "Alexander Chichaev",
    content:
      "Oh yeah, I have already made it, but we didn’t discussed it with Qas yet. I can upload it to the Zeplin and send to you",
  },
  {
    id: 4,
    communicator: Communicator.Discord,
    avatar: AvatarPlaceholder2,
    time: 5,
    username: "Yuriy Chichaev",
    content:
      "Hi Lew, Would you be able to export the SVG icons for the mobile menu and send them to me? Thanks",
  },
];

type PostData = typeof POSTS[number];

export const Dashboard = () => (
  <Page withNavbar>
    <DashboardContainer>
      <DashboardHeader>
        <Header>Dashboard</Header>
        <DashboardMenu>
          <MenuItem tabVariant={MenuTab.All} />
          <Divider />
          <MenuItem tabVariant={MenuTab.Discord} />
          <Divider />
          <MenuItem tabVariant={MenuTab.Slack} />
        </DashboardMenu>
      </DashboardHeader>
      <PostsList>
        {POSTS.map((post) => (
          <Post postData={post} key={post.id} />
        ))}
      </PostsList>
    </DashboardContainer>
  </Page>
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

const COMMUNICATOR_DATA = {
  [Communicator.Discord]: {
    communicatorImage: DiscordLogo,
    communicatorName: "Discord",
  },
  [Communicator.Slack]: {
    communicatorImage: SlackLogo,
    communicatorName: "Slack",
  },
} as const;

interface PostProps {
  postData: PostData;
}

const Post = ({ postData }: PostProps) => {
  const { avatar, content, communicator, time, username } = postData;
  const { communicatorImage, communicatorName } =
    COMMUNICATOR_DATA[communicator];

  return (
    <PostContainer>
      <FlexRow>
        <CommunicatorHeader>
          <Image
            src={communicatorImage}
            width={20}
            height={20}
            alt={"Discord logo"}
          />
          <CommunicatorTitle>{communicatorName}</CommunicatorTitle>
        </CommunicatorHeader>
        <Time>{time} min ago</Time>
      </FlexRow>
      <ContentRow>
        <MessageContainer>
          <MessageTitle>{username}</MessageTitle>
          <MessageContent>{content}</MessageContent>
        </MessageContainer>
        <Image src={avatar} width={64} height={64} alt="Avatar placeholder" />
      </ContentRow>
    </PostContainer>
  );
};

const DashboardContainer = styled("main", {
  my: "$7",
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

const DashboardMenu = styled(Container, {
  height: 36,
  py: "$2",
  display: "grid",
  gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
  backgroundColor: "$white",
  gap: "$1",
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

const PostContainer = styled(Container, {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
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
