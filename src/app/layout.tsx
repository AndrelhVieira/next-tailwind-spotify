import "./globals.css";

export const metadata = {
  title: "Spotify",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-zinc-900 via-black to-green-950 to-95%% text-white">
        {children}
      </body>
    </html>
  );
}
