import fastifyPlugin from "fastify-plugin";
import { v1 } from "./v1";

export const router = fastifyPlugin(
  (server, _, done) => {
    server.register(v1);

    server.get("/", (_, res) => {
      res.sendFile("index.html");
    });

    server.log.info("Route registration complete");
    done();
  },
  { name: "routes" }
);
