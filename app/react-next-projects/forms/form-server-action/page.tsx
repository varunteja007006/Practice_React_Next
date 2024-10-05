import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import React from "react";
import { postTodo } from "./actions";

export type TTodo = {
  id: number;
  title: string;
  description: string;
};

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos"); // replace with http://localhost:3030/todo when working on dev

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Page() {
  const todoList = await fetchData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <Card>
        <CardHeader>
          <CardTitle>ToDo App List</CardTitle>
        </CardHeader>
        <CardContent>
          {todoList.map((todo: TTodo) => {
            return (
              <div key={todo.id}>
                {todo.title} - {todo.description}
              </div>
            );
          })}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Create ToDo - server actions</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-8" action={postTodo} method="post">
            <Input name="title" placeholder="Title" />
            <Textarea name="description" placeholder="Description" />
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
