const PROBLEMS_ROUTE = `/react-next-problems`;

export const problems_data = [
  {
    title: "Delayed Child",
    statement: [
      `    
        Problem Statement: From parent component we need to enter a statement (ex. How are you?). 
        When you click on this button, we need to pass the entered
        statement to child component.
      `,
    ],
    url: `${PROBLEMS_ROUTE}/delayed-child`,
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
