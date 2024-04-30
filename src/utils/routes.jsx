import { Banner, BrandsPage, Categories, Dashboard, Login, Logout, Products } from "../pages";
import OrdersPage from "../pages/orders";

export const routes = [
    {
        id: 1,
        path: '/',
        component: <Dashboard/>
    },
    {
        id: 2,
        path: '/products',
        component: <Products/>
    },
    {
        id: 3,
        path: '/categories',
        component: <Categories/>
    },
    {
        id: 4,
        path: '/login',
        component: <Login/>
    },
    {
        id: 5,
        path: '/logout',
        component: <Logout/>
    },
    {
        id: 6,
        path: '*',
        component: <Dashboard/>
    },
    {
        id: 7,
        path: '/brands',
        component: <BrandsPage/>
    },
    {
        id: 8,
        path: '/banner',
        component: <Banner/>
    },
    {
        id: 9,
        path: '/orders',
        component: <OrdersPage/>
    },
]