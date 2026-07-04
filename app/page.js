const rooms = [
  { emoji: '🌈', title: 'Rainbow Garden', subtitle: 'Colors', href: '/royal-library/rainbow-garden', image: '/images/princess-heart-hands-bedroom.jpeg', text: 'Explore colors through worksheets, videos, and coloring pages.' },
  { emoji: '🔤', title: 'Alphabet Academy', subtitle: 'Letters', href: '/royal-library/alphabet-academy', image: '/images/princess-pointing.jpeg', text: 'Practice letters, sounds, tracing, and first words.' },
  { emoji: '🔢', title: 'Counting Castle', subtitle: 'Numbers', href: '/royal-library/counting-castle', image: '/images/princess-excited.jpeg', text: 'Count crowns, trace numbers, and build math confidence.' },
  { emoji: '⭐', title: 'Shape Kingdom', subtitle: 'Shapes', href: '/royal-library/shape-kingdom', image: '/images/princess-smile-hands.jpeg', text: 'Learn circles, squares, triangles, stars, and hearts.' },
  { emoji: '🦁', title: 'Animal Adventure Safari', subtitle: 'Animals', href: '/royal-library/animal-adventure-safari', image: '/images/princess-side-profile.jpeg', text: 'Meet animals and learn about habitats and sounds.' },
  { emoji: '🎵', title: 'Royal Music Hall', subtitle: 'Music', href: '/royal-library/royal-music-hall', image: '/images/princess-wave.jpeg', text: 'Sing, dance, and learn with Princess Kia songs.' },
];

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="heroBanner" id="home">
        <img src="/images/hero-banner.jpeg" alt="Princess Kia Magical Learning Adventures" />
      </section>

      <section className="welcome section castleSoft">
        <p className="script">Hi Royals!</p>
        <h1>Welcome to the Princess Kia Kingdom</h1>
        <p>Learning is magical when we sing, count, read, create, and explore together.</p>
        <div className="buttons">
          <a className="button primary" href="/royal-library">Open the Royal Library</a>
          <a className="button secondary" href="/watch">Watch Princess Kia</a>
        </div>
      </section>

      <section className="section" id="library">
        <p className="script">Choose Your Magical Door</p>
        <h2>Royal Library</h2>
        <p>Every door opens to a new learning adventure for Little Royals.</p>
        <div className="doorGrid">
          {rooms.map((room) => (
            <a className="doorCard" href={room.href} key={room.title}>
              <span className="roomEmoji">{room.emoji}</span>
              <img src={room.image} alt={room.title} />
              <h3>{room.title}</h3>
              <p className="roomSubtitle">{room.subtitle}</p>
              <p>{room.text}</p>
              <span className="explore">👑 Explore</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section split pinkPanel" id="about">
        <img className="featurePhoto" src="/images/princess-heart-hands-green.jpeg" alt="Princess Kia making a heart with her hands" />
        <div>
          <p className="script">Meet Princess Kia</p>
          <h2>Magical learning adventures for Little Royals.</h2>
          <p>Princess Kia helps children learn through songs, phonics, stories, colors, numbers, creativity, kindness, and confidence.</p>
          <a className="button primary" href="/meet-princess-kia">Meet Princess Kia</a>
        </div>
      </section>

      <section className="section" id="boutique">
        <p className="script">Royal Boutique</p>
        <h2>Coming Soon</h2>
        <p>Workbooks, coloring books, learning packs, shirts, mugs, backpacks, and more royal magic.</p>
        <img className="wideImage" src="/images/brand-merch.jpeg" alt="Princess Kia merchandise mockups" />
      </section>
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <a className="brand" href="/">Princess Kia</a>
      <div className="navLinks">
        <a href="/">Home</a>
        <a href="/royal-library">Royal Library</a>
        <a href="/watch">Watch</a>
        <a href="/meet-princess-kia">Meet Kia</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <p>👑 Princess Kia Magical Learning Adventures</p>
      <p>Keep learning, keep exploring, and stayyyy royal! 💖</p>
    </footer>
  );
}
