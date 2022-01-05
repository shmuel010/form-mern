import {TableWrapper} from "../fromContainer/style";
import {useEffect, useState} from "react";

const FormLine = ({arrObj,  index})=>{
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState()
    const [sum , setSum] = useState()

    useEffect(()=>{
        if(price>0 && quantity>0){
            setSum( parseInt(price)*parseInt(quantity))
            arrObj[index]={price,quantity,sum}
        }
    },[price, quantity,sum])

    return(
        <TableWrapper >
            <input disabled={true} value={index} type="text"/>
            <input value={price} onChange={(e)=>{
                setPrice(parseInt( e.target.value))
            }} type="number"/>
            <input value={quantity} onChange={(e)=>{
                setQuantity(parseInt(e.target.value))
            }} type="number"/>
            <input disabled={true} value={sum} type="text"/>

        </TableWrapper>
    )
}
export default FormLine