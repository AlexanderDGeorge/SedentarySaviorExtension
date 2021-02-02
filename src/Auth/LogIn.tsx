import { AppleButton, EmailButton, GoogleButton } from "./Buttons";

export default function LogIn() {
  return (
    <>
      <h1>Log In</h1>
      <GoogleButton />
      <AppleButton />
      <EmailButton />
      <p>
        Don't have an account? <a href="/signup">Sign up.</a>
      </p>
      <a href="/">Skip</a>
    </>
  );
}
