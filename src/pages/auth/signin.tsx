import { Input } from '../../components/Form/Input';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Button, Flex, Stack, Text } from '@chakra-ui/react';

export default function SignIn() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log('e.target...', e.target.email.value);
    console.log('e.target...', e.target.password.value);

    const result = await signIn('credentials', {
      redirect: false,
      email: e.target.email.value,
      password: e.target.password.value,
    });

    console.log('result...', result);

    if (result.ok) {
      router.replace('/dashboard');
      return;
    }
    alert('Credentials invalid');
  };

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      {/* <form onSubmit={onSubmit}>
        <input id="email" name="email" type="email" />
        <input id="password" name="password" type="password" />
        <button>Enviar</button>
      </form> */}
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={onSubmit}
      >
        <Stack spacing={4}>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tighter"
            w="64"
            align="center"
            margin="auto"
            h="12"
          >
            TAG Go
            <Text color="messenger.400" as="span" ml="1">
              .
            </Text>
            <Text
              as="small"
              color="gray.700"
              ml="1"
              fontSize="smaller"
              fontWeight="300"
            >
              dashboard
            </Text>
          </Text>
          <Input name="email" id="email" type="email" label="E-mail" />
          <Input name="password" id="password" type="password" label="Senha" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="messenger" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
