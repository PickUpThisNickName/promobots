import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <div className={"container flex mx-auto flex-row px-10 my-10 "}>
            <Link className={'hover:shadow-xl w-1/2 border border-black rounded-3xl'} to={'/servicetickets'}>
                <img className={" h-full object-cover rounded-3xl"} src={"/Pictures/img-promobot-v4-360-2-1.jpg"} />
            </Link>
            <Link className={'hover:shadow-xl ml-5 w-1/2 border border-black rounded-3xl'} to={'/products'}>
                <img className={"object-cover h-full rounded-3xl "} src={"/Pictures/Патенты--Информация-copy.png"} />
            </Link>
        </div>
    )
}