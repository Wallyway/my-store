"use strict";

import { USER_TABLE, userSchema } from "../models/userModel.js";

export const up = async ({context: { sequelize} }) => {
  await sequelize.getQueryInterface().addColumn(USER_TABLE, 'role', userSchema.role);
};

export const down = async ({context: { sequelize} }) => {
  await sequelize.getQueryInterface().removeColumn(USER_TABLE, 'role');
};

