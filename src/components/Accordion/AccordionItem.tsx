'use client';
import { useState } from 'react';

type AccordionItemProps = {
    title: string;
    content: string;
    defaultOpen?: boolean;
};

const AccordionItem = ({ title, content, defaultOpen = false }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-gray-300">
            <button
                className="flex justify-between w-full text-left font-medium bg-gray-800 text-white p-2 pl-6 pr-6"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            <div
                className={`transition-all duration-400 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                {isOpen && (
                    <div className="p-4 text-gray-600 bg-gray-50" dangerouslySetInnerHTML={{ __html: content }} />
                )}
            </div>
        </div>
    );
};

export default AccordionItem;
