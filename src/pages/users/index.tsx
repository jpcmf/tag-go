import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Pagination } from '../../components/Pagination';
import Link from 'next/link';

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="{['4','4','6']}" color="gray.300" width="8">
                  <Checkbox colorScheme="blue" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w="16"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="{['4','4','6']}">
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight={500}>João Paulo</Text>
                    <Text fontSize="small" color="gray.200">
                      email@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>
                    <Text>12 de Junho de 2021</Text>
                  </Td>
                )}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="green"
                    leftIcon={<Icon as={RiPencilLine} />}
                    iconSpacing="auto"
                    cursor="pointer"
                  ></Button>
                </Td>
              </Tr>

              <Tr>
                <Td px="{['4','4','6']}">
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight={500}>João Paulo</Text>
                    <Text fontSize="small" color="gray.200">
                      email@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>
                    <Text>12 de Junho de 2021</Text>
                  </Td>
                )}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="green"
                    leftIcon={<Icon as={RiPencilLine} />}
                    iconSpacing="auto"
                    cursor="pointer"
                  ></Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
