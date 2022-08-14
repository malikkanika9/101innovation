import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../images/icon.png"
import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import data from "../db.json"

export const FoodList = () => {
    const [fooddata, setfoodData] = useState(data)
return (
        <div>
            <h1>FoodList</h1>
            {fooddata.map((e) => {
                return (
         <Box>
   <Link to={`/${e.code}`}><SimpleGrid minChildWidth='100px'style={{margin:"20px"}} spacing='10px' key={e.code}>
   <Box className='img'>
     <Center>
  <img src="icon.png" alt="" />
 </Center>
 </Box>
 <Box className='product'>
   <Center>
       <p>{e.product_name} {`(${e.generic_name})`}</p>
      </Center>
     </Box>
     </SimpleGrid>
  </Link>
   <Box><hr /></Box>
 </Box>
 )
            })}
        </div>
    )
}