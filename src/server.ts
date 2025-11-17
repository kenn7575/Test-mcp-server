// server.ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import * as fs from "fs";
import * as path from "path";

const server = new McpServer({
  name: "pdf-mcp-server",
  version: "0.1.0",
});

type PdfInfo = {
  id: string;
  title: string;
  filename: string;
};

const PDFS: PdfInfo[] = [
  {
    id: "transit",
    title: "Pricing for transit",
    filename: "danpilot-products-and-prices-jan-2025-transit-pilotage.pdf",
  },
  {
    id: "port",
    title: "Pricing for port",
    filename: "danpilot-products-and-prices-june-2025-port-pilotage.pdf",
  },
  {
    id: "special_operations",
    title: "Pricing for special operations",
    filename: "danpilot-products-and-prices-jan-2025-special-operations.pdf",
  },
];

function getPdfFullPath(pdfId: string): string | null {
  const pdf = PDFS.find((p) => p.id === pdfId);
  if (!pdf) return null;
  // Adjust if your static path is different
  return path.join(process.cwd(), "static", "pdfs", pdf.filename);
}

server.registerTool(
  "list_pricing_pdfs",
  {
    title: "List pricing information PDFs",
    description:
      "List the available static PDF documents for the different types of pricing models.",
    inputSchema: z.object({}), // no args
    outputSchema: z.object({
      pdfs: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
        })
      ),
    }),
  },
  async () => {
    const output = {
      pdfs: PDFS.map((p) => ({ id: p.id, title: p.title })),
    };

    return {
      // Text that shows up to the model / UI
      content: [
        {
          type: "text",
          text: JSON.stringify(output),
        },
      ],
      // Structured form for tools / callers
      structuredContent: output,
    };
  }
);

server.registerTool(
  "get_pdf",
  {
    title: "Get PDF",
    description:
      "Get a static PDF by its id. Use list_pdfs first to see available ids.",
    inputSchema: z.object({
      id: z.string().describe("The id of the PDF document."),
    }),
    outputSchema: z.object({
      id: z.string(),
      title: z.string(),
      filename: z.string(),
      base64Content: z.string().describe("Base64-encoded PDF content."),
    }),
  },
  async ({ id }) => {
    const pdf = PDFS.find((p) => p.id === id);
    if (!pdf) {
      throw new Error(`PDF with id '${id}' not found.`);
    }

    const fullPath = getPdfFullPath(pdf.id);
    if (!fullPath || !fs.existsSync(fullPath)) {
      throw new Error(
        `File for PDF '${pdf.id}' not found at ${fullPath ?? "undefined"}`
      );
    }

    const buffer = fs.readFileSync(fullPath);
    const base64Content = buffer.toString("base64");

    const output = {
      id: pdf.id,
      title: pdf.title,
      filename: pdf.filename,
      base64Content,
    };

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(output),
        },
      ],
      structuredContent: output,
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("Server error:", err);
  process.exit(1);
});
