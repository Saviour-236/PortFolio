export default function RootLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
        <main  className="h-full w-full">
          {children}
        </main>
     
    )
  }
