import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [toggle, setToggle] = useState(false);

  const features = {
    basic: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    professional: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    master: ["12 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  };

  const [selected, setSelected] = useState({
    basic: false,
    professional: true,
    master: false,
  });

  function handleBasic() {
    setSelected({ basic: true, professional: false, master: false });
  }

  function handlePro() {
    setSelected({ basic: false, professional: true, master: false });
  }

  function handleMaster() {
    setSelected({ basic: false, professional: false, master: true });
  }

  return (
    <main className="bg-gray-200 pb-10 h-full md:h-screen">
      <div className="flex flex-col justify-center items-center gap-8 py-8 md:mb-10">
        <h2 className="text-center text-2xl font-bold text-gray-600">
          Our Pricing
        </h2>
        <div className="flex flex-row justify-between w-[60%] max-w-[225px] m-auto items-center">
          <p
            className={`${
              toggle ? "text-gray-400" : "underline"
            } duration-300 font-bold`}
          >
            Annually
          </p>
          <div
            className={`flex items-center bg-gradient-to-r from-indigo-300 to-violet-600 md:hover:opacity-50 duration-300 cursor-pointer w-10 p-1 rounded-full ${
              toggle ? "justify-end" : "justify-start"
            }`}
            onClick={() => setToggle(!toggle)}
          >
            <FontAwesomeIcon icon={faCircle} color="white" />
          </div>
          <p
            className={`${
              toggle ? "underline" : "text-gray-400"
            } duration-300 font-bold`}
          >
            Monthly
          </p>
        </div>
      </div>
      <div className="flex flex-col px-10 gap-4 md:gap-1 md:grid md:grid-cols-3">
        <ProductCard
          title={"Basic"}
          price={toggle ? 19.99 : 199.99}
          feature1={features.basic[0]}
          feature2={features.basic[1]}
          feature3={features.basic[2]}
          selected={selected.basic}
          handleSelection={handleBasic}
        />
        <ProductCard
          title={"Professional"}
          price={toggle ? 24.99 : 249.99}
          feature1={features.professional[0]}
          feature2={features.professional[1]}
          feature3={features.professional[2]}
          selected={selected.professional}
          handleSelection={handlePro}
        />
        <ProductCard
          title={"Master"}
          price={toggle ? 39.99 : 399.99}
          feature1={features.master[0]}
          feature2={features.master[1]}
          feature3={features.master[2]}
          selected={selected.master}
          handleSelection={handleMaster}
        />
      </div>
    </main>
  );
}

export default App;
