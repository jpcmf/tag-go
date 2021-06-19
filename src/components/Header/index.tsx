import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from './Logo';
import { Notification } from './Notification';
import { Profile } from './Profile';
import { Search } from './Search';

export function Header() {
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
      <Logo showLogoData={isVisible} />

      {isVisible && <Search />}

      <Flex align="center" ml="auto">
        <Notification />
        <Profile showProfileData={isVisible} />
      </Flex>
    </Flex>
  );
}
