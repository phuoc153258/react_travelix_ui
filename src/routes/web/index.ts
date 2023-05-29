import route from './route';

import { DefaultLayout } from '../../layouts';

import Home from '../../pages/Home';

const publicRoutes: any = [{ path: route.home, component: Home, layout: DefaultLayout }];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
