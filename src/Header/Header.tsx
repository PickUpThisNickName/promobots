import { Link } from "react-router-dom"

export const Header = () => {
    return(
            <div className={"container mx-auto flex flex-row p-6"}>
                <div className={"container flex flex-row basis-1/2 justify-end"}>
                    <Link to={'/products'} className="text-center border-2 border-black p-2 rounded w-24 md:w-40">Промоботы</Link>
                </div>
                <div className={"container flex flex-row basis-1/2 justify-between ml-10"}>
                    <Link to={'/servicetickets'} className="text-center border-2 border-black p-2 rounded w-24 md:w-40">Заявки</Link>
                    <Link to={'/login'} className="text-center border-2 border-black p-2 rounded ml-2">Администрирование</Link>
                </div>
            </div>
    )
}