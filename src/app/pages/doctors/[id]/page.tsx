import { Metadata } from 'next';
import React from 'react'
import Image from 'next/image';
import Card from '@/components/ui/card';
import AccordionItem from "@/components/Accordion/AccordionItem";
export const metadata: Metadata = {
    title: "Medicine",
    description: "Medicine",
};

interface DetailsPageProps {
    params: {
        id?: string;
    };
}
const apiURL = process.env.apiURL;
const DetailsPage = async ({ params }: DetailsPageProps) => {

    const { id } = await params


    let response = await fetch(apiURL + `/public/product/${id}`);
    // if (!response.ok) {
    //     // throw new Error("Something went wrong");
    // }
    const result = await response.json();
    console.log('medicineList', result);
    if (!result.success) {

    } else {
        let data = result.data;
        return (
            <section className="py-12">
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h1>{data.name} ({data.generic_name})</h1>


                            <Image
                                src={data.dosage_image}
                                alt={`${data.name} image`}
                                width={80}
                                height={80}
                                className="object-cover rounded-md"
                            />
                            <p><strong>Type:</strong> {data.type}</p>
                            <p><strong>Prescription:</strong> {data.OTC_Prescription}</p>
                            <p><strong>Category:</strong> {data.category}</p>
                            <p><strong>Company:</strong> {data.company_name}</p>
                            <p><strong>Price per Pack:</strong> {data.price_per_pack}</p>
                            <p><strong>Price per Unit:</strong> {data.price_per_unit}</p>
                        </div>

                        {/* Display classes */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="bg-gray-800 text-white p-2 pl-6 pr-6">Classes</h2>
                            <div className='p-6'>
                                {data.classes.map((classItem: any, index: any) => (
                                    <div key={index}>{classItem.name}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">






                        {/* Conditional Rendering for nullable fields */}
                        {data.description && (
                            <AccordionItem title={'Description'} content={data.description} defaultOpen={true}></AccordionItem>
                        )}

                        {/* Conditional Use */}
                        {data.conditional_use && (
                            <AccordionItem title={'Indication and Usage'} content={data.conditional_use}></AccordionItem>
                        )}

                        {/* Side Effects */}
                        {data.side_effect && (
                            <AccordionItem title={'Side Effect'} content={data.side_effect}></AccordionItem>
                        )}

                        {/* Dosage and Administration */}
                        {data.dosage_and_admin && (
                            <AccordionItem title={'Dosage & Administration (How to take this medication)'} content={data.dosage_and_admin}></AccordionItem>
                        )}

                        {/* Precautions */}
                        {data.precaution && (
                            <AccordionItem title={'Precaution/Good to know'} content={data.precaution}></AccordionItem>
                        )}

                        {/* Display Diseases */}
                        <div className="bg-white shadow-md">
                            <h2 className="bg-gray-800 text-white p-2 pl-6 pr-6">Associated Diseases</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
                                {data.diseases.map((disease: any, index: any) => (
                                    <div key={index}>
                                        <Image
                                            src={disease.image_url}
                                            alt={`${disease.name} image`}
                                            width={100}
                                            height={100}
                                            className="object-cover rounded-md"
                                        />
                                        <p>{disease.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        )
    }



}

export default DetailsPage