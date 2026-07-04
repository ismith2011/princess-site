const doors = [
  { emoji: '🌈', title: 'Rainbow Garden', subtitle: 'Colors', href: '/royal-library/rainbow-garden', color: 'pinkDoor', image: '/images/princess-heart-hands-bedroom.jpeg', text: 'Explore colors through worksheets, games, and coloring pages.' },
  { emoji: '🔤', title: 'Alphabet Academy', subtitle: 'Letters', href: '/royal-library/alphabet-academy', color: 'purpleDoor', image: '/images/princess-pointing.jpeg', text: 'Learn letters, sounds, tracing, and new words.' },
  { emoji: '🔢', title: 'Counting Castle', subtitle: 'Numbers', href: '/royal-library/counting-castle', color: 'blueDoor', image: '/images/princess-excited.jpeg', text: 'Count, trace, and learn numbers with royal math activities.' },
  { emoji: '⭐', title: 'Shape Kingdom', subtitle: 'Shapes', href: '/royal-library/shape-kingdom', color: 'goldDoor', image: '/images/princess-smile-hands.jpeg', text: 'Discover shapes all around us with tracing, games, and puzzles.' },
  { emoji: '🦁', title: 'Animal Adventure Safari', subtitle: 'Animals', href: '/royal-library/animal-adventure-safari', color: 'greenDoor', image: '/images/princess-side-profile.jpeg', text: 'Meet amazing animals and learn about their habitats and stories.' },
  { emoji: '🎵', title: 'Royal Music Hall', subtitle: 'Music', href: '/royal-library/royal-music-hall', color: 'musicDoor', image: '/images/princess-wave.jpeg', text: 'Sing, dance, and play music with Princess Kia and her royal friends.' },
];

export default function RoyalLibrary() {
  return (
    <main>
      <Nav />
      <section className="libraryHero">
        <div>
          <p className="breadcrumb">👑 Home › Royal Library</p>
          <h1>Welcome to the Royal Library</h1>
          <p>Step into a world of learning and imagination. Choose a magical door to explore fun activities, printables, and learning adventures with Princess Kia.</p>
          <p className="scriptSmall">Let’s learn, create, and stayyyy royal! 💖</p>
        </div>
        <img src="/images/princess-love-hand.jpeg" alt="Princess Kia" />
      </section>

      <section className="section">
        <p className="script">Choose a Magical Door</p>
        <h2>Where should we explore today?</h2>
        <div className="doorGrid libraryDoors">
          {doors.map((door) => (
            <a className={`doorCard ${door.color}`} href={door.href} key={door.title}>
              <span className="roomEmoji">{door.emoji}</span>
              <img src={door.image} alt={door.title} />
              <h3>{door.title}</h3>
              <p className="roomSubtitle">{door.subtitle}</p>
              <p>{door.text}</p>
              <span className="explore">👑 Explore</span>
            </a>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
function Nav(){return <nav className="nav"><a className="brand" href="/">Princess Kia</a><div className="navLinks"><a href="/">Home</a><a href="/royal-library">Royal Library</a><a href="/watch">Watch</a><a href="/meet-princess-kia">Meet Kia</a></div></nav>}
function Footer(){return <footer><p>👑 Princess Kia Magical Learning Adventures</p><p>Keep learning, keep exploring, and stayyyy royal! 💖</p></footer>}
