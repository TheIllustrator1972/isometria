import { Poppins, Roboto, Lato } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400"],
  style: ["normal"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "500"],
  style: ["normal"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal"],
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
    <html
      lang="en"
      className={`${poppins.className} ${roboto.className} ${lato.className}`}
    >
      <head>
        <link rel="icon" href="/images/AppIcon.png" />
      </head>
      <body style={{ padding: "0px", margin: "0px", boxSizing: "border-box" }}>
        {children}
      </body>
    </html>
  );
}
