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
        "99154trf-f4ty-7rfh-22q3-12r8fju7zd6e",
        "5412fs-dery-v42d-2r5y-7udjfurn3u4",
        "80b9f3e5-66de-4bf2-9b61-62dae4096210",
        "e40ef138-a56c-4bfb-8160-901f51c836c6",
        "3837bc32-c1f9-4354-8321-593cd214c1f2",
        "19297765-fd77-4074-9306-c87c6e3ead33",
        "ff1e9259-c9b4-46ef-a6ca-5b7cc182d333",
        "b85610b4-29ee-4a2e-b06b-4c00a58a9e02",
        "a8cbf31a-170f-4cd4-aabd-3c26f00871cb",
        "fbd1018d-468d-4756-aba0-af0ca36b1f8f",
        "b031f23d-ec0e-48c2-bc98-8ff4129f33cc",
        "b74cd16e-a731-4e9b-95de-b341083c712a",
        "5c9d51b4-0fcd-46fd-9435-fb19b8a57429",
        "ab920a45-ce1a-4c64-b595-43fea5ffb003",
        "9ea02bd6-c4c1-40b3-be68-3fd97fe95050",
      ],
    },
    {
      id: uuid.v4(),
      name: "nike",
      assortment: [
        "25402233-0095-49ea-9939-1e67ed89ffb9",
        "90902233-0095-49ea-9939-1e67ed89ffb9",
        "j5rt7c-5t4x-7yc3-3rrt-0r84utyv6d3",
        "g6r4dc-9t4c-g64e-l4r3-8gu3kdjvyr4",
        "3f3d0bc0-7cc6-4710-9d01-bf3575c64b4c",
        "82c76ef1-8b0e-4c3b-8f58-2bccc0866b09",
      ],
    },
    {
      id: uuid.v4(),
      name: "saucony",
      assortment: [
        "6c02c2ce-b868-4191-b4a7-8686429f4bac",
        "99bb6fbb-e53b-4b7e-b9c2-23b63b77385d",
        "89f3e4ac-4747-4cb6-94a2-9eb07db84530",
        "6a27e96b-272c-4bed-a0e6-53830cfb66bf",
        "dffa017a-fe68-4d8e-a4c8-35d407da892c",
        "29f93b55-34d5-49c1-af53-db7e5f9432ed",
        "2565122c-2df7-467b-9035-95c3cf777773",
        "9b5b06ea-428c-42e2-88a2-fbd248ade0fc",
        "e20b3961-a868-44fa-8ff2-f7f20402b603",
        "425ecaeb-4036-4cbf-a062-732add9eb290",
      ],
    },
    {
      id: uuid.v4(),
      name: "reebok",
      assortment: [
        "08c9ffa0-d003-4310-9e15-20978743296e",
        "4bc8528e-26d1-46c3-a522-8e18d10c8c84",
        "64a4967c-2080-4a99-9074-4655a4569a95",
        "ef4g1fbt4-1f4g-4gddag46d3",
        "89cbc1d1-998b-49b9-b518-28647ea618c7",
        "51e01f7a-35fd-4333-9561-b60bdcee4fd3",
        "3216a6e3-8306-4b83-8bd7-9c046a71b582",
        "4ae28577-06cd-423e-9ad3-4d0a573ece9a",
        "ed09fa03-b949-4848-9395-36b93f3c565b",
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
    //add id's
    {
      id: "89f3e4ac-4747-4cb6-94a2-9eb07db84530",
      name: "Jazz Original 81 40th Anniversary ",
      price: 13990,
      sizes: [39, 42, 43, 45],
      brand: "saucony",
      image:
        "https://img.brandshop.ru/cache/products/s/s70613-15-0_1104x1104.jpg",
    },
    {
      id: "3f3d0bc0-7cc6-4710-9d01-bf3575c64b4c",
      name: "Phantom GT Academy Dynamic Fit TF ",
      price: 9930,
      sizes: [43, 45],
      brand: "nike",
      image:
        "https://img.brandshop.ru/cache/products/c/cw6666-090-0_1104x1104.jpg",
    },
    {
      id: "82c76ef1-8b0e-4c3b-8f58-2bccc0866b09",
      name: "Zoom Verona Slip",
      price: 7210,
      sizes: [39.5, 40, 41, 43, 45],
      brand: "nike",
      image:
        "https://img.brandshop.ru/cache/products/c/cz2373-001-0_1104x1104.jpg",
    },
    {
      id: "80b9f3e5-66de-4bf2-9b61-62dae4096210",
      name: "Busenitz Pro San Francisco ",
      price: 10090,
      sizes: [40, 41, 42, 43, 45],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/g/gw3111-1_1104x1104.jpg",
    },
    {
      id: "6a27e96b-272c-4bed-a0e6-53830cfb66bf",
      name: "Shadow 6000 Changing Tides",
      price: 10090,
      sizes: [40.5, 41.5, 42, 42.5, 43, 43.5, 45],
      brand: "saucony",
      image:
        "https://img.brandshop.ru/cache/products/s/s70644-7-0_1104x1104.jpg",
    },
    {
      id: "dffa017a-fe68-4d8e-a4c8-35d407da892c",
      name: "Jazz 81 NM",
      price: 9380,
      sizes: [40.5, 41.5, 42, 42.5, 43, 43.5, 45],
      brand: "saucony",
      image:
        "https://img.brandshop.ru/cache/products/s/s60613-25-0_1104x1104.jpg",
    },
    {
      id: "29f93b55-34d5-49c1-af53-db7e5f9432ed",
      name: "Shadow 6000",
      price: 18380,
      sizes: [39],
      brand: "saucony",
      image:
        "https://img.brandshop.ru/cache/products/s/s70639-1-2_1104x1104.jpg",
    },
    {
      id: "2565122c-2df7-467b-9035-95c3cf777773",
      name: "Shadow 6000 Destination Spring",
      price: 21380,
      sizes: [39],
      brand: "saucony",
      image:
        "https://img.brandshop.ru/cache/products/s/s70674-3-0_1104x1104.jpg",
    },
    {
      id: "9b5b06ea-428c-42e2-88a2-fbd248ade0fc",
      name: "Jazz Original 81 40th Anniversary",
      price: 10180,
      sizes: [39, 40, 41, 42],
      brand: "saucony",
      image:
        "https://img.brandshop.ru/cache/products/s/s70539-2-0_1104x1104.jpg",
    },
    {
      id: "e20b3961-a868-44fa-8ff2-f7f20402b603",
      name: "Shadow Original",
      price: 14290,
      sizes: [39, 40, 41, 42],
      brand: "saucony",
      image:
        "https://img.brandshop.ru/cache/products/k/krossovki-muzhskie-saucony-shadow-original-grey-navy-0_1104x1104.jpg",
    },
    {
      id: "425ecaeb-4036-4cbf-a062-732add9eb290",
      name: "Shadow 5000",
      price: 15290,
      sizes: [39],
      brand: "saucony",
      image:
        "https://img.brandshop.ru/cache/products/s/s70404-31-0_1104x1104.jpg",
    },
    {
      id: "e40ef138-a56c-4bfb-8160-901f51c836c6",
      name: " Bad Bunny Forum Powerphase Catch and Throw ",
      price: 16790,
      sizes: [39, 40],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/g/gz2009-1_1104x1104.jpg",
    },
    {
      id: "3837bc32-c1f9-4354-8321-593cd214c1f2",
      name: "M&M's Forum 84 Low",
      price: 14290,
      sizes: [36, 36.5, 40],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/g/gy6317-1_1104x1104.jpg",
    },
    {
      id: "19297765-fd77-4074-9306-c87c6e3ead33",
      name: "Forum Low",
      price: 14290,
      sizes: [36, 36.5, 40],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/g/gw6130-0_1104x1104.jpg",
    },
    {
      id: "ff1e9259-c9b4-46ef-a6ca-5b7cc182d333",
      name: "Ozelia",
      price: 8790,
      sizes: [36, 39, 39.5],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/g/g54894-0_1104x1104.jpg",
    },
    {
      id: "b85610b4-29ee-4a2e-b06b-4c00a58a9e02",
      name: "ZX 700 Winter CP",
      price: 10190,
      sizes: [36, 37, 39, 39.5, 40],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/g/gx6155-0_1104x1104.jpg",
    },
    {
      id: "a8cbf31a-170f-4cd4-aabd-3c26f00871cb",
      name: "Handball Spezial",
      price: 10990,
      sizes: [36, 37, 39, 39.5, 40, 41.5, 42],
      brand: "adidas",
      image:
        "https://img.brandshop.ru/cache/products/k/krossovki-adidas-originals-handball-spezial-collegiate-navy-clear-sky-gum-02-1_1104x1104.jpg",
    },
    {
      id: "fbd1018d-468d-4756-aba0-af0ca36b1f8f",
      name: "Streetball II",
      price: 10990,
      sizes: [36, 37, 39, 40, 40.5],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/g/gx0790-0_1104x1104.jpg",
    },
    {
      id: "b031f23d-ec0e-48c2-bc98-8ff4129f33cc",
      name: "Ozweego",
      price: 12690,
      sizes: [40, 40.5, 41, 41.5],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/g/gy9021-0_1104x1104.jpg",
    },
    {
      id: "b74cd16e-a731-4e9b-95de-b341083c712a",
      name: "M&M's Forum 84 Low",
      price: 14690,
      sizes: [40, 41, 41.5],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/g/gy6314-1_1104x1104.jpg",
    },
    {
      id: "5c9d51b4-0fcd-46fd-9435-fb19b8a57429",
      name: "Ozrah",
      price: 12990,
      sizes: [40, 41, 41.5, 42],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/h/h04208-0_1104x1104.jpg",
    },
    {
      id: "ab920a45-ce1a-4c64-b595-43fea5ffb003",
      name: "EQT Bask ADV",
      price: 15190,
      sizes: [41.5, 42.5],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/f/fz0043-0_1104x1104.jpg",
    },
    {
      id: "9ea02bd6-c4c1-40b3-be68-3fd97fe95050",
      name: "Lone Star",
      price: 10890,
      sizes: [41.5, 42, 43],
      brand: "adidas",
      image: "https://img.brandshop.ru/cache/products/g/gw5762-0_1104x1104.jpg",
    },
    {
      id: "89cbc1d1-998b-49b9-b518-28647ea618c7",
      name: "Club C 85",
      price: 10890,
      sizes: [43],
      brand: "reebok",
      image:
        "https://img.brandshop.ru/cache/products/m/muzhskie-krossovki-reebok-club-c-85-black-charcoal-01-10_1104x1104.jpg",
    },
    {
      id: "51e01f7a-35fd-4333-9561-b60bdcee4fd3",
      name: "Zig Kinetica II Edge",
      price: 12290,
      sizes: [37, 38, 39, 40, 41, 42, 43, 44, 45],
      brand: "reebok",
      image: "https://img.brandshop.ru/cache/products/g/gx0511-0_1104x1104.jpg",
    },
    {
      id: "3216a6e3-8306-4b83-8bd7-9c046a71b582",
      name: "Power Rangers Heritance",
      price: 7490,
      sizes: [37, 38, 39, 40, 43, 44, 45],
      brand: "reebok",
      image: "https://img.brandshop.ru/cache/products/g/gz0917-1_1104x1104.jpg",
    },
    {
      id: "6362b77a-e2ce-4398-ba45-23e48f54e87e",
      name: "Power Rangers Answer IV",
      price: 13390,
      sizes: [37, 38, 39, 40, 43, 44, 45],
      brand: "reebok",
      image: "https://img.brandshop.ru/cache/products/g/gz6897-1_1104x1104.jpg",
    },
    {
      id: "4ae28577-06cd-423e-9ad3-4d0a573ece9a",
      name: "Classic Leather Legacy AZ Grow",
      price: 9990,
      sizes: [37, 38, 39],
      brand: "reebok",
      image: "https://img.brandshop.ru/cache/products/g/gx5314-0_1104x1104.jpg",
    },
    {
      id: "ed09fa03-b949-4848-9395-36b93f3c565b",
      name: "Free Run Trail",
      price: 7790,
      sizes: [37, 38, 39, 40, 43, 44, 45],
      brand: "reebok",
      image:
        "https://img.brandshop.ru/cache/products/c/cw5814-001-0_1104x1104.jpg",
    },
  ]);
}
