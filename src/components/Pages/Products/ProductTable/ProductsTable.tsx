import { ProductRow } from "./ProductRow"
import { useState } from "react"
import { Product, ListProducts } from "../../../../models/models"

export const ProductsTable = ({arr}:ListProducts) => {

    const  ListProducts = arr.map((product) => {
        return (
            <ProductRow {...product}/>
        )
    })

    return(
      <div className={""}>
          <table className={""} >
              <thead className={""}>
              <tr>
                  <th className={""}><div>Модель</div></th>
                  <th className={""}><div>Серийный номер</div></th>
                  <th className={""}><div>IP-Адрес</div></th>
                  <th className={""}><div>Компания</div></th>
                  <th className={""}><div>Возраст</div></th>
              </tr>
              </thead>
              <tbody id={"customer-table-body"}>
                  {ListProducts}
              </tbody>
          </table>
      </div>
  )
}