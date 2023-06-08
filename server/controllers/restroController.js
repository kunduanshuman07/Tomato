import { Restro } from "../models/Restro.js";

export const addRestro = async (req, res) => {
  const newRestro = new Restro(req.body);
  try {
    const restro = await newRestro.save();
    res.status(200).send(restro);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const allRestros = async (req, res) => {
  try {
    const restros = await Restro.find();
    res.status(200).send(restros);
  } catch (error) {
    console.log(error);
  }
};
export const addItems = async (req, res) => {
  const restroId = req.params.restroid;
  const restro = await Restro.findById(restroId);
  console.log(restro.food.length);
  restro.food.push({
    restroId: restroId,
    foodid:restro.food.length+1,
    name: "Veg Biriyani",
    price: 180.0,
    cuisine: "Indian",
    imageurls: [],
  });
  await restro.save();
};

export const getallFood = async (req, res) => {
  try {
    const restros = await Restro.find();
    let foods = [];
    restros.map((item) => {
      item.food.map((food) => {
        foods.push(food);
      });
    });
    res.status(200).send(foods);
  } catch (error) {
    console.log(error);
  }
};
export const getFoodByRestro=async(req,res)=>{
  const restroid=req.params.restroid;
  try {
    const restro=await Restro.findById(restroid);
    const foods=restro.food;
    res.status(200).send(foods);
  } catch (error) {
    console.log(error);
  }
}

