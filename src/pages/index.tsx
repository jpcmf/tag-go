import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from '../components/Form/Input';

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
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
          <Input
            name="email"
            id="email"
            type="email"
            label="E-mail"
            {...register('email', { required: 'E-mail obrigatório' })}
          />
          <Input
            name="password"
            id="password"
            type="password"
            label="Senha"
            {...register('password', { required: 'Password obrigatório' })}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="messenger"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
