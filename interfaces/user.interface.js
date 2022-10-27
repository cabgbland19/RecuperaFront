export const UserInterface = {
  name: null,
  last_name: null,
  email: null,
  // username: null,
  password: null,
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
    property: "userItemName",
    oneKey: "editedUser",
    twoKey: "name",
    defaultValue: UserInterface.name,
  },
  {
    property: "userItemLastName",
    oneKey: "editedUser",
    twoKey: "last_name",
    defaultValue: UserInterface.last_name,
  },
  {
    property: "userItemEmail",
    oneKey: "editedUser",
    twoKey: "email",
    defaultValue: UserInterface.email,
  },
  // {
  //   property: "userItemUsername",
  //   oneKey: "editedUser",
  //   twoKey: "username",
  //   defaultValue: UserInterface.username,
  // },
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
  // {
  //   property: "userItemCostCenter",
  //   oneKey: "editedUser",
  //   twoKey: "cost_center",
  //   defaultValue: UserInterface.cost_center,
  // },
  {
    property: "userItemIsSuperuser",
    oneKey: "editedUser",
    twoKey: "is_superuser",
    defaultValue: UserInterface.is_superuser,
  },
];
