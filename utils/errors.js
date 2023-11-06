import chalk from "chalk";

export const typeerr = (type, typ) => {
  throw chalk.blue.bold(`type must be ${type} got ${typ}`);
};

export const defaulterr = () => {
  throw chalk.yellow("type not found");
};
