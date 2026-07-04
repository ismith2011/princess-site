import './globals.css';

export const metadata = {
  title: 'Princess Kia | Magical Learning Adventures',
  description: 'Songs, phonics, colors, numbers, printables, and magical learning adventures for Little Royals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
