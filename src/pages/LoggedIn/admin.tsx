function Admin() {
  return (
    <>
      <hr />
      <main className="container-fluid">
        <article>
          <h2>Change A Users Wifi Network</h2>
          <form>
            <fieldset>
              <label>
                <input
                  type="number"
                  name="number"
                  placeholder="User ID"
                  aria-label="Number"
                />
              </label>
              <div className="grid">
                <div>
                  <label>
                    <input type="text" name="ssid" placeholder="SSID" />
                    <small>Users Wifi Name</small>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <small>Users Wifi Password</small>
                  </label>
                </div>
              </div>
            </fieldset>
            <input type="submit" value="Change Network Info" />
          </form>
        </article>

        <article>
          <h2>Users Network Info</h2>
          <table className="striped">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Email</th>
                <th scope="col">SSID</th>
                <th scope="col">IP</th>
                <th scope="col">Port</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>a</td>
                <td>b</td>
                <td>c</td>
                <td>d</td>
                <td>e</td>
              </tr>
            </tbody>
          </table>
        </article>
      </main>
    </>
  );
}

export default Admin;
