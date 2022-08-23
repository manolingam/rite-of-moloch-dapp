import {
  Box, Flex,
  Text
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { SUPPORTED_NETWORK_IDS } from '../config';

const UnsupportedNetwork = () => {
  const context = useContext(AppContext);

  if(context.signerAddress && !(context.chainId in SUPPORTED_NETWORK_IDS)) return (
    <Flex direction='column' alignItems='center'>
      <Box fontSize='40px' color='red'>
        <i className='fa-solid fa-circle-xmark'></i>
      </Box>
      <Text fontFamily='spaceMono' color='white' fontSize='1.2rem'>
        Unsupported network
      </Text>
    </Flex>
  )
 
  return ''
}

export default UnsupportedNetwork