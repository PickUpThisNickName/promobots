import { Link } from "react-router-dom"
import { SearchBar } from "../../SearchBar/SearchBar"
import { useState, useEffect } from "react"
import { ToogleVisible } from "../../SearchBar/functions"
import { ProductsTable } from "./ProductTable/ProductsTable"
import {Product } from "../../../models/models"
import { productsData } from "../../../data/products"
import { TransformProductsData } from "./functions"

const PRODUCTS_URL = "http://j91259pw.beget.tech/api/products"

export const Products = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        // fetch(PRODUCTS_URL)
        //     .then(response=>{
        //         if(response.status===200)
        //         {
        //             response.json()
        //                 .then(data=>setProducts(data))
        //                 .then(()=>setLoading(true))
        //         }
        //     })
        setProducts(TransformProductsData(productsData))
        setLoading(true)
    },[])

    const changeHandler = (text:string) => {
        setProducts((prevState)=>{
            let newState = [...prevState]
            newState = ToogleVisible(text,["customerName","customerEmail","customerPhone"],["","","[ +()]"],newState)
            return newState
            }
        )
    }
    return(
        <div className={"container mx-auto p-6"}>
           <SearchBar changeHandler={changeHandler} initialText={'Строка поиска'}/>
            {!loading?<>Загрузка...</>:
                <ProductsTable arr={products}/>
            }
        </div>
    )
}