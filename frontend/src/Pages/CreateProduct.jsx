import RenderSteps from "../components/AddProduct/RenderSteps"

export default function CreateProduct() {
  return (
    <>
      <div className="p-6 flex w-full items-start gap-x-6 bg-gradient-to-r from-fuchsia-300 to-fuchsia-5">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Add Product
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
        {/* Product Upload Tips */}
        <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] mt-32 border-richblack-700 bg-richblack-100 p-6 xl:block">
          <p className="mb-8 text-lg text-richblack-5">⚡ Product Upload Tips</p>
          <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-900">
            <li>Set the product price or make it free.</li>
            <li>Standard size for the product image is [specify the dimensions here].</li>
            <li>Product details section controls the product information.</li>
            <li>Add categories in the Product details section to organize products.</li>
          </ul>

        </div>
      </div>
    </>
  )
}