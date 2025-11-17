import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import fs from "fs";
import path from "path";

const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      "get_special_operations_pricing",
      {
        title: "Get pricing for special operations.",
        description:
          "Returns the content of a static text file related to pricing for special operations.",
        inputSchema: z.object({}), // no input args
        outputSchema: z.object({
          content: z.string(),
        }),
      },
      async () => {
        // Adjust path if you prefer another folder (e.g. "public")
        const filePath = path.join(
          process.cwd(),
          "data",
          "danpilot-products-and-prices-jan-2025-special-operations.txt"
        );

        if (!fs.existsSync(filePath)) {
          throw new Error(`Text file not found at: ${filePath}`);
        }

        const text = fs.readFileSync(filePath, "utf8");
        const output = { content: text };

        return {
          // What the model / UI sees
          content: [{ type: "text", text }],
          // Structured payload if the client wants to parse it
          structuredContent: output,
        };
      }
    ),
      server.registerTool(
        "get_transit_pilotage_pricing",
        {
          title: "Get pricing for transit pilotage.",
          description:
            "Returns the content of a static text file related to pricing for transit pilotage.",
          inputSchema: z.object({}), // no input args
          outputSchema: z.object({
            content: z.string(),
          }),
        },
        async () => {
          // Adjust path if you prefer another folder (e.g. "public")
          const filePath = path.join(
            process.cwd(),
            "data",
            "danpilot-products-and-prices-jan-2025-transit-pilotage.txt"
          );

          if (!fs.existsSync(filePath)) {
            throw new Error(`Text file not found at: ${filePath}`);
          }

          const text = fs.readFileSync(filePath, "utf8");
          const output = { content: text };

          return {
            // What the model / UI sees
            content: [{ type: "text", text }],
            // Structured payload if the client wants to parse it
            structuredContent: output,
          };
        }
      ),
      server.registerTool(
        "get_port_pilotage_pricing",
        {
          title: "Get pricing for port pilotage.",
          description:
            "Returns the content of a static text file related to pricing for port pilotage.",
          inputSchema: z.object({}), // no input args
          outputSchema: z.object({
            content: z.string(),
          }),
        },
        async () => {
          // Adjust path if you prefer another folder (e.g. "public")
          const filePath = path.join(
            process.cwd(),
            "data",
            "danpilot-products-and-prices-june-2025-port-pilotage.txt"
          );

          if (!fs.existsSync(filePath)) {
            throw new Error(`Text file not found at: ${filePath}`);
          }

          const text = fs.readFileSync(filePath, "utf8");
          const output = { content: text };

          return {
            // What the model / UI sees
            content: [{ type: "text", text }],
            // Structured payload if the client wants to parse it
            structuredContent: output,
          };
        }
      );
  },
  {
    // optional serverOptions (capabilities, etc.)
  },
  {
    // handlerConfig: make sure basePath matches your route
    basePath: "/api", // for /api/mcp/[transport]
    // redisUrl, maxDuration, verboseLogs... if you need them
  }
);

// Next.js App Router exports
export { handler as GET, handler as POST, handler as DELETE };
