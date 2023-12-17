import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import path from "path";
import fs from "fs";
import html_to_pdf from "html-pdf-node";
const apiRoute = createRouter<NextApiRequest, NextApiResponse>();

apiRoute.get((req: any, res: any) => {
  let options = { format: "A4" };

  // main api function
  let file = { url: "https://example.com", name: "example.pdf" };
  html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
    console.log("PDF Buffer:-", pdfBuffer);
    res.send(pdfBuffer);
  });
});
export default apiRoute.handler({
  onError: (err: any, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
