// Next JS related
import Head from "next/head";
import { useRouter } from "next/router";
import Error from "next/error";

// Firebase related
import { useAuthState } from "react-firebase-hooks/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth, firebase } from "../app/firebaseApp";
import { uiConfig } from "../config/firebaseAuthUI.config";

export default function Login() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (loading) return <>Loading...</>;
  else if (error) return <Error msg={error} />;
  else if (user) {
    console.log(user);
    // user is already logged in, redirect to home page
    router.push("/");
  }

  const authConfig = uiConfig(firebase);

  return (
    <>
      <Head>
        <title>CodeBlog | LogIn</title>
      </Head>
      <div>
        <div>
          <h1>Log In to</h1>
        </div>
        <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={auth} />
      </div>
    </>
  );
}
