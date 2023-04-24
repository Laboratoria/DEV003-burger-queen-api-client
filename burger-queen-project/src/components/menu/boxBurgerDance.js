import Image from "next/image";
import dance from "../../../public/assets/burgerDanceGif.gif";

export function BoXBurgerDance () {
    return (
        <div className="burgerBox">
            <h1>BURGER DANCING</h1>
        <Image src={dance} className="danceBurger" alt="Dancing burger"/>
        </div>
        
    )
  }