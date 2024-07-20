import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function FuncComp({
  message,
  handleClick,
  handleClickTwo,
  handleSetStateUtil,
  directSetState,
}: Readonly<{
  message: string;
  handleClick: () => void;
  directSetState: (obj: object) => void;
  handleClickTwo: (obj: object) => void;
  handleSetStateUtil: (obj: object) => void;
}>) {
  // function start
  const { toast }: { toast: any } = useToast();

  const onClickHandleSetStateUtil = () => {
    handleSetStateUtil({
      message:
        "The message has been updated by functional component & the state is also from functional component!",
    });
  };

  const handleDirectSetState = (args: object) => {
    try {
      directSetState(args);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request. Error is ${
          (error as Error).message
        }`,
      });
    }
  };

  return (
    <Card className="text-white bg-transparent">
      <CardHeader>
        <CardTitle>FuncComp</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          Message: <p className="mb-5 text-green-300">{message}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button
            variant={"ghost"}
            className="border border-purple-400"
            onClick={handleClick}
          >
            Update by functional component via function from class component
          </Button>
          <Button
            variant={"ghost"}
            className="border border-purple-400"
            onClick={() =>
              handleClickTwo({
                message:
                  "The message has been updated by class component but the state is from functional component!",
              })
            }
          >
            Update message in class component but pass the state value from func
          </Button>
          <Button
            variant={"ghost"}
            className="border border-purple-400"
            onClick={onClickHandleSetStateUtil}
          >
            Update message in functional component & the state is also from
            functional component
          </Button>
          <Button
            variant={"destructive"}
            onClick={() => handleDirectSetState({ message: "World" })}
          >
            setState from functional component
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default FuncComp;
