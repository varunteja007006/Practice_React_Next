"use client"

import * as React from "react"
import { closestCorners } from "@dnd-kit/core"

import { dataConfig } from "@/config/data"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Sortable, SortableItem } from "@/components/ui/sortable"

export function MixedSortingDemo() {
  const [specialTricks, setSpecialTricks] = React.useState(
    dataConfig.speicalTricks
  )

  return (
    <Card>
      <div className="flex flex-col gap-4 items-center sm:flex-row">
        <CardHeader>
          <CardTitle>Mixed sorting</CardTitle>
          <CardDescription>Sort items in both directions.</CardDescription>
        </CardHeader>
      </div>
      <CardContent>
        <Sortable
          orientation="mixed"
          collisionDetection={closestCorners}
          value={specialTricks}
          onValueChange={setSpecialTricks}
          overlay={<div className="size-full rounded-md bg-primary/10" />}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {specialTricks.map((item) => (
              <SortableItem key={item.id} value={item.id} asTrigger asChild>
                <Card className="flex aspect-video items-center justify-center rounded-md bg-accent hover:bg-accent/80">
                  <CardHeader className="items-center">
                    <CardTitle>{item.name}</CardTitle>
                    <CardDescription>{item.points} points</CardDescription>
                  </CardHeader>
                </Card>
              </SortableItem>
            ))}
          </div>
        </Sortable>
      </CardContent>
    </Card>
  )
}
