import { Router, Request, Response } from "express";
import Shoe from "../models/shoe";

const shoeRouter = Router();

shoeRouter.get("/api/shoes", async (req: Request, res: Response) => {
  try {
    const shoes = await Shoe.find();
    res.json(shoes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

shoeRouter.get("/api/shoe/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const shoe = await Shoe.findById(id);
    if (!shoe) {
      res.status(404).json({ message: "Shoe not found" });
      return;
    }
    res.json(shoe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

shoeRouter.post("/api/shoes", async (req: Request, res: Response) => {
  const { name, brand, price, imgURL, description } = req.body;

  try {
    const newShoe = await Shoe.create({
      name,
      brand,
      price,
      imgURL,
      description,
    });

    res.status(201).json(newShoe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default shoeRouter;
