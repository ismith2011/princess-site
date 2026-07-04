export default function RoomPage() {
  return (
    <main>
      <Nav />
      <section className="roomHero rainbowTheme">
        <div className="roomHeroText">
          <p className="breadcrumb">👑 Royal Library › Rainbow Garden</p>
          <p className="script">🌈 Welcome to</p>
          <h1>Rainbow Garden</h1>
          <p>A magical place where Little Royals learn all about colors.</p>
          <div className="buttons"><a className="button primary" href="#activities">Start Exploring</a><a className="button secondary" href="/royal-library">Back to Library</a></div>
        </div>
        <img src="/images/princess-heart-hands-bedroom.jpeg" alt="Princess Kia in Rainbow Garden" />
      </section>

      <section className="section rainbowThemeRoom">
        <p className="script">Meet your guide</p>
        <h2>Bella Butterfly</h2>
        <p>Bella Butterfly is here to help Little Royals learn colors with joy, kindness, and confidence.</p>
        <div className="pillRow"><span>Red</span><span>Orange</span><span>Yellow</span><span>Green</span><span>Blue</span><span>Purple</span><span>Pink</span></div>
      </section>

      <section className="section" id="activities">
        <p className="script">Royal Activities</p>
        <h2>Learn, Play, and Create</h2>
        <div className="activityGrid"><article><strong>Color of the Day</strong><p>Coming soon</p></article><article><strong>Color Matching</strong><p>Coming soon</p></article><article><strong>Color by Number</strong><p>Coming soon</p></article><article><strong>Find the Color</strong><p>Coming soon</p></article><article><strong>Color Scavenger Hunt</strong><p>Coming soon</p></article><article><strong>Coloring Pages</strong><p>Coming soon</p></article></div>
      </section>

      <section className="section split pinkPanel">
        <div>
          <p className="script">Featured Download</p>
          <h2>Colors printable pack</h2>
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
