import Navbar from "../Navbar"
import Button from "./Button";

function HeroSection(){
    return(
    <div className="bg-indigo-600">
        <div className="container mx-auto">
        <Navbar/>
        <div className="">
            <h1>Saya seorang front-end engineer, back-end engineer, dan juga UI designer</h1>
            <p>Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI design.</p>
        <Button/>
        </div>
        </div>
    </div>
    );
}
   


export default HeroSection;