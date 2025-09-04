import {createLaptop,getLaptops,getLaptopById,updateLaptop,deleteLaptop,} from "../service/laptop.service.js";

export const createLaptopController = async (req, res) => {
  try {
    const laptop = await createLaptop(req.body);
    res.status(201).json(laptop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getLaptopsController = async (req, res) => {
  try {
    const laptops = await getLaptops();
    res.status(200).json(laptops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLaptopByIdController = async (req, res) => {
  try {
    const laptop = await getLaptopById(req.params.id);
    if (!laptop) return res.status(404).json({ error: "Laptop not found" });
    res.status(200).json(laptop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateLaptopController = async (req, res) => {
  try {
    const laptop = await updateLaptop(req.params.id, req.body);
    if (!laptop) return res.status(404).json({ error: "Laptop not found" });
    res.status(200).json(laptop);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteLaptopController = async (req, res) => {
  try {
    const laptop = await deleteLaptop(req.params.id);
    if (!laptop) return res.status(404).json({ error: "Laptop not found" });
    res.status(200).json({ message: "Laptop deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
