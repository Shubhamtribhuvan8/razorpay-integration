import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
const Order = () => {
  return (
    <div>
        <Box>
            <VStack h="100vh" justifyContent={"center"} >
             <Heading textTransform={"uppercase"}>Order Placed !</Heading>
            </VStack>
        </Box>
    </div>
  )
}

export default Order
