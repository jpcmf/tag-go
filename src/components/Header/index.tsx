import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

import { Logo } from './Logo';
import { Notification } from './Notification';
import { Profile } from './Profile';
import { Search } from './Search';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isVisible = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      {!isVisible && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          font-size="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        ></IconButton>
      )}

      <Logo showLogoData={isVisible} />

      {isVisible && <Search />}

      <Flex align="center" ml="auto">
        <Notification />
        <Profile showProfileData={isVisible} />
      </Flex>
    </Flex>
  );
}
