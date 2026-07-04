export default function RoomPage() {
  return (
    <main>
      <Nav />
      <section className="roomHero countTheme">
        <div className="roomHeroText">
          <p className="breadcrumb">👑 Royal Library › Counting Castle</p>
          <p className="script">🔢 Welcome to</p>
          <h1>Counting Castle</h1>
          <p>Count crowns, jewels, stars, and more inside the castle.</p>
          <div className="buttons"><a className="button primary" href="#activities">Start Exploring</a><a className="button secondary" href="/royal-library">Back to Library</a></div>
        </div>
        <img src="/images/princess-excited.jpeg" alt="Princess Kia in Counting Castle" />
      </section>

      <section className="section countThemeRoom">
        <p className="script">Meet your guide</p>
        <h2>Count Crownwell</h2>
        <p>Count Crownwell is here to help Little Royals learn numbers with joy, kindness, and confidence.</p>
        <div className="pillRow"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span></div>
      </section>

      <section className="section" id="activities">
        <p className="script">Royal Activities</p>
        <h2>Learn, Play, and Create</h2>
        <div className="activityGrid"><article><strong>Count 1-10</strong><p>Coming soon</p></article><article><strong>Number Tracing</strong><p>Coming soon</p></article><article><strong>Count the Crowns</strong><p>Coming soon</p></article><article><strong>Patterns</strong><p>Coming soon</p></article><article><strong>Number Songs</strong><p>Coming soon</p></article><article><strong>Math Games</strong><p>Coming soon</p></article></div>
      </section>

      <section className="section split pinkPanel">
        <div>
          <p className="script">Featured Download</p>
          <h2>Numbers printable pack</h2>
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
