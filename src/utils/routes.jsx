import { Banner, BrandsPage, Categories, Dashboard, Logout, Products } from "../pages";
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
        component: <Logout/>
    },
    {
        id: 5,
        path: '*',
        component: <Dashboard/>
    },
    {
        id: 6,
        path: '/brands',
        component: <BrandsPage/>
    },
    {
        id: 7,
        path: '/banner',
        component: <Banner/>
    },
    {
        id: 8,
        path: '/orders',
        component: <OrdersPage/>
    },
]