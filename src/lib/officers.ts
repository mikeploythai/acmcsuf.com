interface Officer {
  name: string;
  title: string;
  picture?: string;
  url?: string;
}

export const officers: Record<string, Officer[]> = {
  "2021-2022": [
    {
      name: "Aaron Lieberman ",
      title: "President",
    },
    {
      name: "Karnikka Velumani",
      title: "Vice President",
    },
    {
      name: "Ethan Davidson ",
      title: "Webmaster",
    },
    {
      name: "Tommy Le",
      title: "Treasurer",
    },
    {
      name: "Armanul Ambia ",
      title: "Algo Director",
    },
    {
      name: "Alex Truong",
      title: "Algo Officer",
    },
    {
      name: "Mike Ploythai ",
      title: "Create Director",
    },
    {
      name: "Samuel Valls ",
      title: "Create Officer",
    },
    {
      name: "Kayla Nguyen",
      title: "Create Officer",
    },
    {
      name: "Serena Naranjo",
      title: "Create Officer",
    },
    {
      name: "Wesley Chou ",
      title: "Dev Director",
    },
    {
      name: "Andy Lasso",
      title: "Dev Officer",
    },
  ],
  "2020-2021": [
    {
      name: "Jacob Nguyen",
      title: "President, Create Director",
      picture: "jacob-nguyen.png",
    },
    {
      name: "Aaron Lieberman",
      title: "Internal Vice President",
      picture: "aaron-lieberman.png",
    },
    {
      name: "Samuel Sandoval",
      title: "Vice President, Dev Director",
      picture: "samuel-sandoval.png",
    },
    {
      name: "Ethan Davidson",
      title: "Webmaster",
      picture: "ethan-davidson.png",
    },
    {
      name: "Andrew Lau",
      title: "Treasurer",
      picture: "andrew-lau.png",
    },
    {
      name: "Jason Anthony",
      title: "Secretary",
      picture: "jason-anthony.png",
    },
    {
      name: "Nicolas Renteria",
      title: "Marketing Chair",
      picture: "nicolas-renteria.png",
    },
    {
      name: "Joshua Hughes",
      title: "ICC Representative",
      picture: "joshua-hughes.png"
    },
    {
      name: "Samuel Valls",
      title: "Community Manager",
      picture: "samuel-valls.png",
    },
    {
      name: "Wilbert Rodriguez",
      title: "Intern Program Manager",
      picture: "wilbert-rodriguez.png",
    },
    {
      name: "Shaleen Mathur",
      title: "Co-Workshop Manager",
      picture: "shaleen-mathur.png",
    },
    {
      name: "Johnson Tong",
      title: "Co-Workshop Manager",
      picture: "johnson-tong.png",
    },
    {
      name: "Kavit Sanghavi",
      title: "Algo Director",
      picture: "kavit-sanghavi.png",
    },
    {
      name: "Kevin Dillon",
      title: "Algo Officer",
      picture: "kevin-dillon.png",
    },
    {
      name: "Parth Sharma",
      title: "Algo Officer",
      picture: "parth-sharma.png",
    },
    {
      name: "Wesley Chou",
      title: "Dev Officer",
      picture: "wesley-chou.png",
    },
    {
      name: "Armanul Ambia",
      title: "Dev Officer",
      picture: "armanul-ambia.png",
    },
     {
      name: "Mike Ploythai",
      title: "Create Officer",
      picture: "mike-ploythai.png",
    },
    {
      name: "Lisa Hong",
      title: "Create Officer",
      picture: "lisa-hong.png",
    },
    /* {
      name: "Taylor Noh",
      title: "NodeBuds Officer",
      picture: "taylor-noh.png",
    },
    {
      name: "Eugene Lee",
      title: "NodeBuds Officer",
      picture: "eugene-lee.png",
    }, */
  ],
};

export const allOfficers = Object.entries(officers).reduce(
  (result, [year, officers]) => [...result, ...officers],
  [] as Officer[]
);
