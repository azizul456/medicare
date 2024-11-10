import Image from "next/image";
import DrugCard from "@/components/DrugCard";
export default async function ProductsPage() {
  const apiURL = process.env.apiURL;
  // const res = await fetch('http://localhost:5000/api/v1/public/product/getProducts')
  let args = { limit: 12, offset: 0 }
  let response = await fetch(apiURL + '/public/product/getProducts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args), // Send the form data as JSON
  });
  const data = await response.json();
  console.log(data);

  return (
    <section className="container mx-auto p-8">
      <div className="grid grid-cols-4">
      {data.products.map((drug:any) => (
        <DrugCard key={drug.id} {...drug} />
      ))}

      </div>
    </section>
  );
}
