import { Helmet } from "react-helmet"
import { headerData } from '../data/headerData'
import NavBar from "../components/NavBar/NavBar";
const Main = ()=>{
    return (
        <>
        <Helmet>
        <title>{headerData.name} - Porfolio</title>
        </Helmet>
        <NavBar/>
        </>
    )
}
export default Main;
