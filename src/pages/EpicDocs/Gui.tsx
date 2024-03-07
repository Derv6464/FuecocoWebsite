function GUI() {
  return (
    <>
      <hr />
      <main className="container">
        <h1 style={{ textAlign: "center" }}>GUI</h1>
        <br></br>
        <table className="striped">
          <thead data-theme="light">
            <tr>
              <th>GUI Task</th>
              <th>Link to Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Navigation Bar</td>
              <td>
                <a href="/">Any Page</a>
              </td>
            </tr>
            <tr>
              <td>Responsive to PC and Mobile</td>
              <td>
                <a href="/">Any Page</a>
              </td>
            </tr>
            <tr>
              <td>File Upload</td>
              <td>
                <a href="/signup">In Sign Up Form</a>
              </td>
            </tr>
            <tr>
              <td>Sign In & Sign Up</td>
              <td>
                <a href="/login">Sign In</a> ,<a href="/signup">Sign Up</a>
              </td>
            </tr>
            <tr>
              <td>Chat Application</td>
              <td>
                <a href="/FAQ">FAQ Form</a>
              </td>
            </tr>
            <tr>
              <td>Search Bar</td>
              <td>
                <a href="/">Search Button</a>
              </td>
            </tr>
            <tr>
              <td>CMS</td>
              <td>
                <a href="/admin">Admin Page</a>
              </td>
            </tr>
            <tr>
              <td>Users</td>
              <td>
                <a href="/user">User</a>, <a href="/user">Admin</a>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  );
}

export default GUI;
