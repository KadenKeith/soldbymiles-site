

export const metadata = {
  title: "Keith Miles Real Estate",
  description: "Luxury Real Estate · Orlando, Kissimmee, ChampionsGate, Davenport"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100">
        {children}
      </body>
    </html>
  );
}
