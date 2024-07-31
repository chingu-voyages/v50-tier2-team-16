import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Hamburger from "../../atoms/header/Hamburger";
import CheckoutButton from "@/components/atoms/drawer/Button.checkout";
import UserAccount from "./UserAccount";

export function HeaderDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>
          <Hamburger />
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-app-yellow">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Order</DrawerTitle>
            <DrawerDescription>Description</DrawerDescription>
          </DrawerHeader>
          <UserAccount />
          <CheckoutButton>Check out</CheckoutButton>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
