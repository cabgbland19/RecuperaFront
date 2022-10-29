export const UserInterface = {
  document: null,
  // username: null,
  // password: null,
  id_rol: null,
  is_active: false,
  // cost_center: null,
  is_superuser: true,
};

export const VModelUserInterface = [
  {
    property: "userItem",
    oneKey: "editedUser",
    defaultValue: { ...UserInterface },
  },
  {
    property: "userItemDocument",
    oneKey: "editedUser",
    twoKey: "document",
    defaultValue: UserInterface.document,
  },
  {
    property: "userItemUsername",
    oneKey: "editedUser",
    twoKey: "username",
    defaultValue: UserInterface.username,
  },
  {
    property: "userItemPassword",
    oneKey: "editedUser",
    twoKey: "password",
    defaultValue: UserInterface.password,
  },
  {
    property: "userItemRol",
    oneKey: "editedUser",
    twoKey: "id_rol",
    defaultValue: UserInterface.id_rol,
  },
  {
    property: "userItemIsActive",
    oneKey: "editedUser",
    twoKey: "is_active",
    defaultValue: UserInterface.is_active,
  },
  {
    property: "userItemCostCenter",
    oneKey: "editedUser",
    twoKey: "cost_center",
    defaultValue: UserInterface.cost_center,
  },
  {
    property: "userItemIsSuperuser",
    oneKey: "editedUser",
    twoKey: "is_superuser",
    defaultValue: UserInterface.is_superuser,
  },
];
