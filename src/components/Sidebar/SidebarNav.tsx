import { Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiHeartLine,
  RiInputMethodLine,
  RiSyringeLine,
} from 'react-icons/ri';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuários
        </NavLink>
        <NavLink icon={RiSyringeLine} href="/dashboard">
          Vacinação
        </NavLink>
        <NavLink icon={RiHeartLine} href="/dashboard">
          Health-Check
        </NavLink>
      </NavSection>

      <NavSection title="Automação">
        <NavLink icon={RiInputMethodLine} href="/dashboard">
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/dashboard">
          Automação
        </NavLink>
      </NavSection>

      <NavSection title="Interop">
        <NavLink icon={RiInputMethodLine} href="/dashboard">
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} href="/dashboard">
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  );
}
