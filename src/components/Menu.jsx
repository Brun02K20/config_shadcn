import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
  } from "@/components/ui/navigation-menu";

  import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"


import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <NavigationMenu className="flex justify-end end-3">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Account
            </NavigationMenuLink>
          </Link>
          <Link to="/formulario">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Form
            </NavigationMenuLink>
          </Link>
          <Link to="/carousel">
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Carousel
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
