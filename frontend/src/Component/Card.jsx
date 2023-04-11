import React from 'react'
import { Button,Image,Text,VStack } from '@chakra-ui/react'
export default function Card({amount,img,checkOutHandler}) {

  return (
    <VStack>
      <Image src={img} width={300} objectFit={'cover'}/>
      <Text>₹{amount}</Text>
      <Button onClick={()=>checkOutHandler(amount)} colorScheme='teal' variant='solid'>Buy Now</Button>
    </VStack>
  )
}
