import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdNavigateNext } from "react-icons/md";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { toast } from "react-hot-toast"
import IconBtn from "../../IconBtn";
// import Upload from "../Upload";
import { stepSelector, productSelector, editProductSelector } from "../../../store/product";
import { productCategoriesAtom, productCategoriesSelector } from "../../../store/productCategory"
import { loadingSelector, tokenSelector } from "../../../store/auth"
import { addProductDetails } from "../../../Services/functions/product";
import ChipInput from "./ChipInput";


export default function ProductInformationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const setProductCategories = useSetRecoilState(productCategoriesAtom);
  // Example of setting new values
  const newCategories = [{
    name: "Electronics",
    description: "Description for Category 1",
    tax: 10, // Example tax value
  },
  {
    name: "Category 2",
    description: "Description for Category 2",
    tax: 15, // Example tax value
  },
  {
    name: "Category 3",
    description: "Description for Category 3",
    tax: 20, // Example tax value
  },];
  useEffect(() => {
    setProductCategories(newCategories);
  }, [])

  const [product, setProduct] = useRecoilState(productSelector);
  const [step, setStep] = useRecoilState(stepSelector);
  const [editProduct, setEditProduct] = useRecoilState(editProductSelector);
  const [loading, setLoading] = useRecoilState(loadingSelector);
  const productCategories = useRecoilValue(productCategoriesSelector);
  const token = useRecoilValue(tokenSelector);

  useEffect(() => {
    // Populate form fields if in edit mode
    if (editProduct) {
      setValue("name", product.name);
      setValue("brand", product.brand);
      setValue("price", product.price);
      setValue("description", product.description);
      setValue("tax", product.tax);
      setValue("images", product.images);
      setValue("category", product.category);
      setValue("whyToSale", product.whyToSale);
      setValue("ownerCount", product.ownerCount);
    }
  }, [product, editProduct, setValue]);

  //   handle next button click

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("brand", data.brand);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("tax", data.tax);
    formData.append("file", data.images);
    formData.append("tags", data.productTags);
    formData.append("category", data.category);
    formData.append("whyToSale", data.whyToSale);
    formData.append("ownerCount", data.ownerCount);

    setLoading(true);
    let result = null;
    if (editProduct) {
      formData.append("productId", product._id);
      // result = await editProductDetails(formData, token);
    } else {
      result = await addProductDetails(formData, token);
    }
    setLoading(false);

    if (result) {
      setStep(2);
      setProduct(result);
    } else {
      toast.error("Failed to save the product details.");
    }
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-md border-[1px] bg-richblack-300 p-6"
    >
      {/* Name */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="name">
          Name <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="name"
          placeholder="Enter Product Name"
          {...register("name", { required: true })}
          className="form-style w-full"
        />
        {errors.name && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Name is required
          </span>
        )}
      </div>
      {/* Brand */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="brand">
          Brand
        </label>
        <input id="brand" {...register("brand")} className="form-style w-full" />
      </div>
      {/* Price */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="price">
          Price <sup className="text-pink-200">*</sup>
        </label>
        <div className="relative">
          <input
            id="price"
            type="number"
            placeholder="Enter Price"
            {...register("price", { required: true })}
            className="form-style w-full !pl-12"
          />
          <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
        </div>
        {errors.price && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Price is required
          </span>
        )}
      </div>
      {/* Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="description">
          Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="description"
          placeholder="Enter Description"
          {...register("description", { required: true })}
          className="form-style resize-x-none min-h-[130px] w-full"
        />
        {errors.description && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Description is required
          </span>
        )}
      </div>
      {/* tages */}
      <ChipInput
        label="Tags"
        name="productTags"
        placeholder="Enter Tags and press Enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />
      {/* Tax */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="tax">
          Tax <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="tax"
          type="number"
          placeholder="Enter Tax"
          {...register("tax", { required: true })}
          className="form-style w-full"
        />
        {errors.tax && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Tax is required
          </span>
        )}
      </div>
      {/* Images */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="images">
          Images <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="images"
          type="file"
          {...register("images", { required: true })}
          multiple
          className="form-style w-full"
        />
        {errors.images && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Images are required
          </span>
        )}
      </div>
      {/* Category */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-500" htmlFor="category">
          Category <sup className="text-pink-200">*</sup>
        </label>
        <select
          id="category"
          {...register("category", { required: true })}
          className="form-style w-full text-black"
        >
          <option value="" disabled>
            Choose a Category
          </option>
          {!loading &&
            productCategories?.map((category, indx) => (

              <option key={indx} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {errors.category && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Category is required
          </span>
        )}
      </div>
      {/* Why to Sale */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="whyToSale">
          Why to Sale
        </label>
        <textarea
          id="whyToSale"
          placeholder="Enter Reason to Sale"
          {...register("whyToSale")}
          className="form-style resize-x-none min-h-[130px] w-full"
        />
      </div>
      {/* Owner Count */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="ownerCount">
          Owner Count <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="ownerCount"
          type="number"
          placeholder="Enter Owner Count"
          {...register("ownerCount", { required: true })}
          className="form-style w-full"
        />
        {errors.ownerCount && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Owner Count is required
          </span>
        )}
      </div>

      {/* Next Button */}
      <div className="flex justify-end gap-x-2">
        {editProduct && (
          <button
            onClick={() => setStep(2)}
            disabled={loading}
            className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
          >
            Continue Without Saving
          </button>
        )}
        <IconBtn disabled={loading} text={!editProduct ? "Next" : "Save Changes"}>
          <MdNavigateNext />
        </IconBtn>
      </div>
    </form>
  );
}
