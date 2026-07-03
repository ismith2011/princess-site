import './globals.css';

export const metadata = {
  title: 'Princess Kia | Magical Learning Adventures',
  description: 'Songs, phonics, adventures, worksheets, and magical learning for little royals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
