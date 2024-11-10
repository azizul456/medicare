'use client'
import React from 'react';

interface DisplayProps {
    content: string;
}
const parser = new DOMParser();
const extractAllAttributesFromHTML = (htmlString: string): { [tagName: string]: { [attrName: string]: string } } => {


    // Parse the HTML string into a document object
    const doc = parser.parseFromString(htmlString, 'text/html');

    // Get all elements in the parsed document
    const allElements = doc.querySelectorAll('*');

    // Prepare an object to store attributes for each tag
    const attributesObj: { [tagName: string]: { [attrName: string]: string } } = {};

    allElements.forEach((element) => {
        const tagName = element.tagName.toLowerCase();
        const attributes: { [attrName: string]: string } = {};

        // Get all attributes for the element
        Array.from(element.attributes).forEach((attr) => {
            attributes[attr.name] = attr.value;
        });
        attributes['innerHTML'] = element.innerHTML;

        // Store attributes by tag name
        if (Object.keys(attributes).length > 0) {
            attributesObj[tagName] = attributesObj[tagName] || {};
            attributesObj[tagName] = { ...attributesObj[tagName], ...attributes };
        }
    });

    return attributesObj;
};
const DisplayHTML: React.FC<DisplayProps> = ({ content }) => {
    let splitArray: string[];
    splitArray = content.split("><")
    if (splitArray.length > 1) {
        splitArray.forEach((item, index) => {
            if (index === 0) {
                splitArray[index] = item += ">"
                return
            }
            if (index === splitArray.length - 1) {
                splitArray[index] = "<" + item
                return
            }
            splitArray[index] = "<" + item + ">"
        })
    }
    splitArray.map((item: any, index: number) => {
        if (item.search('<img') == 0) {
            let attrObj = extractAllAttributesFromHTML(item);
            if (attrObj.hasOwnProperty("img")) {
                let imgObj = attrObj.img;
                if (imgObj.hasOwnProperty('src')) {
                    if (imgObj.src.search('/media/view') == 0) {
                        let src = 'https://medicare24.online' + imgObj.src;
                        splitArray[index] = item.replace(imgObj.src, src);
                    }

                }
            }
        } else if (item.search('<a') == 0) {
            let attrObj = extractAllAttributesFromHTML(item);
            if (attrObj.hasOwnProperty("a")) {
                let anchorObj = attrObj.a;
                if (anchorObj.hasOwnProperty('href')) {
                    let href = anchorObj.href;

                }
            }
        }
    })
    let ModifiedHTML = splitArray.join('');
    return (
        <div
            className="editor-content"
            dangerouslySetInnerHTML={{ __html: ModifiedHTML }}  // Render HTML string
        />

    );
};

export default DisplayHTML;