export interface AcmPath {
  title: string;
  slug: string;
  picture: string;
  color: string;
}

export const acmAlgo: AcmPath = {
  title: "Algo",
  slug: "acmalgo",
  picture: "./assets/new_assets/badges/shadows/algo-shadow.svg",
  color: "var(--acm-purple)",
};

export const acmCreate: AcmPath = {
  title:"Create",
  slug:"acmcreate",
  picture: "./assets/new_assets/badges/shadows/create-shadow.svg",
  color: "var(--acm-pink)"
};

export const acmDev: AcmPath = {
  title: "Dev",
  slug: "acmdev",
  picture: "./assets/new_assets/badges/shadows/dev-shadow.svg",
  color: "var(--acm-bluer)"
};


export const acmPaths = [
  acmAlgo, acmCreate, acmDev
] as const;