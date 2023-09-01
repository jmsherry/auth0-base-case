import { useState, useRef } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Router from "next/router";


type AuthRedirectWrapperProps = {
  children: React.ReactNode;
};

export default function AuthRedirectWrapper({
  children,
}: AuthRedirectWrapperProps): JSX.Element | null {

  const { error, isLoading } = useUser();
  

  if (isLoading) {
    // console.log("loading case");
    return (
      <p>loading</p>
    );
  }

  if (error) {
    // console.log("error case");
    return (
      <pre>
        {JSON.stringify(error)}
      </pre>
    );
  }

  // if (!user && isClientSide) {
  //   // console.log("navigating", Router);
  //   if (Router.asPath !== loginPath) {
  //     Router.push(loginPath);
  //   }

  //   return null;
  // }


  // console.log("rendering normally");
  return <>{children}</>;
}
