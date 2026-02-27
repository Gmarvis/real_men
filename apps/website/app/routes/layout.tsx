import { Outlet } from 'react-router';
import { FloatingCTA } from '~/components/floating-cta';
import { FloatingSocial } from '~/components/floating-social';

export default function Layout() {
  return (
    <>
      <FloatingCTA />
      <FloatingSocial />
      <Outlet />
    </>
  );
}
