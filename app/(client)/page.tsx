import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";

const Home = ()=>{
  return  (
    <Container>
      <HomeBanner/>
      <div className="py-10">
          <ProductGrid/>
      </div>
    </Container>
  );
};

export default Home;