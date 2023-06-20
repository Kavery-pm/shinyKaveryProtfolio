import { Helmet } from "react-helmet"
import { headerData } from '../data/headerData'
import NavBar from "../components/NavBar/NavBar";
import Landing from "../components/Landing/Landing";
const Main = ()=>{
    return (
        <>
        <Helmet>
        <title>{headerData.name} - Porfolio</title>
        </Helmet>
        <NavBar/>
        <Landing/>
        </>
    )
}
export default Main;
