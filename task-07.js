"use strict";
import users from "./users.js";

const calculateTotalBalance = users =>
  users.reduce((totalBalance, users) => totalBalance + users.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
