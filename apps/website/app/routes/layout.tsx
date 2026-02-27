import { Outlet } from 'react-router';
import { FloatingCTA } from '~/components/floating-cta';

export default function Layout() {
  return (
    <>
      <FloatingCTA />
      <Outlet />
    </>
  );
}
