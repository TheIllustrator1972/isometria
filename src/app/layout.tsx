import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Isometria", // Global title for the site
  description: "Isometric Grid Art", // Global description
  icons: {
    icon: "/images/AppIcon.png", // Favicon location
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link rel="icon" href="/images/AppIcon.png" />
      </head>
      <body style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}>
        {children}
      </body>
    </html>
  );
}
