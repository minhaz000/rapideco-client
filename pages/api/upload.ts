import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import path from "path";
import multer from "multer";
const apiRoute = createRouter<NextApiRequest, NextApiResponse>();
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(
      null,
      file.originalname.toLocaleLowerCase().split(" ").join("-").split(".")[0] +
        "-" +
        uniqueSuffix +
        path.extname(file.originalname)
    );
  },
});
const upload: any = multer({
  storage: storage,
  // limits: { fieldNameSize: 20 * 1000000 },
  fileFilter: (req, file, cb) => {
    const suportedformats = /png|jpeg|jpg|pjp|pjpeg|jfif|svg|webp|/;
    const extension = path.extname(file.originalname);

    suportedformats.test(extension)
      ? cb(null, true)
      : cb(new Error(" invalid file type "));
  },
});

apiRoute.use(upload.array("files"));
apiRoute.post((req: any, res: any) => {
  req.files.map((item: any) => {
    item.img_url = `${req.headers.host}/${item.path.split("public/")[1]}`;
  });

  res.status(201).json({ data: req.files });
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
