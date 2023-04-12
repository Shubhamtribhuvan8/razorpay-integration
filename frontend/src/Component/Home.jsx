import React from 'react'
import {Box,Stack} from "@chakra-ui/react"
import axios from "axios"
import Card  from './Card'
export default function Home() {
  const checkOutHandler=async (amount)=>{
    const {data:{key}}=await axios.get("https://clever-teal-cowboy-hat.cyclic.app/api/getkey")
    const {data:{order}}=await axios.post("https://clever-teal-cowboy-hat.cyclic.app/api/checkout",{
        amount
    })
    var options = {
    key, 
    amount: order.amount, 
    currency: "INR",
    name: "Shubham Infotech Corp",
    description: "Salary Transaction",
    image: "https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    order_id: order.id, 
    callback_url: "https://clever-teal-cowboy-hat.cyclic.app/api/paymentverification",
    prefill: {
        name: "Shubham Tribhuvan", 
        email: "shubhamtribhuvan8@gmail.com",
        contact: "7262009772"
    },
    notes: {
        "address": "Razorpay Corporate Office"
    },
    theme: {
        "color": "#3399cc"
    }
};
const razor = new window.Razorpay(options);
razor.open();
}
 return (
<Box>
    <h1 style={{textAlign:"center"}}>Buy Product</h1>
    <br></br>
    <br></br>
    <br></br>
    <Stack direction={["column","row"]} spacing={4} flexWrap="wrap" justifyContent={"center"} alignItems={"center"} marginTop={"1%"}>
     <Card amount={2300} img={"https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}  checkOutHandler={checkOutHandler} />
     <Card amount={3400} img={"https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} checkOutHandler={checkOutHandler}/>
     <Card amount={1500} img={"https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} checkOutHandler={checkOutHandler}/>
     <Card amount={6670} img={"https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} checkOutHandler={checkOutHandler}/>
     <Card amount={4000} img={"https://images.unsplash.com/photo-1611536326696-b52be8ef45f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} checkOutHandler={checkOutHandler}/>
     <Card amount={8999} img={"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2R1Y3QlMjBmb3IlMjBzbGFlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} checkOutHandler={checkOutHandler}/>
     <Card amount={5999} img={"https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} checkOutHandler={checkOutHandler}/>
     <Card amount={7999} img={"https://images.unsplash.com/photo-1617027185542-e87f1bce9091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHByb2R1Y3QlMjBmb3IlMjBzbGFlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} checkOutHandler={checkOutHandler}/>
    <br/>
    </Stack>
</Box>
  )
}
