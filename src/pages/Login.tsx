function Login() {
  return (
    <main className="container">
      <article>
        <h2>Log In</h2>
      <form>
        <fieldset>
          <label>
            Email
            <input type="email" name="email" placeholder="Email" autocomplete="email"/>
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="Password"/>
          </label>
        </fieldset>
        <input type="submit" value="Log In"/>
        <small>Don't have an account? <a href="/signup">Sign Up</a></small>
      </form>
      </article>
    </main>
  );
}

export default Login; 