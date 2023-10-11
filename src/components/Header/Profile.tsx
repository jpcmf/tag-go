import {
  Flex,
  Box,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import { RiLogoutCircleLine } from 'react-icons/ri';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const { data: session } = useSession();

  console.log('session...', session);

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            {session?.user?.username ? session?.user?.username : 'Sem nome'}
          </Text>
          <Text color="gray.600" fontSize="small">
            {session?.user?.email ? session?.user?.email : 'Sem e-mail'}
          </Text>
        </Box>
      )}
      <Menu>
        <MenuButton>
          <Avatar
            size="md"
            name="João Paulo"
            src="https://github.com/jpcmf.png"
          />
        </MenuButton>
        {session && (
          <MenuList bg="gray.900" borderColor="gray.800">
            <>
              <MenuItem
                icon={<RiLogoutCircleLine size={16} />}
                onClick={() => signOut()}
                color="gray.600"
                bg="gray.900"
                _hover={{ color: 'white' }}
              >
                Logout
              </MenuItem>
              <MenuItem>{session.user.about}</MenuItem>
            </>
          </MenuList>
        )}
      </Menu>
    </Flex>
  );
}
