import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
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
  );
}
