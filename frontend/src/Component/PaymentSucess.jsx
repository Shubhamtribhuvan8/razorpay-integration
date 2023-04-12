import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
const PaymentSucess = () => {

  const searchQuery = useSearchParams()[0];
  console.log(searchQuery.get("references"));
  const referenceNum = searchQuery.get("references");
  
  return (
    <div>
        <Box>
            <VStack h="100vh" justifyContent={"center"} >
             <Heading textTransform={"uppercase"}>Order Successfull</Heading>
             <Text>
                Reference No.{referenceNum}
             </Text>
            </VStack>
        </Box>
      PaymentSuccessFul!
    </div>
  )
}

export default PaymentSucess
