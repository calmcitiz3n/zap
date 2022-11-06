import { User } from "./models/user.js";
import { Review } from "./models/review.js";
import { Sneaker } from "./models/sneaker.js";
import * as uuid from "uuid";
import { Brand } from "./models/brand.js";

const Johny = {
  id: uuid.v4(),
  name: "Johny",
  email: "test@go.com",
  password: "securedpass",
};
const Bill = {
  id: uuid.v4(),
  name: "Bill",
  email: "krimnash@go.com",
  password: "dasdkhjwh31hdaj",
};
const Sandra = {
  id: uuid.v4(),
  name: "Sandra",
  email: "sandrasucks@go.com",
  password: "dajsd1y2936wjfha",
};
const Pavel = {
  id: uuid.v4(),
  name: "Pavel",
  email: "Pashadog@go.com",
  password: "safsafsad",
};
const Steve = {
  id: uuid.v4(),
  name: "Steve",
  email: "steveyouretard@go.com",
  password: "SteveSteveSteve",
};

export async function seed() {
  await User.bulkCreate([Bill, Johny, Sandra, Pavel, Steve]);

  await Review.bulkCreate([
    {
      id: uuid.v4(),
      userId: Bill.id,
      text: "Not bad",
      rating: 5,
    },
    {
      id: uuid.v4(),
      userId: Bill.id,
      text: "Comfortable",
      rating: 3,
    },
    {
      id: uuid.v4(),
      userId: Johny.id,
      text: "Best magazine, best shoe",
      rating: 5,
    },
    {
      id: uuid.v4(),
      userId: Sandra.id,
      text: "Well",
      rating: 4,
    },
    {
      id: uuid.v4(),
      userId: Sandra.id,
      text: "I happy",
      rating: 5,
    },
    {
      id: uuid.v4(),
      userId: Bill.id,
      text: "Best bakery",
      rating: 5,
    },
    {
      id: uuid.v4(),
      userId: Johny.id,
      text: "Finally! This sneakers is amazing",
      rating: 5,
    },
    {
      id: uuid.v4(),
      userId: Sandra.id,
      text: "Shoes here is extremely delicious",
      rating: 5,
    },
  ]);
  await Brand.bulkCreate([
    {
      id: uuid.v4(),
      name: "adidas",
      assortment: [
        "d75f762a-eadd-49be-8918-ed0daa8dd024",
        "d30051-c421-000b-84b6-8b81d2930358",
        "bd129641-c0eb-432b-84b6-8b81d2930358",
      ],
    },
    {
      id: uuid.v4(),
      name: "nike",
      assortment: [
        "25402233-0095-49ea-9939-1e67ed89ffb9",
        "90902233-0095-49ea-9939-1e67ed89ffb9",
      ],
    },
    {
      id: uuid.v4(),
      name: "saucony",
      assortment: [
        "6c02c2ce-b868-4191-b4a7-8686429f4bac",
        "99bb6fbb-e53b-4b7e-b9c2-23b63b77385d",
      ],
    },
    {
      id: uuid.v4(),
      name: "reebok",
      assortment: [
        "08c9ffa0-d003-4310-9e15-20978743296e",
        "4bc8528e-26d1-46c3-a522-8e18d10c8c84",
      ],
    },
  ]);

  //add reviewIds om sneakers
  await Sneaker.bulkCreate([
    {
      id: "d75f762a-eadd-49be-8918-ed0daa8dd024",
      name: "Superturf Adventure",
      price: 16490,
      sizes: [40.5, 41, 42, 44.5, 45.5],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/h/hr1464-0_1104x1104.jpg",
    },
    {
      id: "d30051-c421-000b-84b6-8b81d2930358",
      name: "Handball Spezial",
      price: 10490,
      sizes: [43.5, 46],
      brand: "adidas",
      image:
        "https://img.brandshop.ru/cache/products/k/krossovki-adidas-originals-handball-spezial-core-black-white-gum-04-1_1104x1104.jpg",
    },
    {
      id: "bd129641-c0eb-432b-84b6-8b81d2930358",
      name: "Superstar",
      price: 9990,
      sizes: [44],
      brand: "adidas",
      image:
        "https://img.brandshop.ru/cache/products/k/krossovki-adidas-originals-superstar-core-black-core-black-0_1104x1104.jpg",
    },
    {
      id: "25402233-0095-49ea-9939-1e67ed89ffb9",
      name: "Free Run Trail",
      price: 12490,
      sizes: [41, 42, 43],
      brand: "nike",
      image:
        "https://img.brandshop.ru/cache/products/c/cw5814-002-0_1104x1104.jpg",
    },
    {
      id: "90902233-0095-49ea-9939-1e67ed89ffb9",
      name: "Blazer Court DVDL",
      price: 8990,
      sizes: [40, 41, 43.5, 44],
      brand: "nike",
      image:
        "https://img.brandshop.ru/cache/products/c/cz5605-300-0_1104x1104.jpg",
    },
    {
      id: "08c9ffa0-d003-4310-9e15-20978743296e",
      name: "Workout Plus",
      price: 8500,
      sizes: [39],
      brand: "reebok",
      image:
        "https://img.brandshop.ru/cache/products/k/krossovki-reebok-workout-plus-black-charcoal-0_1104x1104.jpg",
    },
    {
      id: "64a4967c-2080-4a99-9074-4655a4569a95",
      name: "Club C 85",
      price: 9000,
      sizes: [38, 40],
      brand: "reebok",
      image: "https://img.brandshop.ru/cache/products/a/ar0456-0_1104x1104.jpg",
    },
    {
      id: "4bc8528e-26d1-46c3-a522-8e18d10c8c84",
      name: "Question Mid",
      price: 17490,
      sizes: [37],
      brand: "reebok",
      image: "https://img.brandshop.ru/cache/products/g/gx0241-0_1104x1104.jpg",
    },
    {
      id: "6c02c2ce-b868-4191-b4a7-8686429f4bac",
      name: "Shadow 6000",
      price: 16700,
      sizes: [44],
      brand: "saucony",
      image:
        "https://img.brandshop.ru/cache/products/s/s70441-6-0_1104x1104.jpg",
    },
    {
      id: "99bb6fbb-e53b-4b7e-b9c2-23b63b77385d",
      name: "Jazz Original",
      price: 12190,
      sizes: [42, 43],
      brand: "saucony",
      image:
        "https://img.brandshop.ru/cache/products/s/s2044-636-0_1104x1104.jpg",
    },
    {
      id: "99154trf-f4ty-7rfh-22q3-12r8fju7zd6e",
      name: "Gazelle ADV Suciu ",
      price: 10990,
      sizes: [42, 45],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/g/gy3688-0_1104x1104.jpg",
    },
    {
      id: "5412fs-dery-v42d-2r5y-7udjfurn3u4",
      name: "Prophere",
      price: 8290,
      sizes: [42, 43, 44, 45],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/f/fy3366-0_1104x1104.jpg",
    },
    {
      id: "j5rt7c-5t4x-7yc3-3rrt-0r84utyv6d3",
      name: "Space Hippie 04",
      price: 8290,
      sizes: [41.5, 42, 43, 44, 45],
      brand: "nike",
      image:
        "https://img.brandshop.ru/cache/products/c/cz6398-002-1_1104x1104.jpg",
    },
    {
      id: "g6r4dc-9t4c-g64e-l4r3-8gu3kdjvyr4",
      name: "Air Max 270 ",
      price: 8290,
      sizes: [42],
      brand: "nike",
      image:
        "https://img.brandshop.ru/cache/products/m/muzhskie-krossovki-nike-air-max-270-black-white-0_1104x1104.jpg",
    },
    {
      id: "ef4g1fbt4-1f4g-4gddag46d3",
      name: "Classic Leather",
      price: 9930,
      sizes: [43, 45],
      brand: "reebok",
      image: "https://img.brandshop.ru/cache/products/g/gy3558-0_1104x1104.jpg",
    },
  ]);
}
