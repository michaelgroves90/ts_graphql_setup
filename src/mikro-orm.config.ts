import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { __prod__ } from "./constants";
import { Post } from "./entities/post";

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "plebbitdb",
  type: 'postgresql',
  password: 'password',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];