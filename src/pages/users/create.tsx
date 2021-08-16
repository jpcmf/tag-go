import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';
import Link from 'next/link';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Password obrigatório')
    .min(6, 'Password deve conter no mínimo 6 caracteres.'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'Confirmação de password não confere.'),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
        >
          <Flex mb="8" direction="column">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Divider my="6" borderColor="gray.700" />

            <VStack spacing={['6', '8']}>
              <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
                <Input
                  name="name"
                  label="Nome completo"
                  placeholder="Por favor preencha..."
                  {...register('name')}
                  error={errors.name}
                />
                <Input
                  name="email"
                  type="email"
                  label="E-mail"
                  {...register('email')}
                  error={errors.email}
                />
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
                <Input
                  name="password"
                  type="password"
                  label="Senha"
                  {...register('password')}
                  error={errors.password}
                />
                <Input
                  name="password_confirmation"
                  type="password"
                  label="Confirmar senha"
                  {...register('password_confirmation')}
                  error={errors.password_confirmation}
                />
              </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="whiteAlpha"
                  >
                    Cancelar
                  </Button>
                </Link>
                <Button
                  type="submit"
                  isLoading={formState.isSubmitting}
                  size="sm"
                  fontSize="sm"
                  colorScheme="blue"
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
