import { styled } from "stitches.config";
import Link from "next/link";
import { useRouter } from "next/router";

enum MenuTab {
  All,
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
