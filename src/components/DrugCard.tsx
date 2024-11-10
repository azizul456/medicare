import Image from 'next/image';
import Link from 'next/link';

interface DrugData {
    FDA_INN: string;
    OTC_Prescription: string;
    category: string;
    commercial_pack_unit: string;
    company_name: string;
    cost_per_pack: number;
    cost_per_unit: number;
    dosage_image: string;
    dosage_name: string;
    dosage_short_name: string;
    generic_id: number;
    generic_name: string;
    id: number;
    name: string;
    origin_country_name: string;
    package_unit: string;
    pregnancy_category: string;
    price_per_pack: number;
    price_per_unit: number;
    sale_unit: string | null;
    type: string;
    variants: any[];
}

export default function DrugCard(props: DrugData) {
    const {
        FDA_INN,
        OTC_Prescription,
        category,
        company_name,
        dosage_image,
        dosage_name,
        generic_name,
        name,
        origin_country_name,
        package_unit,
        pregnancy_category,
        price_per_pack,
        price_per_unit,
        id,
    } = props;

    return (
        <div className="card p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                        <Image
                            src={dosage_image}
                            alt={`${name} image`}
                            width={80}
                            height={80}
                            className="object-cover rounded-md"
                        />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                        <p className="text-sm text-gray-500">{generic_name}</p>
                    </div>

                </div>
                <div className="flex flex-col justify-between flex-grow">
                    <div className="mt-1 text-sm">
                        <p className="text-gray-700">
                            <span className="font-semibold">Dosage:</span> {dosage_name}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Category:</span> {category}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Prescription:</span> {OTC_Prescription}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Country of Origin:</span> {origin_country_name}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Package Unit:</span> {package_unit}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Pregnancy Category:</span> {pregnancy_category}
                        </p>
                    </div>

                    {/* Price */}
                    <div className="mt-4">
                        <p className="text-lg font-semibold text-blue-600">৳{price_per_pack} per pack</p>
                        <p className="text-sm text-gray-600">৳{price_per_unit} per unit</p>
                    </div>
                    <Link href={`/medicines/${id}`} className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">
                        Details
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>


    );
}
