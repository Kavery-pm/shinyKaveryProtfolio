import { Helmet } from "react-helmet"
import { headerData } from '../data/headerData'
const Main = ()=>{
    return (
        <>
        <Helmet>
        <title>{headerData.name} - Porfolio</title>
        </Helmet>
        </>
    )
}
export default Main;
