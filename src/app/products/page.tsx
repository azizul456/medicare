import Image from "next/image";

export default async function ProductsPage() {
  const apiURL = process.env.apiURL;
  // const res = await fetch('http://localhost:5000/api/v1/public/product/getProducts')
  let args = { limit: 10, offset: 0 }
  let response = await fetch(apiURL + '/public/product/getProducts', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });

  
  const data = await response.json();
  console.log(data);
  if(!data.success){
      throw new Error("An error occurred while processing the request.");
  }
  return (
    <section className="container mx-auto p-8">
      <table className="table">
        <tbody>
          {
            data.products.map((item: any, key: number) => {
              return <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </section>
  );
}
