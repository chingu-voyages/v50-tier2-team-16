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
import UserAccount from "./UserAccount";
import { useUser } from "@/contexts/UserContext";
import { useEffect, useState } from "react";
import TipButtons from "./TipButtons";

export function HeaderDrawer() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [tipPrice, setTipPrice] = useState(0);
  const { user, setUser, updateUserinLocalStorage } = useUser();
  useEffect(() => {
    if (user?.order) {
      const totalPrice = user.order.reduce(
        (sum, value) => sum + value.price * value.qty,
        0
      );
      setTotalPrice(totalPrice);
    }
  }, [user]);

  const onClickTipPrice = (tipAmount) => {
    setTipPrice(tipAmount);
  };

  const onClickCheckout = () => {
    const balance = user.balance;
    const totalCheckOutAmount = totalPrice + tipPrice;

    switch (true) {
      case user.order.length === 0:
        alert("Please add items to your cart.");
        break;
      case balance < totalCheckOutAmount:
        alert("Insufficient balance to complete the purchase.");
        break;
      default: {
        // Due to an issue with asynchronous processing, clearOrder and updateBalance can’t be used simultaneously, so I modified them directly.
        const updatedUser = {
          ...user,
          balance: balance - totalCheckOutAmount,
          order: [],
        };
        setUser(updatedUser);
        updateUserinLocalStorage(updatedUser);
        setTipPrice(0);
        alert("Purchase successful! Thank you for your shopping.");
        break;
      }
    }
  };

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
          <h1 className="order-total">Total: ${totalPrice} </h1>
          <p>Tip Amount</p>
          <TipButtons
            onClickTipPrice={onClickTipPrice}
            totalPrice={totalPrice}
          />
          <p>Check out amount: ${totalPrice + tipPrice}</p>

          <Button variant="outline" className="w-3/4" onClick={onClickCheckout}>
            Checkout
          </Button>
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
