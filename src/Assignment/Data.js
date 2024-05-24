let Data = [
  {
    checkDescription: "Is Complete",
    checkName: "isComplete",
    dataTypes: "*",
    numberOfColumns: 1,
    tooltip: "Check if a column is complete",
  },
  {
    checkDescription: "Are Complete",
    checkName: "areComplete",
    dataTypes: "*",
    numberOfColumns: -1,
    tooltip: "Check if a combined set of columns are complete",
  },
  {
    checkDescription: "Has Completeness",
    checkName: "hasCompleteness",
    dataTypes: "*",
    hint: "0.0 - 1.0",
    numberOfColumns: 1,
    operators: ["=", "<", ">", ">=", "<="],
    tooltip: "Check completeness of a column against a value",
    value: "number",
  },
  {
    checkDescription: "Have Completeness",
    checkName: "haveCompleteness",
    dataTypes: "*",
    hint: "0.0 - 1.0",
    numberOfColumns: -1,
    operators: ["=", "<", ">", ">=", "<="],
    tooltip: "Check completeness of a combined set of columns against a value",
    value: "number",
  },
  {
    checkDescription: "Is Unique",
    checkName: "isUnique",
    dataTypes: "*",
    numberOfColumns: 1,
    tooltip: "Check if a column can uniquely identify a row",
  },
  {
    checkDescription: "Have Uniqueness",
    checkName: "hasUniqueness",
    dataTypes: "*",
    hint: "0.0 - 1.0",
    numberOfColumns: -1,
    operators: ["=", "<", ">", ">=", "<="],
    tooltip: "Check if uniqueness a combined set of columns against a value",
    value: "number",
  },
  {
    checkDescription: "Is Contained In",
    checkName: "isContainedIn",
    dataTypes: "*",
    hint: "Comma separated values",
    numberOfColumns: 1,
    tooltip: "Check if values of a column are contained in a certain range",
    value: "text",
  },
  {
    checkDescription: "Has Min Length",
    checkName: "hasMinLength",
    dataTypes: "string",
    hint: "Positive integer",
    numberOfColumns: 1,
    operators: ["=", "<", ">", ">=", "<="],
    tooltip: "Check if a string column has a minimum given length",
    value: "number",
  },
  {
    checkDescription: "Has Max Length",
    checkName: "hasMaxLength",
    dataTypes: "string",
    hint: "Positive integer",
    numberOfColumns: 1,
    operators: ["=", "<", ">", ">=", "<="],
    tooltip: "Check if a string column has a maximum given length",
    value: "number",
  },
  {
    checkDescription: "Has Min",
    checkName: "hasMin",
    dataTypes: "integer,decimal",
    hint: "Any number",
    numberOfColumns: 1,
    operators: ["=", "<", ">", ">=", "<="],
    tooltip: "Check if a numeric column has a minimum given value",
    value: "number",
  },
  {
    checkDescription: "Has Max",
    checkName: "hasMax",
    dataTypes: "integer,decimal",
    hint: "Any number",
    numberOfColumns: 1,
    operators: ["=", "<", ">", ">=", "<="],
    tooltip: "Check if a numeric column has a maximum given value",
    value: "number",
  },
  {
    checkDescription: "Has Mean",
    checkName: "hasMean",
    dataTypes: "integer,decimal",
    hint: "Any number",
    numberOfColumns: 1,
    operators: ["=", "<", ">", ">=", "<="],
    tooltip: "Check if a numeric column has a given mean",
    value: "number",
  },
  {
    checkDescription: "Has Sum",
    checkName: "hasSum",
    dataTypes: "integer,decimal",
    hint: "Any number",
    numberOfColumns: 1,
    operators: ["=", "<", ">", ">=", "<="],
    tooltip: "Check if a numeric column has a given sum",
    value: "number",
  },
  {
    checkDescription: "Contains Credit Card Number",
    checkName: "containsCreditCardNumber",
    dataTypes: "*",
    numberOfColumns: 1,
    tooltip: "Check if a column contains credit card number",
  },
  {
    checkDescription: "Contains Email",
    checkName: "containsEmail",
    dataTypes: "*",
    numberOfColumns: 1,
    tooltip: "Check if a column contains email",
  },
  {
    checkDescription: "Contains URL",
    checkName: "containsURL",
    dataTypes: "*",
    numberOfColumns: 1,
    tooltip: "Check if a column contains URL",
  },
  {
    checkDescription: "Contains Social Security Number",
    checkName: "containsSocialSecurityNumber",
    dataTypes: "*",
    numberOfColumns: 1,
    tooltip: "Check if a column contains social security number",
  },
];


export default Data