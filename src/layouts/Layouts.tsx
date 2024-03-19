import Header from "@/components/Header"

type LayoutsProps = {
    children: React.ReactNode
}

const Layouts = ({children} : LayoutsProps) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container mx-auto flex-1 py-10">
        {children}
        </div>
    </div>
  )
}

export default Layouts