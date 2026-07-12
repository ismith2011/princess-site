const learningRooms = [
  { emoji: '🌈', title: 'Rainbow Garden', text: 'Learn colors with royal worksheets and activities.' },
  { emoji: '🔤', title: 'Alphabet Academy', text: 'Practice letters, sounds, and first words.' },
  { emoji: '🔢', title: 'Counting Castle', text: 'Count, trace numbers, and build math confidence.' },
  { emoji: '🎵', title: 'Music Hall', text: 'Sing along with Princess Kia songs.' },
  { emoji: '🎨', title: 'Art Studio', text: 'Coloring pages, crafts, and creative fun.' },
  { emoji: '📚', title: 'Royal Library', text: 'Free printables and learning packs.' },
];

const products = ['Colors Workbook', 'Alphabet Workbook', 'Numbers Workbook', 'Shapes Workbook'];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">👑 Princess Kia</a>
        <div className="navLinks">
          <a href="#watch">Watch</a>
          <a href="#library">Royal Library</a>
          <a href="#boutique">Boutique</a>
          <a href="#about">Meet Kia</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <img src="/images/princess-kia-hero.jpeg" alt="Princess Kia Magical Learning Adventures" />
      </section>

      <section className="welcome section">
        <p className="eyebrow">Hi Royals! 💖</p>
        <h1>Welcome to the Princess Kia Kingdom</h1>
        <p>
          Magical learning adventures for little royals through songs, phonics,
          colors, numbers, stories, and printable activities.
        </p>
        <div className="buttons">
          <a className="button primary" href="#watch">Watch on YouTube</a>
          <a className="button secondary" href="#library">Explore the Royal Library</a>
        </div>
      </section>

      <section className="section pink" id="learn">
        <p className="eyebrow">Explore the Kingdom</p>
        <h2>Learning Rooms</h2>
        <div className="grid rooms">
          {learningRooms.map((room) => (
            <article className="card" key={room.title}>
              <div className="icon">{room.emoji}</div>
              <h3>{room.title}</h3>
              <p>{room.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="watch">
        <div>
          <p className="eyebrow">Royal Theater</p>
          <h2>Watch & Learn</h2>
          <p>
            Join Princess Kia for joyful preschool learning videos, songs,
            phonics, calendar time, colors, and magical adventures.
          </p>
          <a className="button primary" href="https://www.youtube.com/@princesskia" target="_blank">Visit YouTube Channel</a>
        </div>
        <div className="videoCard">
          <div className="play">▶</div>
          <p>Featured Princess Kia Video</p>
        </div>
      </section>

      <section className="section library" id="library">
        <p className="eyebrow">Free Royal Downloads</p>
        <h2>Royal Library</h2>
        <p>Printable worksheets, coloring pages, and learning activities for little royals.</p>
        <div className="downloadRow">
          <span>Color Worksheets</span>
          <span>Letter Practice</span>
          <span>Counting Pages</span>
          <span>Coloring Pages</span>
        </div>
        <a className="button secondary" href="#contact">Request Downloads</a>
      </section>

      <section className="section pink" id="boutique">
        <p className="eyebrow">Shop the Royal Collection</p>
        <h2>Royal Boutique</h2>
        <div className="grid products">
          {products.map((product) => (
            <article className="product" key={product}>
              <div className="book">👑</div>
              <h3>{product}</h3>
              <p>Coming soon</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="about">
        <div className="portrait">👸🏽</div>
        <div>
          <p className="eyebrow">Meet Princess Kia</p>
          <h2>Learning is magical when we do it together.</h2>
          <p>
            Princess Kia helps little royals learn through songs, phonics,
            storybook adventures, and creative activities made with love.
          </p>
          <a className="button primary" href="#contact">Collaborate with Princess Kia</a>
        </div>
      </section>

      <section className="newsletter" id="contact">
        <h2>Join the Royal Family</h2>
        <p>Get updates, new videos, and free printable activities.</p>
        <form>
          <input placeholder="Your email address" />
          <button type="button">Join Now 👑</button>
        </form>
      </section>

      <footer>
        <p>👑 Princess Kia Magical Learning Adventures</p>
        <p>Keep learning, keep exploring, and stayyyy royal! 💖</p>
      </footer>
    </main>
  );
}
