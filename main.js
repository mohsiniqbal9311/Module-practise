import tLogin from "./teacher.js";
import sLogin from "./student.js";
let teacher = new tLogin;
console.log(chalk.yellow(teacher.data));
let student = new sLogin;
console.log(chalk.green(student.data));
import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "Enter your meassage:"
    }]);
console.log(chalk.blue("Inshallah, in " + (60 - answers.age) + chalk.red(" years you will be in 60 years old.")));
