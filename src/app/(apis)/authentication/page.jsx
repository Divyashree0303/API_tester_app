import Link from "next/link";
import "./styles.css";

export default function Auth() {
  return (<div className="auth-container">



    <h1 className="auth-heading">Authentication</h1>
    <p>Fintract Global APIs use API key to authenticate requests.</p>
    <p>It's crucial to safeguard your API keys as they grant significant privileges. Please refrain from disclosing your secret API keys in public platforms like GitHub or client-side code. Protect them with care to prevent unauthorized access and misuse.</p>
    <div className="auth-steps-div">

      <div className="steps">
        <p>Please proceed through the following steps to acquire your API keys.</p>
        <ol className="auth-steps">
          <li>
            <h3>Registration</h3>
            <p>Create an account with Fintract Global:</p>
            <ul >
              <li>Visit the <Link className="auth-link" href="https://globalbanking.fintractglobal.com/signup">Sign Up</Link> page to create a new account.</li>
            </ul>

          </li>
          <li>
            <h3>Login</h3>
            <p>Log in to your Fintract Global account:</p>
            <ul >
              <li>Visit the <Link className="auth-link" href="https://globalbanking.fintractglobal.com/signin">Login</Link> page.</li>
            </ul>
          </li>
          <li>
            <h3>Get API key</h3>
            <p>Obtain an API key to authenticate API requests:</p>
            <ul >
              <li>Navigate to the API Keys section of your account dashboard.</li>
              <li>Generate a new API key and keep it secure.</li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="auth-call">
        <p>When you make API calls, include the API key as an access token in the authorization header:</p>
        <p> <span>Authorization: Bearer ACCESS-TOKEN</span>.</p>
      </div>

    </div>

    {/* <p>If you encounter any issues or have questions, feel free to <Link href="/contact"><a className={styles.link}>contact</a></Link> our support team for assistance.</p> */}

  </div>
  )
}