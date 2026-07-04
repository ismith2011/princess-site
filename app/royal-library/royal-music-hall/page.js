export default function RoomPage() {
  return (
    <main>
      <Nav />
      <section className="roomHero musicTheme">
        <div className="roomHeroText">
          <p className="breadcrumb">👑 Royal Library › Royal Music Hall</p>
          <p className="script">🎵 Welcome to</p>
          <h1>Royal Music Hall</h1>
          <p>Sing, dance, clap, and learn with Princess Kia songs.</p>
          <div className="buttons"><a className="button primary" href="#activities">Start Exploring</a><a className="button secondary" href="/royal-library">Back to Library</a></div>
        </div>
        <img src="/images/princess-wave.jpeg" alt="Princess Kia in Royal Music Hall" />
      </section>

      <section className="section musicThemeRoom">
        <p className="script">Meet your guide</p>
        <h2>Melody Songbird</h2>
        <p>Melody Songbird is here to help Little Royals learn songs with joy, kindness, and confidence.</p>
        <div className="pillRow"><span>Welcome</span><span>ABCs</span><span>Numbers</span><span>Colors</span><span>Weather</span><span>Goodbye</span><span>Dance</span></div>
      </section>

      <section className="section" id="activities">
        <p className="script">Royal Activities</p>
        <h2>Learn, Play, and Create</h2>
        <div className="activityGrid"><article><strong>Welcome Song</strong><p>Coming soon</p></article><article><strong>ABC Song</strong><p>Coming soon</p></article><article><strong>Number Song</strong><p>Coming soon</p></article><article><strong>Weather Song</strong><p>Coming soon</p></article><article><strong>Dance Cards</strong><p>Coming soon</p></article><article><strong>Sing Along</strong><p>Coming soon</p></article></div>
      </section>

      <section className="section split pinkPanel">
        <div>
          <p className="script">Featured Download</p>
          <h2>Songs printable pack</h2>
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
