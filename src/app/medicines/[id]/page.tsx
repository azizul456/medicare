import { Metadata } from 'next';
import React from 'react'
import Image from 'next/image';
import Card from '@/components/ui/card';
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
                            <div className="bg-white shadow-md">
                                <h2 className="bg-gray-800 text-white p-2 pl-6 pr-6">Description</h2>
                                <div className="p-6" dangerouslySetInnerHTML={{ __html: data.description }} />
                            </div>
                        )}

                        {/* Conditional Use */}
                        {data.conditional_use && (
                            <div className="bg-white shadow-md">
                                <h2 className="bg-gray-800 text-white p-2 pl-6 pr-6">Conditional Use</h2>
                                <div className="p-6" dangerouslySetInnerHTML={{ __html: data.conditional_use }} />
                            </div>
                        )}

                        {/* Side Effects */}
                        {data.side_effect && (

                            <div className="bg-white shadow-md">
                                <h2 className="bg-gray-800 text-white p-2 pl-6 pr-6">Side Effects</h2>
                                <div className="p-6" dangerouslySetInnerHTML={{ __html: data.side_effect }} />
                            </div>
                        )}

                        {/* Dosage and Administration */}
                        {data.dosage_and_admin && (

                            <div className="bg-white shadow-md">
                                <h2 className="bg-gray-800 text-white p-2 pl-6 pr-6">Dosage and Administration</h2>
                                <div className="p-6" dangerouslySetInnerHTML={{ __html: data.dosage_and_admin }} />
                            </div>
                        )}

                        {/* Precautions */}
                        {data.precaution && (

                            <div className="bg-white shadow-md">
                                <h2 className="bg-gray-800 text-white p-2 pl-6 pr-6">Precautions</h2>
                                <div className="p-6" dangerouslySetInnerHTML={{ __html: data.precaution }} />
                            </div>
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