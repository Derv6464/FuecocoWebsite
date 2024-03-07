import "../../styles/notion.css";

function Hardware() {
  return (
    <main className="container-fluid">
      <hr />
      <h2>Idea</h2>
      <h2>Requirements</h2>
      <h2>3D Model</h2>
      <h3> Pokemon </h3>
      <p>
        To start this project I found a model of the pokemon Fuecoco as I am not
        experienced in 3d sculpting.
      </p>
      [Fuecoco(pokemon)](https://cults3d.com/en/3d-model/game/fuecoco-pokemon-jscatalan)
      <p>
        I began with importing the model into Fusion360 and converting it to a
        solid. I scaled it to the accurate height and hollowed it. I then
        experimneted cutting up the model to find with best way to print the
        model. I settled on cutting into 10 peices. this was decied because of
        the printer bed size and printing effieceny. I made any straight cuts
        usng fusion 360 as seen below
      </p>
      <img
        src="../src/assets/HardwarePhotos/straightCuts.jpg"
        style={{
          width: "70%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <p>
        To cut the arms, face and tougne I put the model in blender to make 3d
        cuts, which Fusion360 does not easily allow. These were then put back
        into fusion360
      </p>
      <img
        src="../src/assets/HardwarePhotos/bentCuts.jpg"
        style={{
          width: "70%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <p>
        I added connectors to each part so they would all slot into each other
      </p>
      <img
        src="../src/assets/HardwarePhotos/Connectors.jpg"
        style={{
          width: "50%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <p>
        I will use lego tires and tread for grip in this model so I made rough
        models of the peices I used in mecabricks (a lego modeling website), and
        imported them into fusion360. I used these parts to make cuts to my
        model so the lego parts would fit exactly.
      </p>
      <img
        src="../src/assets/HardwarePhotos/LegoParts.jpg"
        style={{
          width: "50%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <p>
        I used the same process of finding or modeling electronics and using
        them to cut the model to make mounts for all the electronics
      </p>
      <img
        src="../src/assets/HardwarePhotos/MotorHolder.jpg"
        style={{
          width: "50%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <h2> Controller</h2>
      <p>
        I first sketched out the controller with the requirements that I wanted
        a way for the battery pack to be slid in and out, so they could be
        easily replavable
      </p>
      <img src="#" />
      <p>
        I modeled the controller based on the electronics I was using. I also
        wanted to laser cut the frint pannel so the elctronics and leds could be
        viewed.
      </p>
      <img src="#" />
      <main className="container">
        <details>
          <summary role="button">List of Parts & Soucres</summary>
          <table className="striped">
            <thead>
              <tr>
                <th scope="col">Part</th>
                <th scope="col">Link</th>
                <th scope="col">Used in</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Pokemon</th>
                <td></td>
                <td>Pokemon</td>
              </tr>
              <tr>
                <th scope="row">Raspberry Pi Pico W</th>
                <td></td>
                <td>Pokemon & Controller</td>
              </tr>
              <tr>
                <th scope="row">Kitronicks Motor Board</th>
                <td>Made</td>
                <td>Pokemon</td>
              </tr>
              <tr>
                <th scope="row">Servo Motor</th>
                <td>Made</td>
                <td>Pokemon</td>
              </tr>
              <tr>
                <th scope="row">9v Battery</th>
                <td></td>
                <td>Pokemon</td>
              </tr>
              <tr>
                <th scope="row">Hobby Motor</th>
                <td></td>
                <td>Pokemon</td>
              </tr>
              <tr>
                <th scope="row">Motor To Lego</th>
                <td></td>
                <td>Pokemon </td>
              </tr>
              <tr>
                <th scope="row">AAA Battery Pack</th>
                <td>Adafruit</td>
                <td>Pokemon & Controller</td>
              </tr>
              <tr>
                <th scope="row">Perma</th>
                <td>Adafruit</td>
                <td>Controller</td>
              </tr>
              <tr>
                <th scope="row">Case</th>
                <td>Made</td>
                <td>Controller</td>
              </tr>
              <tr>
                <th scope="row">Light nOOd</th>
                <td>Made</td>
                <td>Controller</td>
              </tr>
              <tr>
                <th scope="row">Buttons</th>
                <td>Made</td>
                <td>Controller</td>
              </tr>
              <tr>
                <th scope="row">Analog Stick</th>
                <td>Made</td>
                <td>Controller</td>
              </tr>
            </tbody>
          </table>
        </details>
      </main>
      <h2> Electronics </h2>
      <p>
        {" "}
        I looked into many electronics and microcontrolllers when designing the
        product.
      </p>
      <strong>Raspberry Pi Pico W</strong>
      <p>
        This was used as the microcontroller in the pokemon and the controller.
        The pico in the pokemon is running a local server and the controller is
        running client code. The client makes api request to the server, which
        control the motors, servios and ligths I choose to use a raspberry pi
        pico w, as I have the most experinece coding micro controllers in
        micropython and circuitpython which the pico can run. It is also
        extemely easy to connect to a wifi network. I was also aware of a light
        weight Flask like framework to run the API. The pico’s also have the
        standard array of GPIO pins.
      </p>{" "}
      <strong>Motor Board (Pokemon)</strong>{" "}
      <p>
        I used a kitonicks motor board to contol the motors and servo’s as the
        pico cannot drive them safely alone. I chose this board as I had
        previous experniece using their motor board for microBit and had no
        issues. I also initally thought it had the capanbility to power the pico
        and the motors from one battery pack, but has issues with that later on{" "}
      </p>
      <strong>Motors (Pokemon)</strong>{" "}
      <p>
        I used 3 hobby motors to move the pokemon. They were positioned in the
        feet and tail for stabililty. I used these because of their high torque
        and speed. I was initally planning on using ones I already owned from
        previous projects, but purchased new ones after my old ones weren’t
        operating at the speed I would have liked{" "}
      </p>
      <strong>Servos (Pokemon)</strong>{" "}
      <p>
        I used a servo in each arm of the pokemon. These were used as there was
        a limited amount of degrees the arms could move before getting stuck.
        The servos speed, limited rotation and easy control made them the best
        choice{" "}
      </p>
      <strong>Neopixels (Pokemon)</strong>
      <p>
        While these weren’t part of the inital design, I used these on start up
        to indicate wifi connectivily status and once connected, they are used
        for a fire effect. I choose these as they are bright, indivdually
        addresable, full RGB and I had two strips lying around.
      </p>{" "}
      <strong>Buttons (Controller)</strong>{" "}
      <p>
        These send the requests for the arms to move. I used these as they were
        repurpased from an old project, and they fitted nicly into holds because
        of the plastics clasps
      </p>{" "}
      <strong>LED (Controller)</strong>
      <p>
        {" "}
        This indicated whether an API reuqest has been sent successfully The is
        a simple LED with a plastic holder and 330omh resistor, that was
        repurpased from an old project
      </p>{" "}
      <strong>Adafruit nOOds (Controller</strong>
      <p>
        {" "}
        This is a flexible LED Strip, that indicates wifi conntectivy. It will
        blink on start up, and turn on when connected. This was chosen so it
        would be clear to the user when they were connected to wifi.
      </p>{" "}
      <strong>Analog Stick (Controller)</strong>
      <p>
        {" "}
        This controls the movement of the pokemon by sendning the directcion of
        the stick in an API request. The button builtin also send a request to
        turn the neopixels on. This was chosen based on the ease of use for the
        user. It was also repurpsed from a broken controller.
      </p>{" "}
      <strong>Solderable Breadbaord (Controller)</strong>{" "}
      <p>
        This connected all the controller electronics. It was the easiest, low
        profile and reaible way to connect the parts together
      </p>
      <h3> Wiring Diagrams </h3>
      <div className="grid">
        <div style={{ textAlign: "center" }}>
          <strong> Pokemon </strong>
          <img
            src="../src/assets/WiringDiagrams/PokemonWiring.png"
            style={{
              width: "80%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <strong>Controller</strong>
          <img
            src="../src/assets/WiringDiagrams/ControllerWiring.png"
            style={{
              width: "70%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </div>
      </div>
      <h2> Manufactor Process </h2>
      <h3> 3D Printing</h3>
      <p>
        All parts were printed on a Ender 3 v2. The parts exported from
        Fusion360 as STLs and sliced in the Creality Slicer. All parts used the
        “Dynamic Quality” preset. This settings were a 0.16mm layer height ,with
        10% cubic infill and generated supports Most parts took 5-10hrs, with
        the larger parts taking over 2 days. Once printed all the supports were
        removed.{" "}
      </p>
      <p>
        For the pokemon parts, they were all briefly sanded. Then car body
        filler was applied to cover up the layer lines. The parts were sanded
        again and given an initial coat of white spray paint. This initial coat
        revelled where the layer lines were still visible, so wood filler was
        then applied to those areas.
      </p>
      <p>
        {" "}
        The main body parts were glued together and filler was added in the
        gaps. This was then sanded and given a second layer of white spray
        paint. After a final round of sanding and filler. The parts were given
        tow coats of the final colours (red, bone white and yellow) Details,
        like the eyes and toes, were then painted on. The resulting finish meant
        the layer lines of the print weren’t visible and the print had a smooth
        texture. The gaps where the parts were glued together were covered,
        giving the print a uniform look The controller was left as is
      </p>{" "}
      <main className="container">
        <details>
          <summary role="button" className="secondary outline">
            Pictures of Construction
          </summary>
          <div className="grid">
            <div style={{ textAlign: "center" }}>
              <img
                src="../src/assets/Making/print.jpg"
                style={{
                  width: "100%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <small> Pokemon head stright off print bed</small>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src="../src/assets/Making/initalFit4.jpg"
                style={{
                  height: "25rem",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <small> Testing the fit of the parts</small>
            </div>
          </div>
          <br></br>
          <div className="grid">
            <div style={{ textAlign: "center" }}>
              <img
                src="../src/assets/Making/sanding.jpg"
                style={{
                  height: "25rem",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <small>Sanding leg after filler had been added</small>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src="../src/assets/Making/glueFiller.jpg"
                style={{
                  height: "25rem",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <small>Pokémon after being glued and filler added in gaps</small>
            </div>
          </div>
          <br></br>
          <div className="grid">
            <div style={{ textAlign: "center" }}>
              <img
                src="../src/assets/Making/sprayPainting.jpg"
                style={{
                  height: "25rem",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <small>Spray painting the Pokémon's Body</small>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src="../src/assets/Making/painted.png"
                style={{
                  width: "100%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <small>The head and body after painting</small>
            </div>
          </div>
        </details>
      </main>
      <h3> Soldering </h3>
      <p>
        As the motor board already had terminals, the only soldering was the
        headers on the pico and neopixels I soldered headers onto every
        component as well as the solderbale breadbaord so eveything could be
        connected. Easy electronic is easy to swap out or replace because of
        this.
      </p>
      <h3> Laser Cut </h3>
      <p>
        The front of the case was laser cut in the fab lab. It used 3mm clear
        arcylic.
      </p>{" "}
      <h2> Challenges</h2>
      <h3> Connecting the head to the body </h3>
      <p>
        The inital plan was to have the connect through slots. Simlar to how
        hooks or picture frame will slot onto nails in a wall. But while trying
        to remove the supports around the “nail” part, they kept snapping off.
        While I could have glued them on, I felt this was not a long term
        solution and they would just snap off again. I decied to switch to
        strong magnets to keep the head in place. They would be able to hold the
        head while making it easy to take off to access the electronics. I did
        rough maths based on the weight of the head compared to the holding
        weight of the magnets to make sure they could hold the weight. The area
        where the “slot” was, was sanded down using a dremel and the magnets
        were glue to the head and face parts.
      </p>
      <img src="#" />
      <h3>Powering the electronics</h3>
      <p>
        {" "}
        My orginal plan was to use a 9v battery, as the board was labeled as
        needing a 10.8v power supply. When testing, I found the board wouldn’t
        work unless it was also plugged into a laptop. Through isolated testing
        I realised the pico wasn’t getting supplied with enough power. I emailed
        the company who said to use a larger power supply. While I initally
        thought the motor board has the ability to supply enough power to the
        Pico W, I realised after testing using a power suppy that this wasn’t
        true. Through further testing I found the issue was that if the wifi
        chip was used, the pico would attempt to draw more power, but end up
        crashing. After research, I found the board only supplies 3.3v to the
        pico, which is usually enough for a standard Pico, but not for a Pico A
        which draws more power when using wifi. To fix this, I re-soldered some
        of the headers to face upwards, letting me power the pico completey
        sepearting from the motor board, which still having the pins needed to
        use the motor board connected. I also settled on power the board with
        6AA (9v total) batteries instead on a 9v battery to increase the
        amperage as AAs have a lower internal resistance. This solved a minor
        issue I was having where the motors were catching on parts of the print
        and getting stuck.{" "}
      </p>
    </main>
  );
}

export default Hardware;
