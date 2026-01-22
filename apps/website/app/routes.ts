import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('./routes/layout.tsx', [
    index('./routes/home/index.tsx'),
    route('get-involved', './routes/get-involved/index.tsx'),
  ]),
] satisfies RouteConfig;
