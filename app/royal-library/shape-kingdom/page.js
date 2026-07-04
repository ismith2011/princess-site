export default function RoomPage() {
  return (
    <main>
      <Nav />
      <section className="roomHero shapeTheme">
        <div className="roomHeroText">
          <p className="breadcrumb">👑 Royal Library › Shape Kingdom</p>
          <p className="script">⭐ Welcome to</p>
          <h1>Shape Kingdom</h1>
          <p>Discover shapes all around the kingdom through games and tracing.</p>
          <div className="buttons"><a className="button primary" href="#activities">Start Exploring</a><a className="button secondary" href="/royal-library">Back to Library</a></div>
        </div>
        <img src="/images/princess-smile-hands.jpeg" alt="Princess Kia in Shape Kingdom" />
      </section>

      <section className="section shapeThemeRoom">
        <p className="script">Meet your guide</p>
        <h2>Stella Star</h2>
        <p>Stella Star is here to help Little Royals learn shapes with joy, kindness, and confidence.</p>
        <div className="pillRow"><span>Circle</span><span>Square</span><span>Triangle</span><span>Star</span><span>Heart</span><span>Diamond</span><span>Oval</span></div>
      </section>

      <section className="section" id="activities">
        <p className="script">Royal Activities</p>
        <h2>Learn, Play, and Create</h2>
        <div className="activityGrid"><article><strong>Shape Hunt</strong><p>Coming soon</p></article><article><strong>Trace Shapes</strong><p>Coming soon</p></article><article><strong>Build a Castle</strong><p>Coming soon</p></article><article><strong>Match Shapes</strong><p>Coming soon</p></article><article><strong>Color Shapes</strong><p>Coming soon</p></article><article><strong>Shape Puzzles</strong><p>Coming soon</p></article></div>
      </section>

      <section className="section split pinkPanel">
        <div>
          <p className="script">Featured Download</p>
          <h2>Shapes printable pack</h2>
          <p>Add worksheets, coloring pages, and activities here as you create them.</p>
          <a className="button primary" href="#">Download Coming Soon</a>
        </div>
        <img className="featurePhoto" src="/images/coloring-page-wave.jpeg" alt="Princess Kia coloring page" />
      </section>
      <Footer />
    </main>
  );
}
function Nav(){return <nav className="nav"><a className="brand" href="/">Princess Kia</a><div className="navLinks"><a href="/">Home</a><a href="/royal-library">Royal Library</a><a href="/watch">Watch</a><a href="/meet-princess-kia">Meet Kia</a></div></nav>}
function Footer(){return <footer><p>👑 Princess Kia Magical Learning Adventures</p><p>Keep learning, keep exploring, and stayyyy royal! 💖</p></footer>}
