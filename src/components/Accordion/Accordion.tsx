'use client';
import AccordionItem from "./AccordionItem";

type AccordionItemProps = {
    title: string;
    content: string;
    defaultOpen?: boolean;
};

type AccordionProps = {
    items: AccordionItemProps[];
};

const Accordion = ({ items }: AccordionProps) => {
    return (
        items.map((item, index) => {
            <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                defaultOpen={item.defaultOpen}
            />
        })
    )
}

export default Accordion