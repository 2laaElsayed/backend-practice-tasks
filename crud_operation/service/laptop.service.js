import Laptop from "../model/laptop.model.js";

export const createLaptop = async (data) => {
  return await Laptop.create(data);
};

export const getLaptops = async () => {
  return await Laptop.find();
};

export const getLaptopById = async (id) => {
  return await Laptop.findById(id);
};

export const updateLaptop = async (id, data) => {
  return await Laptop.findByIdAndUpdate(id, data, { new: true });
};

export const deleteLaptop = async (id) => {
  return await Laptop.findByIdAndDelete(id);
};
