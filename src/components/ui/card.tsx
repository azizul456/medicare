interface CardProps {
    title: string;
    description: string;
    children?: string;
}
export default function Card(props: CardProps) {
    const {
        title,
        description,
        children

    } = props;

    return (
        <div className="border rounded-lg p-6 m-4 max-w-md shadow-lg bg-white">
            <div className="mb-4">
                <h2 className="text-xl font-semibold">{title}</h2>
            </div>
            <div className="mb-2 text-gray-700">
                <p>{description}</p>
            </div>
            <div>{children}</div>
        </div>
    );
};

