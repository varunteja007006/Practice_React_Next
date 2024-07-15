import LearnChildrenPropsDemo from "./learn-children-props/learn-children-demo";
import Child from "./learn-context/Child";
import LearnMemoDemo from "./learn-memo/learn-memo-demo";
import LearnSuspenseAPI from "./learn-suspense-api/learn-suspense-api";
import LearnUseEffectDemo from "./learn-useEffect/learn-useEffect-demo";
import LearnUseRefDemo from "./learn-useRef/learn-useRef-demo";
import LearnUseStateDemo from "./learn-useState/learn-useState-demo";

// LearnUseEffectCleanup,
// LearnUseReducer,
// LearnUseRef,
// LearnUseMemo,
// LearnUseTransition,
// LearnCallback,

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
    href: "#useRef",
  },
  {
    id: "useRef",
    title: "Learn useRef",
    explanation: [
      "You can use useRef to get access to the DOM element. You can also use it to store the value of a state between renders.",
    ],
    Component: <LearnUseRefDemo />,
    CodeSnippet: `
    `,
    href: "#useMemo",
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
    Component: <Child />,
    CodeSnippet: `
    // component 1
    import React from "react";

    const LearnContext = React.createContext<{
      incValue: number;
      setIncValue: React.Dispatch<React.SetStateAction<number>>;
    }>({
      incValue: 0,
      setIncValue: () => {},
    });

    export const LearnContextProvider = ({
      children,
    }: {
      children: React.ReactNode;
    }) => {
      const [incValue, setIncValue] = React.useState(0);

      const obj = React.useMemo(
        () => ({
          incValue,
          setIncValue,
        }),
        [incValue, setIncValue]
      );

      return <LearnContext.Provider value={obj}>{children}</LearnContext.Provider>;
    };

    export const useLearnContext = () => {
      const context = React.useContext<{
        incValue: number;
        setIncValue: React.Dispatch<React.SetStateAction<number>>;
      }>(LearnContext);

      if (!context) {
        throw Error("Context must be used inside an Context Provider !!");
      }
      return context;
    };

    // wrap the component 1 around this component

    import React from "react";
    import { LearnContextProvider } from "./learn-context-api";
    import InnerChild from "./InnerChild";

    const Child = () => {
      return (
        <LearnContextProvider>
          <InnerChild />
        </LearnContextProvider>
      );
    };

    export default Child;

    // Now the component (InnerChild) will have access to the state in the context provider
    import React from "react";
    import { useLearnContext } from "./learn-context-api";
    import { Button } from "@/components/ui/button";

    const InnerChild = () => {
      const { incValue, setIncValue } = useLearnContext();
      const handleClick = () => setIncValue(incValue + 1);
      return (
        <div className="flex items-center gap-4">
          <Button onClick={handleClick}>Click Me</Button>
          Count inside inner child -{" "}
          <span className="p-2 text-center border-b-2 border-blue-500 min-w-10">
            {incValue}
          </span>
        </div>
      );
    };

    export default InnerChild;

    // Now finally make sure to render component (Child) with the context provider 
    `,
    href: "#useEffect",
  },
  {
    id: "suspense",
    title: "Learn suspense",
    explanation: [],
    Component: <LearnSuspenseAPI />,
    CodeSnippet: `
    import React from "react";

    const LazyComponent = () => {
      return (
        <div>
          LazyComponent
          <p>Loaded and ready to use</p>
        </div>
      );
    };

    export default LazyComponent;

    import { Button } from "@/components/ui/button";
    import React from "react";
    const LazyComponent = React.lazy(
      () => import("@/components/root/react/learn-suspense-api/lazy-component")
    );

    const LearnSuspenseAPI = () => {
      const [show, setShow] = React.useState(false);
      const handleClick = () => setShow(!show);
      return (
        <div>
          <Button onClick={handleClick}>Click me</Button>
          {show && (
            <div>
              This is the hidden content 😟.
              <React.Suspense
                fallback={
                  <p className="text-red-500">Loading the slow component....</p>
                }
              >
                <LazyComponent />
              </React.Suspense>
            </div>
          )}
        </div>
      );
    };

    export default LearnSuspenseAPI;

    `,
    href: "#children-props",
  },
  {
    id: "children-props",
    title: "Learn children Props",
    explanation: [],
    Component: <LearnChildrenPropsDemo />,
    CodeSnippet: `
    import React from "react";

    const LearnChildrenPropsDemo = () => {
      return (
        <div>
          <Child>
            <p>This will render inside a child component.</p>
          </Child>
        </div>
      );
    };

    const Child = ({ children }: { children: React.ReactNode }) => {
      return (
        <div>
          <p className="font-semibold">This is child component</p>
          {children}
        </div>
      );
    };

    export default LearnChildrenPropsDemo;
    `,
    href: "#memo",
  },
  {
    id: "memo",
    title: "Learn memo",
    explanation: [],
    Component: <LearnMemoDemo />,
    CodeSnippet: `
    // Parent component
    import { Button } from "@/components/ui/button";
    import React from "react";
    import Child from "./child";
    const LearnMemoDemo = () => {
      const [value, setValue] = React.useState(0);
      return (
        <div className="space-y-4">
          <Button onClick={() => setValue(value + 1)}>Click me</Button>
          <div>
            <Child value={value} />
          </div>
        </div>
      );
    };
    export default LearnMemoDemo;

    //child component
    import React from "react";
    const dummyArray = Array.from({ length: 50 }, (_, index) => {
      return index;
    });
    const Child = (props: { value: number }) => {
      return (
        <div>
          <p>Value: {props?.value}</p>
          <div className="flex flex-wrap items-center gap-2">
            {dummyArray.map((item, index) => {
              return (
                <div key={index} className="p-1 bg-blue-100 border border-blue-500">
                  {item + 1}
                </div>
              );
            })}
          </div>
        </div>
      );
    };
    export default React.memo(Child);
    `,
    href: "#custom-hooks",
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
