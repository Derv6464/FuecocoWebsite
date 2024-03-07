

function Docs() {
    return (
        <main className="container-fluid">
            <h1>Documentation</h1>
            <h2>General Project Description</h2>
           <p> My product is a robotic Pokémon called Fuecoco</p>
        <h2>Module Specific Documention</h2>
        <div className="grid">
             <div><article><a href="/Docs/Hardware" className="contrast ">Hardware</a></article></div>
             <div><article><a href="/Docs/Innovation" className="contrast ">Innovaiton</a></article></div>
             <div><article><a href="/Docs/BeyondCode" className="contrast ">Beyond Code</a></article></div>
             <div><article><a href="/Docs/GUI" className="contrast ">GUI</a></article></div>
             <div><article><a href="/Docs/AWS" className="contrast ">AWS</a></article></div>
        </div>
        </main>
    );
}

export default Docs;