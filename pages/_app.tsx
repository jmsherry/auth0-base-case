// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";

// import { RouteGuard } from "@/components/RouteGuard";
import AuthRedirectWrapper from "@/components/AuthRedirectWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <AuthRedirectWrapper>
        <Component {...pageProps} />
      </AuthRedirectWrapper>
    </UserProvider>
  );
}
