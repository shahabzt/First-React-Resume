//components
import { Header } from "./components/header/index"
import { NavBar } from "./components/navbar/index"
import { Mainbar } from "./components/mainBar/index"
import { Footer } from "./components/footer/index"




function Resume() {
    return (
        <>
            <Header />
            <NavBar />
            <Mainbar />
            <Footer />
           
        </>
    )
}


export function App() {
    return <div>
        <Resume />
    </div>
}
