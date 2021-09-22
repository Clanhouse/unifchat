import { Logo, Header } from "../components/common";
import { Button, Input, Link } from "components/common";
import {
  AuthPage,
  SecondaryActionDescription,
  SecondaryActionContainer,
  InputsContainer,
  FormContainer,
} from "components/authComponents";

export default function LoginPage() {
  return (
    <AuthPage>
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

      <Logo />
    </AuthPage>
  );
}
