"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { cartContext } from "./context/cartContext";
import { RiDeleteBinLine } from "react-icons/ri";

function ShoppingCartPage() {
  const {
    isLoading,
    shoppingData,
    totalCartItemsCount,
    totalCartValue,
    clearCart,
    toggleAmount,
  } = React.useContext(cartContext);

  const handleIncrement = (id: number) => {
    toggleAmount(id, "inc");
  };

  const handleDecrement = (id: number) => {
    toggleAmount(id, "dec");
  };

  const handleRemoveAll = () => {
    clearCart();
  };

  if (isLoading) {
    return <>Loading.....</>;
  }

  return (
    <div className="p-2 lg:px-10 lg:py-3">
      <Card className="">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="mb-2">Shopping Cart</CardTitle>
            <CardDescription>
              Checkout here with your cart items.
            </CardDescription>
          </div>
          <div>
            <Button
              onClick={handleRemoveAll}
              variant="outline"
              className="text-black hover:bg-black hover:text-white"
            >
              <RiDeleteBinLine className="w-4 h-4 mr-2" />
              Remove All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {shoppingData && shoppingData.length > 0 ? (
            <>
              {shoppingData?.map((item) => {
                return (
                  <Card key={item.id} className="mb-2 rounded-sm">
                    <CardContent className="flex flex-row justify-between gap-2 px-3 py-2">
                      <div className="flex flex-row gap-2">
                        <Image
                          src={item.image}
                          width={100}
                          height={100}
                          alt=""
                        />
                        <div className="flex flex-col items-start justify-center gap-2">
                          <p className="text-lg font-semibold ">{item.model}</p>
                          <p>${item.cost}</p>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center gap-1">
                        <Button
                          onClick={() => handleIncrement(item.id)}
                          variant="outline"
                          size="icon"
                          className="text-black hover:bg-black hover:text-white"
                        >
                          <MdOutlineKeyboardArrowUp className="w-4 h-4 " />
                        </Button>
                        <p>{item.quantity}</p>
                        <Button
                          onClick={() => handleDecrement(item.id)}
                          variant="outline"
                          size="icon"
                          className="text-black hover:bg-black hover:text-white"
                        >
                          <MdOutlineKeyboardArrowDown className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
              <div className="flex flex-col items-end justify-end gap-3 mt-3">
                <div className="grid grid-cols-2 gap-2">
                  <div>Total Cart Items: </div>
                  <div className="inline-flex justify-end text-lg font-bold">
                    {totalCartItemsCount}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>Total Cart Value: </div>
                  <div className="inline-flex justify-end text-lg font-bold">
                    ${totalCartValue}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>No items</p>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-start justify-center gap-2">
          <p className="block">All Payments accepted.</p>
          <p className="block">
            Cart empty? Try running the command{" "}
            <span className="px-2 py-1 ml-2 text-sm font-bold leading-loose text-green-500 bg-black">
              `npm run server`
            </span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ShoppingCartPage;
