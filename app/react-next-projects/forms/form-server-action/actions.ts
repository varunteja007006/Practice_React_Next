import { revalidatePath } from "next/cache";

export const postTodo = async (formData: FormData) => {
  "use server";
  const title = formData.get("title");
  const description = formData.get("description");

  const res = await fetch("http://localhost:3030/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description }),
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  revalidatePath("/react-next-projects/forms/form-server-action");
};
