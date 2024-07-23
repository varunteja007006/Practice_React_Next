import { Input } from "@/components/ui/input";
import * as React from "react";

export default function TimerProblem() {
  const [minutes, setMinutes] = React.useState("10");
  const [seconds, setSeconds] = React.useState("0");

  return (
    <div>
      <Input
        name="minutes"
        placeholder="Minutes"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
      />
      <Input
        name="seconds"
        placeholder="Seconds"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
      />
    </div>
  );
}
