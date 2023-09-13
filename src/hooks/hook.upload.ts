import axios from "axios";

const Upload = async (fileList: any) => {
  const Result: any = [];
  // IMAGE UPLOAD LOGIC
  const formData = new FormData();
  for (var i = 0; i < fileList.length; i++) {
    formData.append("image", fileList[i]);
  }
  // console.log(formData);
  const res = await axios.post("/api/upload", formData);
  // IMAGE URL FORMATE
  res.data.data.map((item: any) => {
    const formate = { img_url: item.img_url, path: item.path };
    Result.push(formate);
  });
  return Result.length > 1 ? Result : Result[0];
};

export default Upload;
