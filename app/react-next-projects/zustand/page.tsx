"use client";
import React, { useState } from "react";
import { TBearStore, useBearStore } from "./store/bearStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function ZustandPage() {
  const { bears, increasePopulation, removeAllBears, updateBears }: TBearStore =
    useBearStore();

  const [updateByVal, setUpdateByVal] = useState<string>("");
  const handleUpdateBears = () => {
    const updateByVal_int = Number(updateByVal);
    if (updateByVal_int >= 0) {
      updateBears(updateByVal_int);
    } else {
      updateBears(0);
    }
  };

  return (
    <div>
      <h1 className="mb-3 text-2xl">Zustand Demo</h1>
      <Card className="">
        <CardHeader>
          <CardTitle>Bears count: {bears}</CardTitle>
          <CardDescription>This is a zustand example</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <Button
            className="bg-purple-300 dark:bg-purple-700 hover:bg-purple-400/[0.8]"
            onClick={increasePopulation}
          >
            Increase Population by 1 😁
          </Button>
          <div className="grid w-full max-w-sm md:max-w-[50%] items-center gap-3">
            <Label htmlFor="updateByVal">Enter a random number</Label>
            <div className="flex flex-row items-center justify-start gap-3">
              <Input
                type="text"
                id="updateByVal"
                placeholder="Enter a number to update the bears population"
                onChange={(e) => setUpdateByVal(e.target.value)}
              />
              <Button
                className="bg-purple-300 dark:bg-purple-700 hover:bg-purple-400/[0.8] w-fit"
                onClick={handleUpdateBears}
              >
                Update 😉
              </Button>
            </div>
          </div>
          <Button variant={"destructive"} onClick={removeAllBears}>
            Remove all bears 😢
          </Button>
        </CardContent>
        <CardFooter>
          Checkout the documentation for zustand here: {/* */}
          <a
            href="https://docs.pmnd.rs/zustand/getting-started/introduction"
            className="text-blue-800 underline ms-2"
          >
            https://docs.pmnd.rs/zustand/getting-started/introduction
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ZustandPage;
