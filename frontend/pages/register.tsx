import { Logo, Header } from "../components/common";
import { Button, Input, Link } from "components/common";
import {
  SecondaryActionDescription,
  SecondaryActionContainer,
  InputsContainer,
  FormContainer,
  AuthPage,
} from "components/authComponents";

export default function LoginPage() {
  return (
    <AuthPage>
      <FormContainer>
        <Header>Register</Header>
        <InputsContainer>
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </InputsContainer>
        <Button>Register</Button>
        <SecondaryActionContainer>
          <SecondaryActionDescription>
            Already have an account?
          </SecondaryActionDescription>
          <Link href={"/login"}>Login</Link>
        </SecondaryActionContainer>
      </FormContainer>

      <Logo />
    </AuthPage>
  );
}
