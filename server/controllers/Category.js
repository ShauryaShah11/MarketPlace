import Category from '../models/Category.js'; 
import Product from '../models/Product.js';
import { z } from "zod";

const categorySchema = z.object({
    name: z.string(),
    description: z.string().min(1).max(200),
    tax: z.number().min(0)
});

const IdSchema = z.string().refine((val) => {
  return mongoose.Types.ObjectId.isValid(val);
}, {
  message: 'Invalid Id format',
});

export const createCategory = async (req, res) => {
  const { name, description , tax} = req.body;
  tax = parseFloat(tax);
  try {
    const newCategory = new Category({
      name,
      description,
      tax
    });
    const validateCategory = categorySchema.safeParse(newCategory);
    if(!validateCategory.success) {
      return res.status(400).json({
        error: 'Invalid category format',
        details: validateCourse.error.errors
      })
    }
    const savedCategory = await newCategory.save();

    if (!savedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not created",
      });
    }

    return res.status(200).json({
      data: savedCategory,
      success: true,
      message: "Successfully created category",
    });

  } catch (error) {
    console.error("Error creating category:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({isRemoved: false});
    return res.status(200).json({
      data: categories,
      success: true,
      message: "Successfully retrieved categories",
    });
  } catch (error) {
    console.error("Error getting categories:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Update category by ID
export const updateCategoryById = async (req, res) => {
  const categoryId = req.params.id;
  const { name, description, tax } = req.body;

  try {
    const validationIdError = validateCourseId(categoryId);
    if (validationIdError) {
       return res.status(400).json(validationIdError);
    }
    tax = parseFloat(tax);
    const updatedCategory = new Category({
      name,
      description,
      tax
    })
    const validateCategory = categorySchema.safeParse(updatedCategory);
    if(!validateCategory.success) {
      return res.status(400).json({
        error: 'Invalid category format',
        details: validateCourse.error.errors
      })
    }
    const category = await Category.findByIdAndUpdate(categoryId, updatedCategory, { new: true });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    return res.status(200).json({
      data: category,
      success: true,
      message: "Successfully updated category",
    });

  } catch (error) {
    console.error("Error updating category by ID:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const deleteCategoryById = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const validationIdError = validateCourseId(categoryId);
    if (validationIdError) {
       return res.status(400).json(validationIdError);
    }
    const deletedCategory = await Category.findByIdAndUpdate(categoryId, {isRemoved: true});

    if (!deletedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    return res.status(200).json({
      data: deletedCategory,
      success: true,
      message: "Successfully deleted category",
    });
  } catch (error) {
    console.error("Error deleting category by ID:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getProductByCategoryId = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const validationIdError = validateCourseId(categoryId);
    if (validationIdError) {
       return res.status(400).json(validationIdError);
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }
    const productIds = await category.products;
    const products = await Product.find({
      _id: { 
         $in: productIds 
       } 
    });
    return res.status(200).json({
      data: products,
      success: true,
      message: "Successfully retrieved products",
    });
  } catch (error) {
    console.error("Error getting products by category ID:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
