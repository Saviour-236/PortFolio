import Header from "./header & nav bar/header"
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
        <main  >
          {children}
        </main>
     
    )
  }
