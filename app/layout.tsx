import "./globals.css";

export const metadata = {
  title: "Talentaro Search",
  description: "Global Recruiting & Executive Search",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}