export default function Loading() {
  const products = [1, 2, 3, 4];
  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        {products.length > 0 &&
          products.map((product: any) => (
            <>
              <div
                key={product.id}
                className="animate-pulse mx-2 group my-10 flex w-64 flex-col overflow-hidden border border-gray-100 bg-slate-700 shadow-md"
              >
                <a className="relative flex h-60 overflow-hidden" href="#">
                  <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0"></div>
                </a>
                <div className="flex flex-col my-2 mx-2">
                  <p className="h-5 w-40 bg-slate-600 mb-4"></p>
                  <p className="h-4 w-40 bg-slate-600 mb-4"></p>
                  <div className="mt-32">
                    <p className="h-5 w-40 bg-slate-600 mb-2"></p>
                    <p className="bg-slate-600 h-8 w-40"></p>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}
