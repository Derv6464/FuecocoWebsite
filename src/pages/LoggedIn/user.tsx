function User() {
  return (
    <main className="container-fluid">
      <article>
        <h2>Change your Wifi Network</h2>
        <form>
          <fieldset>
            <label>
              <input type="text" name="ssid" placeholder="SSID" />
              <small>Your Wifi Name</small>
            </label>
            <label>
              <input type="password" name="password" placeholder="Password" />
              <small>Your Wifi Password</small>
            </label>
          </fieldset>
          <input type="submit" value="Change Network Info" />
        </form>
      </article>
      <article>
        <h2>Current IP & Port</h2>
        <p>
          <strong>IP: </strong>192.00.00
        </p>
        <p>
          <strong>Port: </strong>80
        </p>
      </article>
    </main>
  );
}

export default User;
