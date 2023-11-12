import { add } from "@/lib/add"
import './adder.css'

export const Adder = ({a, b}: {a: number, b: number})  => {
    return (<div className="bg-blue-500 m-4 p-4">{add(a, b)}</div>)
}
