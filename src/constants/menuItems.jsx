import { Link } from "react-router-dom";
import {
    AlignLeftOutlined,
    HomeOutlined,
    InboxOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
    CreditCardOutlined
} from '@ant-design/icons';
export const menuItems = [
    {
        key: '/',
        icon: <HomeOutlined />,
        label: <Link to='/'>Boshqaruv paneli</Link>,
    },
    {
        key: '/products',
        icon: <InboxOutlined />,
        label: <Link to='/products'>Mahsulotlar</Link>,
    },
    {
        key: '/categories',
        icon: <AlignLeftOutlined />,
        label: <Link to='/categories'>Kategoriyalar</Link>,
    },
    {
        key: '/brands',
        icon: <AppstoreOutlined />,
        label: <Link to='/brands'>Brandlar</Link>,
    },
    {
        key: '/banner',
        icon: <AreaChartOutlined />,
        label: <Link to='/banner'>Bannerlar</Link>,
    },
    {
        key: '/orders',
        icon: <CreditCardOutlined />,
        label: <Link to='/orders'>Buyurtmalar</Link>,
    },
]