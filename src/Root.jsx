import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";

export const ItemContext = createContext([]);

const Root = () => {
  const { items } = useLoaderData();

  //   console.log(items);
  return (
    <div className="bg-[#f8f6f8]">
      <ItemContext.Provider value={items}>
        <Outlet />
      </ItemContext.Provider>
    </div>
  );
};

export default Root;
