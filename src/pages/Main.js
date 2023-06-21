import { Helmet } from "react-helmet"
import { headerData } from '../data/headerData'
import NavBar from "../components/NavBar/NavBar";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
const Main = ()=>{
    return (
        <>
        <Helmet>
        <title>{headerData.name} - Porfolio</title>
        </Helmet>
        <NavBar/>
        <Landing/>
        <About/>
        <Skills/>
        <Projects/>
        </>
    )
}
export default Main;
