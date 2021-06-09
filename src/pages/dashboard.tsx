import { SimpleGrid } from '@chakra-ui/core';
import { Flex } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid></SimpleGrid>

        <h1>Dashboard</h1>
      </Flex>
    </Flex>
  );
}
