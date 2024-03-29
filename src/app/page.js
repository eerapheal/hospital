import HomeCard from "@/components/HomeCard/HomeCard";
import Contact from "@/components/Contact/Contact";
import About from "@/components/About/About";
import Products from "@/components/Products/Produtcs";

export default function Home() {
  return (
    <main className="" style={{
      backgroundImage:
        "linear-gradient(80deg, #eef7fb 0 60%,  #C9F6FF 0% 100%)",
      paddingTop: "60px",
      minHeight: "100vh",
      overflow: "hidden",
    }}>
      <HomeCard />
      <Products />
      <About />
      <Contact />
    </main>
  );
}
