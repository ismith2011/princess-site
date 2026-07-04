const videoTopics = ['ABC Videos', 'Counting Videos', 'Colors', 'Shapes', 'Animals', 'Songs', 'Story Time'];

export default function Watch() {
  return (
    <main>
      <Nav />
      <section className="section split castleSoft">
        <div>
          <p className="script">Royal Theater</p>
          <h1>Watch Princess Kia</h1>
          <p>Sing, learn, count, and explore with Princess Kia videos made for Little Royals.</p>
          <a className="button primary" href="https://www.youtube.com/@princesskia" target="_blank">Visit YouTube Channel</a>
        </div>
        <img className="featurePhoto" src="/images/princess-wave.jpeg" alt="Princess Kia waving" />
      </section>
      <section className="section">
        <p className="script">Watch by Topic</p>
        <h2>Choose a learning adventure</h2>
        <div className="activityGrid">
          {videoTopics.map((topic) => <article key={topic}><strong>{topic}</strong><p>Videos coming soon.</p></article>)}
        </div>
      </section>
      <Footer />
    </main>
  );
}
function Nav(){return <nav className="nav"><a className="brand" href="/">Princess Kia</a><div className="navLinks"><a href="/">Home</a><a href="/royal-library">Royal Library</a><a href="/watch">Watch</a><a href="/meet-princess-kia">Meet Kia</a></div></nav>}
function Footer(){return <footer><p>👑 Princess Kia Magical Learning Adventures</p><p>Keep learning, keep exploring, and stayyyy royal! 💖</p></footer>}
