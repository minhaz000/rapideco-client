import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import fs from "fs";
const apiRoute = createRouter<NextApiRequest, NextApiResponse>();

apiRoute.post((req: any, res: any) => {
  const path: [{ path: string; img_url: string }] = req.body;
  for (let i = 0; i < path.length; i++) {
    fs.unlink(path[i].path, () => {
      console.log("file deleted");
    });
  }
  res.status(201).json({ data: "deleted file " });
});
export default apiRoute.handler({
  onError: (err: any, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
