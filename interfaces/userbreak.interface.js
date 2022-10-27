export const UserBreakInterface = {
  user: null,
  state: null,
  datetimes: new Date().toISOString().split("T").join(" ").slice(0, -2),
};

export const VModelUserInterface = [
  {
    property: "userItem",
    oneKey: "editedUser",
    defaultValue: { ...UserInterface },
  },
  {
    property: "userItemFullName",
    oneKey: "editedUser",
    twoKey: "user",
    defaultValue: UserInterface.user,
  },
  {
    property: "userItemState",
    oneKey: "editedUser",
    twoKey: "state",
    defaultValue: UserInterface.state,
  },
  {
    property: "userItemDateTimes",
    oneKey: "editedUser",
    twoKey: "datetimes",
    defaultValue: UserInterface.datetimes,
  },
];
