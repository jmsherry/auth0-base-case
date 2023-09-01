import Head from "next/head";
import Image from "next/image";

import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
// import { useUser } from "@auth0/nextjs-auth0/client";

export interface User {
  picture: string;
  name: string;
  email: string;
}

type ProfileProps = {
  user?: User;
};

export default function Profile({ user }: ProfileProps) {
  // const theme = useTheme();
  // const { user } = useUser();

  let userDisplay = null;

  if (user) {
    const { picture, name, email } = user;
    userDisplay = (
      <>
        <div
          style={{
            marginBlockEnd: "1em",
            display: "grid",
            placeContent: "center",
          }}
        >
          <Image
            src={picture || ""}
            alt={name || "Student"}
            width={200}
            height={200}
          />
        </div>
        <p>Name: {name}</p>
        <p>email: {email}</p>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>The Jump Student Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {userDisplay}
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    // Getting user data from Auth0
    const session = await getSession(context.req, context.res);

    return {
      props: {
        user: session?.user,
        // sess: JSON.parse(JSON.stringify(session))
      },
    };
  },
});
