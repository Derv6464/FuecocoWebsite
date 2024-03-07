import "@picocss/pico/css/pico.colors.min.css";

function Control() {
  return (
    <main className="container">
      <h1>Control Panel</h1>
      <article className="pico-background-red-550">
        <strong>
          You must be on the same Wifi network as the pokemon to use this
          function
        </strong>
      </article>

      <article>
        <p>Current IP & Port</p>
        <p>192.00.00:80</p>
      </article>
    </main>
  );
}

export default Control;
