function Product({ product: { title, price, description, category, image } }) {
  return (
    <div className="flex flex-wrap flex-row w-80 ">
      <div className="bg-#373cb69 rounded shadow-lg overflow-hidden relative m-1 w-300px">
        <div className="p-10 pb-0 pt-3">
          <img src={image} alt="product" className="w-full max-h-84" />
        </div>
        <div className="text-slate-700 font-light text-sm pt-6 pb-2 flex flex-col items-center justify-between tracking-wider">
          <div className="flex justify-between px-1 items-center ">
            <h1 className="w-1/2 pl-1">{title.substr(0, 50) + "..."}</h1>
            <p className="font-bold">{price}$</p>
          </div>
          <div className="mt-2 text-justify px-4">
            <p>{description.substr(0, 100) + "..."}</p>
          </div>
        </div>
        <div className="flex justify-end mb-0">
          <span className="absolute bottom-0 text-sm shadow-2xl border-solid border-2 hover:font-normal hover:cursor-pointer border-black border-opacity-30 px-2 ">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
