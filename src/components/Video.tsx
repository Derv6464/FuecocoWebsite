
function Video() {
    return (
        <div>
        <video autoPlay loop muted style={{width:"100%"}}>
          <source src="src/assets/0001-0500.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ position: "absolute", top: "50%", left: "0", width: "100%", height: "100%" }}>
          <div style={{ textAlign: "center"}}>
            <h1 style={{ fontSize: "3em"}}>Pokémon</h1>
            <p style={{ fontSize: "1.5em" }}>Robot</p>
          </div>
      </div>
      </div>
    );
  }
  
  export default Video;