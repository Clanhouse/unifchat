import { Page, Logo, Header } from "../components/common";
import { Button, Input, Link } from "components/common";
import {
  SecondaryActionDescription,
  SecondaryActionContainer,
  InputsContainer,
  LogoBottomContainer,
  FormContainer,
} from "components/authComponents";

export default function LoginPage() {
  return (
    <Page>
      <FormContainer>
        <Header>Login</Header>
        <InputsContainer>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
        </InputsContainer>
        <Button>Login</Button>
        <SecondaryActionContainer>
          <SecondaryActionDescription>
            You don&apos;t have an account?
          </SecondaryActionDescription>
          <Link href={"/register"}>Register</Link>
        </SecondaryActionContainer>
      </FormContainer>

      <LogoBottomContainer>
        <Logo />
      </LogoBottomContainer>
    </Page>
  );
}
