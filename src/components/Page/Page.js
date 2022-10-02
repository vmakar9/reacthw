import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";
import css from "./Page.module.css"
export default function Page(){
    return(<div className={css.divs}>
        <Cats/>
        <Dogs/>
    </div>)
}