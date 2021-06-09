import { Button, Flex, Stack, Text } from '@chakra-ui/react';

import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
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
