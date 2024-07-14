This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### How to add new Projects

1. Create a page in src > pages > project pages dir.
2. Create a folder in components > projects dir
3. Create a route in App.tsx add the page created in `Step 1`.
4. Add the path created in `Step 3` to navlinksMenu in Navbar.tsx component.

### List of helpful Packages

1. React Slick
2. Scroll - lock
3. React Just Parallax
4. React Spring - For making animations
5. React Remotion - For making programmatic videos
6. Anime js - Animations

### Practice projects to be added:

- 🔳 Dynamic Navbar
- 🔳 Multi-page form

### Some Good Blogs

- [React Custom Hooks](https://dev.to/arafat4693/15-useful-react-custom-hooks-that-you-can-use-in-any-project-2ll8)

## JSON SERVER Documentation

https://github.com/typicode/json-server/tree/v0

###

## NEXT JS

#### Topic to prepare

https://www.youtube.com/watch?v=vwSlYG7hFk0

1. Client vs Server Components (GET - Requests)
2. Server actions (POST/PUT/DELETE)
3. Suspense and Streaming
4. Caching
5. Static and Dynamic Rendering
6. Middleware
7. Folder/ File Structure
8. Production Build and deploying

---

###

1. A server component inside a client component will become a client only component. It also requires
   you to check and make sure that server component is not imported in client.

```js
"use client";
import ServerComp from "@serverComp/ServerComp";

function ClientComp() {
  // --- Some logic ---
  return (
    <>
      <ServerComp /> {/*This is also a client component now*/}
    </>
  );
}
export default ClientComp;
```

This is not the case if the client only component wraps the server component(server component is children)
or takes the server component as a props.

#### Passing server only component as a props to client only component

```js
// file name - ClientComp
"use client";

function ClientComp({ ServerComp }) {
  // --- Some logic ---
  return (
    <>
      {ServerComp} {/*This is a server component now*/}
    </>
  );
}
export default clientComp;
```

```js
// file name - ServerComp
import ClientComp from "@/ClientComp/ClientComp";
import ServerComp from "@/ServerComp/ServerComp";

async function Main() {
  // --- Some logic ---
  return (
    <>
      <ClientComp ServerComp={<ServerComp />} />{" "}
      {/* Pass the server component as props to client
      
      This will make sure Server Components will be server only component*/}
    </>
  );
}
export default Main;
```

<br />

#### Passing server only component as a children to client only component

```js
// file name - ClientComp
"use client";

function ClientComp({ children }) {
  // --- Some logic ---
  return (
    <>
      <div>
        {children} {/*This is a server component now*/}
      </div>
    </>
  );
}
export default clientComp;
```

```js
// file name - ServerComp
import ClientComp from "@/ClientComp/ClientComp";
import ServerComp from "@/ServerComp/ServerComp";

async function Main() {
  // --- Some logic ---
  return (
    <>
      {/* Pass the server component as children to client only component      
      This will make sure Server Components will be server only component*/}
      <ClientComp>
        <ServerComp />
      </ClientComp>
    </>
  );
}
export default Main;
```

2. A client only component can become server component

3. Server component is run once on server. A client component is run once on server and then hydrated
   in the browser(run on the client again).
   Therefore try not to access any window objects in client component assuming that it will run only
   on the browser.
   Best Practice:

   ```js
   if (typeof window !== "undefined") {
     // access window objects
     window.localStorage.setItem("Hello", "World");
   }
   ```

   Another solution is to use dynamic import to import the client side component

   ```js
   const ClientComponent = dynamic(
     () => import("@/ClientComponent/ClientComponent"),
     {
       ssr: false,
     }
   );
   ```

4. Hydration Errors - When the HTML rendered on the server does not match the HTML rendered on the
   client we get hydration errors. You could suppress it by passing suppressHydrationWarning prop
   to HTML tag.
   Example:

   ```js
   // Imports here ...
   function Example() {
     let isMsg;
     if (typeof window !== "undefined") {
       isMsg = JSON.parse(localStorage.getItem("message")); // assuming we get 'true' from storage
     }
     return (
       <>
         <h1> {message ? "Client" : "Server"} </h1>
         {/*On the server HTML will render "Server" but on the browser it will render "Client"
          This will result in hydration error
          */}
         <h1 suppressHydrationWarning> {message ? "Client" : "Server"} </h1>
         {/*This will not throw hydration error*/}
       </>
     );
   }
   ```

5. Fetching data

   - Server Components = You can directly call GET APIs in the server component itself.
   - Server Actions = POST PUT DELETE
   - Route Handlers = Webhooks (3rd Party libraries)

6. Use 'use server' to make something a server action, but not to make a component server component.
   To make component server component you can import "server-only" (NPM package).
   NOTE: In Next JS by default a component in app dir is a server component.

7. You can use server actions to post the data of the form by using the server action in the form action.
   You can also use React hooks to do advance form handling. Use 'use server' to make an API as server action

8. Data mutations do not reflect immediately in the server components because of caching. To make sure
   latest data is served when server component loads we have to use revalidatePath.
   You have to pass the path for which you want to revalidate the cache.
   NOTE: If you pass path "/" then it will revalidate the cache for all the server components. Try to
   specify particular paths.

9. Server Actions can be used for client side as well

10. params & searchParams

    - Params = like a specific product. Example URL: www.test.com/products/:id
    - Search Params = like a query or filter params. Example URL: www.test.com/products?sortBy=${value}

11. Forgetting about the loading state

    - Using suspense use the file `loading.tsx`

12. Using key in Suspense to trigger the loading whenever a component changes.

13. Using cookies() , headers() will make a file dynamic rendering. Also using searchParams will make
    a file dynamic rendering.

    Always run a build to check which parts of the component are static and dynamic rendering for better
    optimized build

14. In env files. env variables should be named with prefix NEXT_PUBLIC if it has to be used on the
    client side. If it has to be used on server side do not use it with that prefix NEXT_PUBLIC.

15. Split the utility functions like server side fetch calls with API key should be kept in different
    file when compared to Client API key that should run only on Client side.

16. Try Catch - Redirect  
    Use the redirection to navigate the user if some dynamic data is not available. Redirection logic
    should be used after the try catch

---

###

 <br />

---

### Server Side data fetching in Next JS

With JWT Token in Headers

```js
export async function getServerSideProps(context) {
  // Get the token from cookies or context.req.headers
  const token = context.req.cookies.token || context.req.headers.authorization;

  // Use the token in the fetch request to your API
  const res = await fetch("https://your-api.com/data", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();

  return { props: { data } };
}
```

Without JWT Token in Headers

```js
export async function getServerSideProps(context) {
  // Cookies are automatically sent with the request
  const res = await fetch("https://your-api.com/data");
  const data = await res.json();

  // No need to manually handle the token
  return { props: { data } };
}
```

header in next js

```js
import { Suspense } from "react";
import { headers } from "next/headers";

async function User() {
  const authorization = headers().get("authorization");
  const res = await fetch("...", {
    headers: { authorization }, // Forward the authorization header
  });
  const user = await res.json();

  return <h1>{user.name}</h1>;
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <User />
    </Suspense>
  );
}
```

```js
import { Suspense } from "react";
import { headers } from "next/headers";

async function User() {
  const authorization = headers().get("authorization");
  const res = await fetch("...", {
    headers: { authorization }, // Forward the authorization header
  });
  const user = await res.json();

  return <h1>{user.name}</h1>;
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <User />
    </Suspense>
  );
}
```

###

---

###

#### ShadCN UI extensions

https://jidefr.medium.com/shadcn-ui-add-components-and-resources-0846b0f57596
