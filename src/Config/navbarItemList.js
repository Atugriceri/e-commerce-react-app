import {
  LoginIcon,
  IdentificationIcon,
  UserIcon,
  ClipboardListIcon,
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'

const NAVIGATION = [
  {
    id: 1,
    name: "Login",
    link: "/signin",
    icon: <LoginIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />,
    loggedIn: false,
    underlined: false,
  },
  {
    id: 2,
    name: "Sign Up",
    link: "/signup",
    icon: (
      <IdentificationIcon
        className="mr-2 my-auto h-5 w-5"
        aria-hidden="true"
      />
    ),
    loggedIn: false,
    underlined: true,
  },
  {
    id: 3,
    name: "Profile",
    link: "/profile",
    icon: <UserIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />,
    loggedIn: true,
    underlined: true,
  },
  {
    id: 4,
    name: "Cart",
    link: "/cart",
    icon: (
      <ShoppingCartIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />
    ),
    loggedIn: "public",
    underlined: false,
  },
  {
    id: 5,
    name: "Orders",
    link: "/orders",
    icon: (
      <ClipboardListIcon
        className="mr-2 my-auto h-5 w-5"
        aria-hidden="true"
      />
    ),
    loggedIn: true,
    underlined: false,
  },
  {
    id: 6,
    name: "Favorites",
    link: "/favorites",
    icon: <HeartIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />,
    loggedIn: "public",
    underlined: true,
  },
]

export default NAVIGATION