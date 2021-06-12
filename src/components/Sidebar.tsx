import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiHeartLine,
  RiInputMethodLine,
  RiSyringeLine,
} from 'react-icons/ri';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            color="gray.400"
            fontSize="small"
          >
            Geral
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiDashboardLine} fontSize="20" color="blue.400" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" align="center">
              <Icon as={RiContactsLine} fontSize="20" color="blue.400" />
              <Text ml="4" fontWeight="medium">
                Usuários
              </Text>
            </Link>
            <Link display="flex" align="center">
              <Icon as={RiSyringeLine} fontSize="20" color="blue.400" />
              <Text ml="4" fontWeight="medium">
                Vacinação
              </Text>
            </Link>
            <Link display="flex" align="center">
              <Icon as={RiHeartLine} fontSize="20" color="blue.400" />
              <Text ml="4" fontWeight="medium">
                HealthCheck
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            color="gray.400"
            fontSize="small"
          >
            Automação
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiInputMethodLine} fontSize="20" color="blue.400" />
              <Text ml="4" fontWeight="medium">
                Formulários
              </Text>
            </Link>
            <Link display="flex" align="center">
              <Icon as={RiGitMergeLine} fontSize="20" color="blue.400" />
              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            color="gray.400"
            fontSize="small"
          >
            Interop
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiInputMethodLine} fontSize="20" color="blue.400" />
              <Text ml="4" fontWeight="medium">
                Formulários
              </Text>
            </Link>
            <Link display="flex" align="center">
              <Icon as={RiGitMergeLine} fontSize="20" color="blue.400" />
              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
