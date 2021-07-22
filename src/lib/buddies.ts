interface Officer {
    name: string;
    picture?: string;
    url?: string;
  }
  
  export const officers: Record<string, Officer[]> = {
    "2021-2022": [
        {
            name: "Sami Bajwa ",
        },
    ],
    "2020-2021": [
      {
        name: "Armanul Ambia",
        picture: "armanul-ambia.png",
      },
      {
        name: "Sami Bajwa",
      },
      {
        name: "Eduardo Gomez",
      },
      {
        name: "Eugene Lee",
        picture: "eugene-lee.png",
      },
      {
        name: "Aaron Lieberman",
        picture: "aaron-lieberman.png",
      },
      {
        name: "Ean McGilvery",
      },
      {
        name: "Dalisa Nguyen",
      },
      {
        name: "Jacob Nguyen",
        picture: "jacob-nguyen.png",
      },
      {
        name: "Taylor Noh",
        picture: "taylor-noh.png",
      },
      {
        name: "Nicolas Renteria",
        picture: "nicolas-renteria.png",
      },
    ],
  };
  
  export const allOfficers = Object.entries(officers).reduce(
    (result, [year, officers]) => [...result, ...officers],
    [] as Officer[]
  );
  