import { knex as KnexConfig } from "knex";

import config from "../../knexfile";

const knex = KnexConfig(config)

export { knex }