import { Text } from '@chakra-ui/react';
interface LogoProps {
  showLogoData?: boolean;
}

export function Logo({ showLogoData = true }: LogoProps) {
  return (
    <Text
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tighter"
      w="64"
    >
      TAG go
      <Text as="span" color="messenger.400" ml="1">
        .
      </Text>
      {showLogoData && (
        <Text
          as="small"
          color="gray.700"
          ml="1"
          fontSize="medium"
          fontWeight="300"
        >
          dashboard
        </Text>
      )}
    </Text>
  );
}
