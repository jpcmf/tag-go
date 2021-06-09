import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from 'react-icons/ri';
export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tighter" w="64">
        TAG Go
        <Text as="span" color="messenger.400" ml="1">
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

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
        alignItems="center"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar..."
          _placeholder={{ color: 'gray.500' }}
        />
        <Icon as={RiSearchLine} fontSize="20" cursor="pointer" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.500"
          borderRightWidth={1}
          borderColor="gray.600"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>João Paulo Fricks</Text>
            <Text color="gray.600" fontSize="small">
              jpfricks@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="João Paulo Fricks"
            src="https://github.com/jpcmf.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
