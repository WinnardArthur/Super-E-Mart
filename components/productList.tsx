import { Product } from "@/types";
import NoResults from "./ui/no-results";
import { ProductCard } from "./ui/product-card";

type ProductListProps = {
  title: string;
  items: Product[];
};

export const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h4 className="font-bold text-3xl">{title}</h4>
      {items.length === 0 && <NoResults />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
