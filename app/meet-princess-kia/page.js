export default function MeetPrincessKia() {
  return (
    <main>
      <Nav />
      <section className="section split castleSoft">
        <img className="featurePhoto" src="/images/princess-heart-hands-green.jpeg" alt="Princess Kia making a heart with her hands" />
        <div>
          <p className="script">Hello Royals!</p>
          <h1>Meet Princess Kia</h1>
          <p>I believe learning should feel magical. Together we sing, count, read, create, explore, and discover something new every day.</p>
          <p>Princess Kia helps Little Royals build confidence through songs, phonics, colors, numbers, kindness, creativity, and joyful adventures.</p>
          <a className="button primary" href="/royal-library">Explore the Royal Library</a>
        </div>
      </section>
      <section className="section pinkPanel">
        <p className="script">The Princess Kia Promise</p>
        <h2>Learn. Explore. Grow. Shine.</h2>
        <div className="activityGrid">
          <article><strong>Safe Learning</strong><p>Family-friendly content made for Little Royals.</p></article>
          <article><strong>Fun Activities</strong><p>Worksheets, songs, coloring pages, and games.</p></article>
          <article><strong>Kindness First</strong><p>Learning with confidence, curiosity, and joy.</p></article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
function Nav(){return <nav className="nav"><a className="brand" href="/">Princess Kia</a><div className="navLinks"><a href="/">Home</a><a href="/royal-library">Royal Library</a><a href="/watch">Watch</a><a href="/meet-princess-kia">Meet Kia</a></div></nav>}
function Footer(){return <footer><p>👑 Princess Kia Magical Learning Adventures</p><p>Keep learning, keep exploring, and stayyyy royal! 💖</p></footer>}
