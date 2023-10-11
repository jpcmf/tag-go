import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { API } from '../constant';
import { setToken } from '../helper';
import { useAuthContext } from '../contexts/AuthContext';

// import { Input } from '../components/Form/Input';
import { Button, Flex, Stack, Text, Input } from '@chakra-ui/react';

import {
  // FormErrorMessage,
  FormLabel,
  FormControl,
  // Input,
  // Button,
} from '@chakra-ui/react';

export default function SignUp() {
  const route = useRouter();

  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState('');

  const signUpSchema = z.object({
    username: z
      .string()
      .nonempty('Campo obrigatório.')
      .min(3, { message: 'Usuário deve ter no mínimo 3 caracteres.' }),
    email: z
      .string()
      .nonempty('Campo obrigatório.')
      .email({ message: 'E-mail dever ser um e-mail válido.' })
      .nonempty('Campo obrigatório.'),
    password: z
      .string()
      .nonempty('Campo obrigatório.')
      .min(6, { message: 'Senha deve ter no mínimo 6 caracteres.' }),
  });

  type SignUpSchema = z.infer<typeof signUpSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { username: '', email: '', password: '' },
  });

  const onFinish: SubmitHandler<SignUpSchema> = async (values) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.error) {
        throw data.error;
      } else {
        setToken(data.jwt);
        setUser(data.user);
        // message.success('User created successfully');
        console.log('User created successfully');
        route.push('/dashboard');
      }
    } catch (error) {
      console.log(error);
      setError(error.message ?? "Couldn't create user");
    } finally {
      setIsLoading(false);
    }
  };

  function onSubmit(values) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <>
      <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(onFinish)}
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

            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                placeholder="username"
                {...register('username')}
                focusBorderColor="blue.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{ bgColor: 'gray.900' }}
                size="lg"
              />

              <Text
                as="small"
                color="red.500"
                ml="0"
                fontSize="smaller"
                fontWeight="300"
              >
                {errors.username?.message}
              </Text>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="email"
                {...register('email')}
                focusBorderColor="blue.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{ bgColor: 'gray.900' }}
                size="lg"
              />

              <Text
                as="small"
                color="red.500"
                ml="1"
                fontSize="smaller"
                fontWeight="300"
              >
                {errors.email?.message}
              </Text>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="password"
                {...register('password')}
                focusBorderColor="blue.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{ bgColor: 'gray.900' }}
                size="lg"
              />

              <Text
                as="small"
                color="red.500"
                ml="1"
                fontSize="smaller"
                fontWeight="300"
              >
                {errors.password?.message}
              </Text>
            </FormControl>
          </Stack>

          {error ? error : null}

          <Button
            type="submit"
            mt="6"
            colorScheme="messenger"
            size="lg"
            isLoading={isSubmitting}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
