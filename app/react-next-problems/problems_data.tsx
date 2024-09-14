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
  },
  {
    title: "Timer",
    statement: [
      `    
       Problem Statement: Problem statement: Create a timer. Add functionality to start, stop & reset the timer.
      `,
    ],
    url: `${PROBLEMS_ROUTE}/timer-problem`,
  },
];
