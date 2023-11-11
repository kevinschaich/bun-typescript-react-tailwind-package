import { add } from "@/lib/add"

export const Adder = ({a, b}: {a: number, b: number})  => {
    return (<div>{add(a, b)}</div>)
}
