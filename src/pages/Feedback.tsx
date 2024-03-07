const FAQ = () => {
  return (
    <main className="container">
      <hr />
      <article>
        <h1 style={{ textAlign: "center" }}>FAQ</h1>

        <form>
          <textarea name="q" placeholder="Write your question here" />
          <button type="submit">Submit</button>
        </form>
      </article>
    </main>
  );
};

export default FAQ;
