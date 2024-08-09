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
import OrderList from "../../Order";
import { useUser } from "@/contexts/UserContext";
import { useEffect, useState } from "react";
import TipButtons from "./TipButtons";
import toast from "react-hot-toast";

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
        toast("Please add items to your cart.", { icon: '🛒' });
        break;
      case balance < totalCheckOutAmount:
        toast.error("Insufficient balance to complete the purchase.");
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
        toast.success("Purchase successful! Thank you for your shopping.");
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
        <div className="mx-auto w-full max-w-sm overflow-auto order-scroll-hidden px-2">
          <DrawerHeader>
            <DrawerTitle>Order</DrawerTitle>
            <DrawerDescription>Your current order. Add funds below if necessary.</DrawerDescription>
          </DrawerHeader>
          <UserAccount />

          <OrderList />
          <h2 className="order-total">Subtotal: ${totalPrice} </h2>
          <p>Tip Amount</p>
          <TipButtons
            onClickTipPrice={onClickTipPrice}
            totalPrice={totalPrice}
          />
          <p className="text-lg my-2">
            Final check out amount: ${totalPrice + tipPrice}
          </p>

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
