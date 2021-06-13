import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>João Paulo</Text>
        <Text color="gray.600" fontSize="small">
          email@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="João Paulo" src="https://github.com/jpcmf.png" />
    </Flex>
  );
}
