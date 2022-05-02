import { Button, Alert, AlertIcon, AlertTitle, AlertDescription, Box, CloseButton} from '@chakra-ui/react';
import { Container, Heading } from '@chakra-ui/react';
//import Moralis from 'moralis/types';
import { useMoralis, useWeb3ExecuteFunction } from 'react-moralis';
const cod = require('./codigo');


function App() {
  const { Moralis, authenticate, isAuthenticated, authError, logout, isAuthenticating, user } = useMoralis();

  const enableWeb3 = useWeb3ExecuteFunction();

  const multiplicar = async () => {
    console.log("multiplicar")

    let options = {
      contractAddress: "0x5a54419Dce08F2304f71c90B51A41F28cCb60B98",
      functionName: "multiplicar",
      abi:	[{
        "inputs": [],
        "name": "multiplicar",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }],
      params: {},
      msgValue: 0
    }
    await Moralis.executeFunction(options);
  }


  if (isAuthenticated) {
    return (
      <Container>
        <Heading>Welcome, {user.attributes.username}, This is a Rinkeby test</Heading>
        <Button onClick={() => multiplicar()}>multiplicar</Button>
        <Button onClick={() => logout()}>Logout</Button>
        
        <h2>Contrato Multiplicar</h2>

        <p>
          {cod.codigo}
        </p>
      </Container>
    )
  }

  return (
    <Container>
      Try Login
      {authError && (
      <Alert status='error'>
        <AlertIcon />
        <Box>
          <AlertTitle>Atuhentication has failed!</AlertTitle>
          <AlertDescription>
            {authError.message}  
          </AlertDescription>
        </Box>
        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
        />
      </Alert>
      )}
      <Button isLoading={isAuthenticating} onClick={() => authenticate()}>Authenticate via Metamask</Button>


    </Container>
  );
}

export default App;
