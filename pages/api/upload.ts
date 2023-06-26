import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import multer from "multer";
const apiRoute = createRouter<NextApiRequest, NextApiResponse>();
const upload: any = multer({
  storage: multer.diskStorage({
    destination: "public/uploads",
    filename: (req: any, file: any, cb) => cb(null, file.originalname),
  }),
});

apiRoute.use(upload.array("files"));
apiRoute.post((req: any, res: any) => {
  res.status(200).json({ data: "Success" });
});
export default apiRoute.handler({
  onError: (err: any, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};
