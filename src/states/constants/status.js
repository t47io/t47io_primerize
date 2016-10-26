export const jobTypes = {
  "1": "Single Assembly",
  "2": "Mutate-and-Map",
  "3": "Mutation/Rescue"
};

export const jobStatus = {
  "0": "Demo",
  "1": "Running",
  "2": "Success",
  "3": "Fail",
  "4": "Error" 
};


export const design2DLibChoices = {
  "1": "A->U, U->A, C->G, G->C",
  "2": "A->C, U->C, C->A, G->A",
  "3": "A->G, U->G, C->U, G->U"
};

export const design3DLibChoices = {
  "1": "Swap (A:U->U:A, G:C->C:G)",
  "4": "Cross (A:U->C:G, G:C->U:A)",
  "5": "Stable (A:U->C:G, G:C->C:G)"
};

export const design3DNumMutChoices = {
  "1": "Single Mutation",
  "2": "Double Mutations",
  "3": "Triple Mutations"
};

