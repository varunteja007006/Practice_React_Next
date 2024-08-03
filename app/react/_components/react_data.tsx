import LearnChildrenPropsDemo from "./learn-children-props/learn-children-demo";
import Child from "./learn-context/Child";
import LearnCustomHookDemo from "./learn-custom-hook/learn-custom-hook-demo";
import LearnMemoDemo from "./learn-memo/learn-memo-demo";
import LearnSuspenseAPI from "./learn-suspense-api/learn-suspense-api";
import LearnUseEffectDemo from "./learn-useEffect/learn-useEffect-demo";
import LearnUseReducerDemo from "./learn-useReducer/learn-useReducer-demo";
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
    explanation: [
      `useEffect hook is invoked on the initial page render, if dependency array is empty. If 
      dependency array is not empty, it will be invoked on every state change.`,
      `Also some effects require cleanup to reduce memory leaks such as
      Timeouts, subscriptions, event listeners, and other effects that are no longer needed should 
      be disposed.`,
      `We do this by including a return function at the end of the useEffect Hook, which basically 
      acts like onUnMount.`,
    ],
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
    explanation: [
      `useReducer is useState on steroids. It can help in handling states much better than
      useState`,
      `A must use for handling states because it can make life easier for a lot of cases.`,
    ],
    Component: <LearnUseReducerDemo />,
    CodeSnippet: `
    import { Button } from "@/components/ui/button";
    import React from "react";

    export default function LearnUseReducerDemo() {
      function handleClick(count: number, action: { type: string }) {
        switch (action.type) {
          case "increment":
            return count + 1;
          case "decrement":
            return count - 1;
          default:
            return count;
        }
      }

      function handleIncrement() {
        dispatch({ type: "increment" });
      }

      function handleDecrement() {
        dispatch({ type: "decrement" });
      }

      const [count, dispatch] = React.useReducer(handleClick, 0);

      return (
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <Button variant={"outline"} onClick={handleIncrement}>
            Increment
          </Button>
          <div> Count - {count} </div>
          <Button variant={"outline"} onClick={handleDecrement}>
            Decrement
          </Button>
        </div>
      );
    }
    `,
    href: "#useRef",
  },
  {
    id: "useRef",
    title: "Learn useRef",
    explanation: [
      `Use useRef to get access to the DOM element.`,
      `Can also be used to persist the value of a state between re-renders.`,
    ],
    Component: <LearnUseRefDemo />,
    CodeSnippet: `
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { toast } from "@/components/ui/use-toast";
    import React from "react";

    export default function LearnUseRefDemo() {
      const inputRef = React.useRef<HTMLInputElement>(null);

      function submit() {
        toast({
          title: "InputRef",
          description: \`The message has been updated by InputRef! \${inputRef.current?.value}\`,
          duration: 3000,
        });
        if (inputRef.current?.value) {
          inputRef.current.value = "";
        }
      }

      return (
        <div className="space-y-4">
          <p>Enter text below and click submit.</p>
          <Input
            ref={inputRef}
            name="IamAInputRef"
            placeholder="I am a InputRef and uncontrolled but being tracked by react ref hook"
            className="w-2/3"
          />
          <Button variant={"secondary"} onClick={submit}>
            Submit
          </Button>
        </div>
      );
    }
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
    explanation: [
      `Allows you to manage the loading state of components. It suspends rendering of a component 
      until some data required by the component is fetched. An alternative fallback UI is displayed 
      in meantime. Makes it easy to handle asynchronous data loading and provide smooth user 
      experience in React application.`,
    ],
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
    explanation: [
      `Children props is a special prop from React, when some content (text or other component)
      is enclosed between a component (Parent), then the parent has access to that content via children props.`,
    ],
    Component: <LearnChildrenPropsDemo />,
    CodeSnippet: `
    import React from "react";

    // Parent component
    const LearnChildrenPropsDemo = () => {
      return (
        <div>
        {/* Child component wraps around the text here */}
          <Child> 
            <p>This will render inside a child component.</p>
          </Child>
        </div>
      );
    };

    // Child component
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
    import ChildNoMemo from "./child-no-memo";
    import { Separator } from "@/components/ui/separator";

    const LearnMemoDemo = () => {
      const [value, setValue] = React.useState(0);
      const [valueParent, setValueParent] = React.useState(0);
      return (
        <div className="space-y-4">
          <div className="flex gap-3 items-center">
            <Button onClick={() => setValue(value + 1)}>update child value</Button>
            <Button onClick={() => setValueParent(valueParent + 1)}>
              update parent value
            </Button>
          </div>
          <div className="space-y-5">
            <div className="font-semibold text-lg">Parent Value: {valueParent}</div>
            <Child value={value} />
            <Separator />
            <ChildNoMemo value={value} />
          </div>
        </div>
      );
    };

    export default LearnMemoDemo;

    // ------------------------------------------------------------------------------
    //child component with memo

    import { Badge } from "@/components/ui/badge";
    import React from "react";

    const dummyArray = Array.from({ length: 50 }, (_, index) => {
      return index;
    });

    const Child = (props: { value: number }) => {
      const countRef = React.useRef(0);

      React.useEffect(() => {
        countRef.current += 1;
      });

      return (
        <div className="space-y-2">
          <p>Child Wrapped in Memo: {props?.value}</p>
          <div className="flex items-center gap-2">
            Re-rendered: {countRef.current} ( I should only be re-rendered when you
            click <Badge>update child value</Badge>)
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {dummyArray.map((item, index) => {
              return (
                <div
                  key={index}
                  className="inline-flex items-center justify-center p-1 dark:bg-blue-900 bg-blue-100 border border-blue-500 size-10"
                >
                  {item + 1}
                </div>
              );
            })}
          </div>
        </div>
      );
    };
    
    export default React.memo(Child);
    
    // ------------------------------------------------------------------------------
    // child component without memo

    import { Badge } from "@/components/ui/badge";
    import React from "react";

    const dummyArray = Array.from({ length: 50 }, (_, index) => {
      return index;
    });

    const ChildNoMemo = (props: { value: number }) => {
      const countRef = React.useRef(0);

      React.useEffect(() => {
        countRef.current += 1;
      });

      return (
        <div className="space-y-2">
          <p>Child Not wrapped in Memo: {props?.value}</p>
          <div className="flex items-center gap-2">
            Re-rendered: {countRef.current} ( I re-render when you click
            <Badge>update child value</Badge> or <Badge>update parent value</Badge>)
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {dummyArray.map((item, index) => {
              return (
                <div
                  key={index}
                  className="inline-flex items-center justify-center p-1 dark:bg-blue-900 bg-blue-100 border border-blue-500 size-10"
                >
                  {item + 1}
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    export default ChildNoMemo;

    `,
    href: "#custom-hooks",
  },
  {
    id: "custom-hooks",
    title: "Learn custom hooks",
    explanation: [
      `Custom Hooks are a great way to write re-usable code. It can be used for data-fetching
    or any other kind of logic that needs to be re-used multiple times.`,
      `Creating and using of custom hooks can be seen in the following example:`,
    ],
    Component: <LearnCustomHookDemo />,
    CodeSnippet: `
    // custom Hook
    import React from "react";

    export default function useToggleShow(defaultValue?: boolean) {
      const [show, setShow] = React.useState(defaultValue || false);

      const toggle = () => setShow(!show);

      return { show, toggle };
    }

    // ---------------------
    // Hook Consumer

    import { Button } from "@/components/ui/button";
    import React from "react";
    import useToggleShow from "./useToggleShow";
    import { Separator } from "@/components/ui/separator";

    export default function LearnCustomHookDemo() {
      const { show, toggle } = useToggleShow();
      const { show: showTwo, toggle: toggleTwo } = useToggleShow(true);

      return (
        <div className="space-y-4">
          <div className="flex flex-col gap-4">
            <p>This is a custom hook (no default value)</p>
            <Button onClick={toggle} className="w-fit">
              Click me
            </Button>
            {show && <div> You clicked the button to see me!!!!!!</div>}
          </div>
          <Separator />
          <div className="flex flex-col gap-4">
            <p>This is a custom hook (with default value as true)</p>
            <Button onClick={toggleTwo} className="w-fit">
              Click me
            </Button>
            {showTwo && <div> You can see me already !!!!</div>}
          </div>
        </div>
      );
    }
    `,
    href: "#useEffect",
  },
];
