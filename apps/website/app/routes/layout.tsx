import { Outlet } from 'react-router';
import { FloatingSocial } from '~/components/floating-social';

export default function Layout() {
  return (
    <>
      <FloatingSocial />
      <Outlet />
    </>
  );
}
