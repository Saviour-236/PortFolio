import Header from "./header & nav bar/header"
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode,
  }) {
    return (
        <main  className="h-full w-full border p-[1rem] bg-white text-black ">
          <Header/>
          {children}
        </main>
     
    )
  }
