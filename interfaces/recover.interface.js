export const RecoverInterface = {
  name: null,
  document: null,
  numberOne: null,
  numberTwo: null,
  line: null,
  observation: null,
  is_active: false,
  newGestor: false,
};

export const VModelRecoverInterface = [
  {
    property: "recoverItem",
    oneKey: "editedRecover",
    defaultValue: { ...RecoverInterface },
  },
  {
    property: "recoverItemName",
    oneKey: "editedRecover",
    twoKey: "name",
    defaultValue: RecoverInterface.name,
  },
  {
    property: "recoverItemDocument",
    oneKey: "editedRecover",
    twoKey: "document",
    defaultValue: RecoverInterface.document,
  },
  {
    property: "recoverItemNumberOne",
    oneKey: "editedRecover",
    twoKey: "numberOne",
    defaultValue: RecoverInterface.numberOne,
  },
  {
    property: "recoverItemNumberTwo",
    oneKey: "editedRecover",
    twoKey: "numberTwo",
    defaultValue: RecoverInterface.numberTwo,
  },
  {
    property: "recoverItemLine",
    oneKey: "editedRecover",
    twoKey: "line",
    defaultValue: RecoverInterface.line,
  },
  {
    property: "recoverItemObservation",
    oneKey: "editedRecover",
    twoKey: "observation",
    defaultValue: RecoverInterface.observation,
  },
  {
    property: "recoverItemIsActive",
    oneKey: "editedRecover",
    twoKey: "is_active",
    defaultValue: RecoverInterface.is_active,
  },
  {
    property: "recoverItemIsDate",
    oneKey: "editedRecover",
    twoKey: "date",
    defaultValue: RecoverInterface.date,
  },
  {
    property: "recoverItemGestor",
    oneKey: "editedRecover",
    twoKey: "gestor",
    defaultValue: RecoverInterface.gestor,
  },
  {
    property: "recoverItemNewGestor",
    oneKey: "editedRecover",
    twoKey: "newGestor",
    defaultValue: RecoverInterface.newGestor,
  },
  {
    property: "recoverItemReason",
    oneKey: "editedRecover",
    twoKey: "reason",
    defaultValue: RecoverInterface.reason,
  },
];
