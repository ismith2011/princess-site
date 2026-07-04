export default function RoomPage() {
  return (
    <main>
      <Nav />
      <section className="roomHero safariTheme">
        <div className="roomHeroText">
          <p className="breadcrumb">👑 Royal Library › Animal Adventure Safari</p>
          <p className="script">🦁 Welcome to</p>
          <h1>Animal Adventure Safari</h1>
          <p>Walk through the royal safari and meet amazing animals.</p>
          <div className="buttons"><a className="button primary" href="#activities">Start Exploring</a><a className="button secondary" href="/royal-library">Back to Library</a></div>
        </div>
        <img src="/images/princess-side-profile.jpeg" alt="Princess Kia in Animal Adventure Safari" />
      </section>

      <section className="section safariThemeRoom">
        <p className="script">Meet your guide</p>
        <h2>Leo the Lion</h2>
        <p>Leo the Lion is here to help Little Royals learn animals with joy, kindness, and confidence.</p>
        <div className="pillRow"><span>Lion</span><span>Giraffe</span><span>Elephant</span><span>Zebra</span><span>Monkey</span><span>Bird</span><span>Fish</span></div>
      </section>

      <section className="section" id="activities">
        <p className="script">Royal Activities</p>
        <h2>Learn, Play, and Create</h2>
        <div className="activityGrid"><article><strong>Animal Sounds</strong><p>Coming soon</p></article><article><strong>Habitats</strong><p>Coming soon</p></article><article><strong>Animal Matching</strong><p>Coming soon</p></article><article><strong>Zoo Animals</strong><p>Coming soon</p></article><article><strong>Farm Animals</strong><p>Coming soon</p></article><article><strong>Safari Coloring</strong><p>Coming soon</p></article></div>
      </section>

      <section className="section split pinkPanel">
        <div>
          <p className="script">Featured Download</p>
          <h2>Animals printable pack</h2>
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
