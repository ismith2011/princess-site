export default function RoomPage() {
  return (
    <main>
      <Nav />
      <section className="roomHero alphabetTheme">
        <div className="roomHeroText">
          <p className="breadcrumb">👑 Royal Library › Alphabet Academy</p>
          <p className="script">🔤 Welcome to</p>
          <h1>Alphabet Academy</h1>
          <p>A royal classroom where letters, sounds, and first words sparkle.</p>
          <div className="buttons"><a className="button primary" href="#activities">Start Exploring</a><a className="button secondary" href="/royal-library">Back to Library</a></div>
        </div>
        <img src="/images/princess-pointing.jpeg" alt="Princess Kia in Alphabet Academy" />
      </section>

      <section className="section alphabetThemeRoom">
        <p className="script">Meet your guide</p>
        <h2>Sir Hoots-a-Lot</h2>
        <p>Sir Hoots-a-Lot is here to help Little Royals learn letters with joy, kindness, and confidence.</p>
        <div className="pillRow"><span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span><span>G</span></div>
      </section>

      <section className="section" id="activities">
        <p className="script">Royal Activities</p>
        <h2>Learn, Play, and Create</h2>
        <div className="activityGrid"><article><strong>Letter of the Day</strong><p>Coming soon</p></article><article><strong>Uppercase Letters</strong><p>Coming soon</p></article><article><strong>Lowercase Letters</strong><p>Coming soon</p></article><article><strong>Beginning Sounds</strong><p>Coming soon</p></article><article><strong>Trace the Alphabet</strong><p>Coming soon</p></article><article><strong>ABC Coloring</strong><p>Coming soon</p></article></div>
      </section>

      <section className="section split pinkPanel">
        <div>
          <p className="script">Featured Download</p>
          <h2>Letters printable pack</h2>
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
