import { Button, Alert, AlertIcon, AlertTitle, AlertDescription, Box, CloseButton} from '@chakra-ui/react';
import { Container, Heading } from '@chakra-ui/react';
import { useMoralis } from 'react-moralis';


function App() {
  const { authenticate, isAuthenticated, authError, logout, isAuthenticating, user } = useMoralis();

  if (isAuthenticated) {
    return (
      <Container>
        <Heading>Welcome, {user.attributes.username}</Heading>
        <Button onClick={() => logout()}>Logout</Button>
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
