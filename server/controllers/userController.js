import { User } from "../models/User.js";
export const registerUser = async (req, res) => {
  const {name,email,password,phone}=req.body
  const newUser = new User({fname:name,email:email,password:password,phone:phone});
  try {
    const user = await newUser.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("Please Fill every detail correctly.");
  }
};

export const loginUser = async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await User.findOne({ phone: phone });
    if (user.password === password) {
      res.status(200).send(user);
    } else {
      res.status(200).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
export const addToCart=async(req,res)=>{
  const food=req.body.item;
  const userId=req.body.userid;
  try {
    const user=await User.findById(userId);
    user.cart.push(food);
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
}
export const getFoodData=async(req,res)=>{
  const userId=req.params.userid;
  try {
    const user=await User.findById(userId);
    const cartDetails=user.cart;
    res.status(200).send(cartDetails);
  } catch (error) {
    console.log(error);
  }
}
