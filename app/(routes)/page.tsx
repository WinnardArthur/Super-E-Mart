import getBillboard from "@/actions/getBillboard";
import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("6590249d8e0fac58790b7bbd");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
