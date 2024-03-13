import { faqs } from "@/data/faqs";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(200).json(faqs);
  }

  res.status(400).json({ message: "Metodo no permitido" });
}
