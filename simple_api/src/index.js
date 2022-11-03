import { Router } from "express";
import { Brand } from "./models/brand.js";
import { Review } from "./models/review.js";
import { brands, Sneaker } from "./models/sneaker.js";
import { User } from "./models/user.js";
const router = Router();

router.post("/users/new", async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    throw new Error("Not enough data");
  }
  const user = await User.create({
    email,
    name,
    password,
  });

  res.status(201).json(user);
});

router.post("/sneakers/new", async (req, res) => {
  const { brand, size, price, image, name } = req.body;
  if (!brand || !size || !price || !image || !name) {
    throw new Error("Not enough data");
  }
  const sneaker = await Sneaker.create({
    brand,
    size,
    price,
    image,
    name,
  });

  res.status(201).json(sneaker);
});

router.post("/reviews/new", async (req, res) => {
  const { userId, text, rating } = req.body;
  if (!userId || !text || !rating) {
    throw new Error("Not enough data");
  }
  const review = await Review.create({
    userId,
    text,
    rating,
  });

  res.status(201).json(review);
});
router.get("/users/", async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});
router.get("/brands/", async (req, res) => {
  const brands = await Brand.findAll();
  res.status(200).json(brands);
});
router.get("/sneakers/", async (req, res) => {
  const sneakers = await Sneaker.findAll();
  res.status(200).json(sneakers);
});
// router.get("/users/:email", async (req, res) => {
//   const { email } = req.params;
//   const user = await User.findOne({
//     where: {
//       email,
//     },
//   });
//   if (!user) {
//     throw new Error(`User not found : ${email}`);
//   }
//   res.status(200).json(user);
// }); //если есть, то записывает в одноименную переменную
router.get("/sneakers/brands/:brand", async (req, res) => {
  const { brand } = req.params;
  if (!brands.includes(brand)) {
    throw new Error(`Brand ${brand} is not available on the website`);
  }

  const sneakers = await Sneaker.findAll({
    where: {
      brand: brand,
    },
  });

  res.status(200).json(sneakers);
});

export default router;
