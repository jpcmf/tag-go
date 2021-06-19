import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Paulo</Text>
          <Text color="gray.600" fontSize="small">
            email@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="João Paulo" src="https://github.com/jpcmf.png" />
    </Flex>
  );
}
