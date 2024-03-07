function Signup() {
    return (
      <main className="container">
        <article>
        <h2>Sign Up</h2>
        <form>
            <fieldset>
                <div className="grid">
                    <div>
                        <input name="first_name" placeholder="First Name" aria-label="First Name" autocomplete="first name"/>
                    </div>
                    <div>
                        <input name="lase_name" placeholder="Last Name" aria-label="Last Name" autocomplete="second name"/>
                    </div>
                </div>
                <input type="email" name="email" placeholder="Email" aria-label="Email" autocomplete="email" />
                <input type="tel" name="tel" placeholder="Phone  Number" aria-label="Tel" autocomplete="tel" />
                <input type="password" name="password" placeholder="Password" aria-label="Password" />
                <label>
                Proof of Purchase
                <input type="file" />
                </label>               
            </fieldset>
            <input type="submit" value="Sign Up"/>
            <small>Have an account? <a href="/login">Log In</a></small>
        </form>
        </article>
      </main>
    );
  }
  
  export default Signup; 