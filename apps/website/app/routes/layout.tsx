import { Outlet, useLocation } from 'react-router';
import { FloatingCTA } from '~/components/floating-cta';
import { FloatingSocial } from '~/components/floating-social';
import { Navigation } from '~/components/navigation';

export default function Layout() {
  const location = useLocation();
  // Hide navigation on event detail pages (e.g., /events/some-slug)
  const isEventDetailPage = location.pathname.startsWith('/events/') && location.pathname !== '/events/';

  return (
    <>
      {!isEventDetailPage && <Navigation />}
      <FloatingCTA />
      <FloatingSocial />
      <Outlet />
    </>
  );
}
