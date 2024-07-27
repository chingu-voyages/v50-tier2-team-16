import * as React from "react";
import { Minus, Plus } from "lucide-react";

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
import Hamburger from "../atoms/header/Hamburger";

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
