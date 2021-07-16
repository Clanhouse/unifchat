import { styled } from "stitches.config";
import { InferGetServerSidePropsType } from "next";

interface HomeProps
  extends InferGetServerSidePropsType<typeof getServerSideProps> {}

export default function Home({ remoteData }: HomeProps) {
  return (
    <Component>
      <div>
        <span>Hi, </span>
        <Bold>{remoteData.user}</Bold>
      </div>
      <div>
        <span>Your message is </span>
        <Bold>{remoteData.message}</Bold>
      </div>
    </Component>
  );
}

interface ApiResponse {
  user: string;
  message: string;
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/dummy-message");
    const json: ApiResponse = await res.json();
    return {
      props: {
        remoteData: json,
      },
    };
  } catch {
    return {
      props: {
        remoteData: {
          user: "Joe",
          message: "api is not working here",
        },
      },
    };
  }
};

const Component = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
});

const Bold = styled("span", {
  fontWeight: 700,
});
