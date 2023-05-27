import { Product } from "../../../../models/models";

export const ProductRow = ({Model,Serial,IP,Company,ReleaseDate,IsAdmin,Visible, Age}:Product) => {
  return(
      <tr className={Visible?"visible":"invisible"}>
        <td className={""}><div>{ Model }</div></td>
        <td className={""}><div>{ Serial }</div></td>
        <td className={""}><div>{ IP }</div></td>
        <td className={""}><div>{ Company }</div></td>
        <td className={""}><div>{ Age }</div></td>
          {IsAdmin&&
              <td>Инфо</td>
          }
          {IsAdmin&&
                  <td className={""}><div>
                      <p>✏</p>
                      <p>🗑️</p>
                  </div>
                  </td>
          }
      </tr>
  )
}