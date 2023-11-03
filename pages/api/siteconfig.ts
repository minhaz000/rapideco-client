import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import path from "path";
import fs from "fs";
const apiRoute = createRouter<NextApiRequest, NextApiResponse>();

apiRoute.post((req: any, res: any) => {
  // main api function

  fs.writeFile(path.join(process.cwd + "../../public/assets/site.settings.json"), JSON.stringify(req.body), (err) => {
    if (err) throw err;
    console.log("The file has been saved!", "cases");
  });

  res.status(201).json({ message: "file saved sucessfully" });
});
export default apiRoute.handler({
  onError: (err: any, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
