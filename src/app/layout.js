export const metadata = {
  title: "FIRST HELLO",
  description: "I'm comming!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
