import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <>
            <div className={"container mx-auto flex flex-row px-16 justify-between py-6"}>
                <Link to={'/'} className="text-center">Промоботы</Link>
                <Link to={'/'} className="text-center">Заявки</Link>
                <Link to={'/'} className="text-center">Администрирование</Link>
            </div>
        </>
    )
}