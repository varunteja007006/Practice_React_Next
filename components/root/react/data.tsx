import LearnUseEffectDemo from "./learn-useEffect/learn-useEffect-demo";
import LearnUseStateDemo from "./learn-useState/learn-useState-demo";

// LearnUseEffectCleanup,
// LearnUseReducer,
// LearnUseRef,
// LearnUseMemo,
// LearnUseTransition,
// LearnCallback,
// LearnUseContext,

// LearnMemo,
// LearnSuspenseAPI,
// LearnChildrenProp,

export const react_data = [
  {
    id: "useState",
    title: "Learn useState",
    explanation: [
      `useState react hook is used to update the state of the page. Click the button to update 
      the state of the value.`,
    ],
    Component: <LearnUseStateDemo />,
    CodeSnippet: `
    import { Button } from "@/components/ui/button";
    import React from "react";

    export default function SampleCode () {
    const [value, setValue] = React.useState(0);
    return (
            <div className="flex flex-row items-center gap-4">
                <Button onClick={() => setValue(value + 1)} className="w-40">
                    Click me
                </Button>
                <p className="w-40 p-2 text-center border-b-2 border-blue-800 hover:bg-slate-50">
                    {value}
                </p>
            </div>
        );
    };`,
    href: "#useEffect",
  },
  {
    id: "useEffect",
    title: "Learn useEffect",
    explanation: [],
    Component: <LearnUseEffectDemo />,
    CodeSnippet: `
    import React from "react";
    export default function LearnUseEffectDemo () {
    const [posts, setPosts] = React.useState<Posts[] | null>(null);
    const fetchPosts = async () => {
      try {
        const res: Response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "GET",
        });
        const data: Posts[] = await res.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    React.useEffect(() => {
      fetchPosts();
    }, []);

    return <div>
      {posts?.slice(0, 5)?.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>;
    };
    `,
    href: "#useReducer",
  },
  {
    id: "useReducer",
    title: "Learn useReducer",
    explanation: [],
    Component: null,
    CodeSnippet: `
    `,
    href: "#useEffect",
  },
  {
    id: "useRef",
    title: "Learn useRef",
    explanation: [],
    Component: null,
    CodeSnippet: `
    `,
    href: "#useEffect",
  },
  {
    id: "useMemo",
    title: "Learn useMemo",
    explanation: [],
    Component: null,
    CodeSnippet: `
    `,
    href: "#useEffect",
  },
  {
    id: "useCallback",
    title: "Learn useCallback",
    explanation: [],
    Component: null,
    CodeSnippet: `
    `,
    href: "#useEffect",
  },
  {
    id: "useTransition",
    title: "Learn useTransition",
    explanation: [],
    Component: null,
    CodeSnippet: `
    `,
    href: "#useEffect",
  },
  {
    id: "useContext",
    title: "Learn useContext",
    explanation: [],
    Component: null,
    CodeSnippet: `
    `,
    href: "#useEffect",
  },
  {
    id: "suspense",
    title: "Learn suspense",
    explanation: [],
    Component: null,
    CodeSnippet: `
    `,
    href: "#useEffect",
  },
  {
    id: "children Props",
    title: "Learn children Props",
    explanation: [],
    Component: null,
    CodeSnippet: `
    `,
    href: "#useEffect",
  },
  {
    id: "memo",
    title: "Learn memo",
    explanation: [],
    Component: null,
    CodeSnippet: `
    `,
    href: "#useEffect",
  },
  {
    id: "custom-hooks",
    title: "Learn custom hooks",
    explanation: [],
    Component: null,
    CodeSnippet: `
    `,
    href: "#useEffect",
  },
];
