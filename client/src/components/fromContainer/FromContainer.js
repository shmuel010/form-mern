import {InputLabel, LoginContainer, Row, SmallInput, SpanLabel, TableWrapper, TextArea} from "./style";
import {useState} from "react";
import moment from "moment";
import FormLine from "../formLine/FormLine";
import axios from "axios";

const FromContainer = () => {

    const [userName, setUserName] = useState("")
    const date = "" + moment().format("MMM Do YY")
    const [comment, setComment] = useState("")
    const [arr, setArr] = useState(["a"])

    const arrObj = {}
    let index = 1;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const onChangeUserName = (e) => {
        const {value} = e.target;
        const newValue = value.replace(/[^A-Za-z0-9\s]/gi, '').toLocaleLowerCase();
        setUserName(newValue);

    }


    const onClick = async () => {
        try {
            if (userName.length > 0 && comment.length > 0) {
                const tempData = {
                    date,
                    userName,
                    comment
                }
                const postSend = {tempData, arrObj};
                await axios.post('/api/users', postSend, config)
            }
        }catch (e){
            console.error(e.message)
        }
    }
    const onClickAddLine = () => {
        setArr([...arr, "a"])

    }

    return (
        <div>
            <LoginContainer>
                <h1>login</h1>
                <form>
                    <InputLabel>
                        <SpanLabel> UserName :</SpanLabel>
                        <SmallInput value={userName} onChange={onChangeUserName} placeholder={"UserName"} type="text"
                                    required={true}/>

                        <SpanLabel> Date</SpanLabel>
                        <SmallInput value={date} placeholder={"Password"}
                                    type="text" disabled={true}
                                    required={true}/>
                    </InputLabel>
                    <SpanLabel>Comment:</SpanLabel>
                    <TextArea value={comment} onChange={(e) => {
                        setComment(e.target.value)
                    }} type="text" required={true}/>
                    <InputLabel>
                    </InputLabel>
                    <button onClick={onClick} type={"button"}>Send</button>

                    <TableWrapper>
                        <b>Num</b>
                        <b>Price</b>
                        <b>Quantity</b>
                        <b>Sum</b>

                    </TableWrapper>
                    {
                        arr.map(() =>

                            (<FormLine key={index} index={index++} arrObj={arrObj}
                                />
                            ))

                    }
                    <button onClick={onClickAddLine} type={"button"}>add line</button>
                </form>

            </LoginContainer>

        </div>
    )
}
export default FromContainer