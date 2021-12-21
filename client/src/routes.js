import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import DevisePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { ADMIN_RT, DEVICE_RT, LOGIN_RT, REGISTRATION_RT, SHOP_RT } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_RT,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: SHOP_RT,
        Component: Shop
    },
    {
        path: LOGIN_RT,
        Component: Auth
    },
    {
        path: REGISTRATION_RT,
        Component: Auth
    },
    {
        path: DEVICE_RT + "/:id",
        Component: DevisePage
    }
]