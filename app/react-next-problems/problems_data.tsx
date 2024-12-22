const PROBLEMS_ROUTE = `/react-next-problems`;

export const problems_data = [
  {
    title: "Delayed Input",
    statement: [
      `    
        Problem Statement: When user inputs text it should register it slow.
      `,
    ],
    url: `${PROBLEMS_ROUTE}/delayed-input`,
    githubURL: `${process.env.NEXT_PUBLIC_GITHUB_URL}/Practice_React_Next/blob/main/app/react-next-problems/delayed-input/page.tsx`,
  },
  {
    title: "Fetch Data Again, Again & Again...",
    statement: [
      `    
       Problem Statement: They provided an URL, we need to fetch the data from that URL every 
       one minute.`,
      `Conditions: Create a custom hook which will take the given URL as an input and 
       returns the output. Main component should use the custom hook to get the result 
       and display the output.
      `,
    ],
    url: `${PROBLEMS_ROUTE}/fetch-again`,
    githubURL: `${process.env.NEXT_PUBLIC_GITHUB_URL}/Practice_React_Next/blob/main/app/react-next-problems/fetch-again/page.tsx`,
  },
  {
    title: "Timer",
    statement: [
      `    
       Problem Statement: Problem statement: Create a timer. Add functionality to start, stop & reset the timer.
      `,
    ],
    url: `${PROBLEMS_ROUTE}/timer-problem`,
    githubURL: `${process.env.NEXT_PUBLIC_GITHUB_URL}/Practice_React_Next/blob/main/app/react-next-problems/timer-problem/page.tsx`,
  },
  {
    title: "Chess Board",
    statement: [
      `    
       Problem Statement: Create a chess board, then on hover of each cell highlight the path of the bishop.
      `,
    ],
    url: `${PROBLEMS_ROUTE}/chess-board`,
    // githubURL: `${process.env.NEXT_PUBLIC_GITHUB_URL}/Practice_React_Next/blob/main/app/react-next-problems/timer-problem/page.tsx`,
  },
  {
    title: "Reset clicks",
    statement: [
      `    
       Problem Statement: User clicks on the buttons and you have to reset the clicks.
      `,
    ],
    url: `${PROBLEMS_ROUTE}/reset-clicks`,
    // githubURL: `${process.env.NEXT_PUBLIC_GITHUB_URL}/Practice_React_Next/blob/main/app/react-next-problems/timer-problem/page.tsx`,
  },
];
