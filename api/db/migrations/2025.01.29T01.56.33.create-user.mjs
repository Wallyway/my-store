"use strict";

import { USER_TABLE, userSchema } from "../models/userModel.js";

export const up = async ({context: { sequelize} }) => {
  await sequelize.getQueryInterface().createTable(USER_TABLE, userSchema);
};

export const down = async ({context: { sequelize} }) => {
  await sequelize.getQueryInterface().dropTable(USER_TABLE);
};

