import { Logo, Header } from "../components/common";
import { Button, LinkButton} from "components/common";
import {
  AuthPage,
  HeaderDescription,
  SecondaryActionDescription,
  SecondaryActionContainer,
  InputsContainer,
  FormContainer,
} from "components/authComponents";
import SlackIcon from "../public/slackIcon.png";
import DiscordIcon from "../public/discordIcon.png";

export default function ConnectPage() {
    return (
        <AuthPage>
        <FormContainer>
          <Header>Connect your accounts</Header>
          <HeaderDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur pretium vehicula </HeaderDescription>
          <LinkButton href="https://discord.com/login" alt="Discord" src={DiscordIcon}>Login in Discord</LinkButton>
          <LinkButton href="https://slack.com/workspace-signin" alt="Slack" src={SlackIcon}>Login in Slack</LinkButton>
        </FormContainer>
        <Logo />
      </AuthPage>
    );
  }
  