import { useState } from "react"

interface ISearchbarProps {
  initialText:string;
  changeHandler:(str:string)=>void;
}

export const SearchBar = (props:ISearchbarProps) => {
  const [text,setText] = useState("")

  const changeState = async(text:string) => {
    setText(text)
  }

  const onChangeHandler = async (str:string) => {
    await changeState(str)
        .then(()=>{props.changeHandler(str)})
  }

  return(
      <div className={"Searchbar"}>
        <div className={"SearchbarInner"}>
          <img className={"SearchbarLogo"} alt={""} src={'/Pictures/search.svg'}/>
          <input className={"SearchbarInput"}
                 value={text}
                 placeholder={props.initialText}
                 id={"adminSearch"}
                 onChange={(event)=>onChangeHandler(event.target.value)}
                 type={text}
          />
        </div>
      </div>
  )
}