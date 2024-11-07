import { SVGProps } from 'react';

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            enable-background="new 0 0 50 50"
            height="50px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 50 50"
            width="50px"
            {...props}
        >
            <rect fill="none" height="50" width="50" />
            <line
                fill="none"
                stroke="#000000"
                stroke-miterlimit="10"
                stroke-width="4"
                x1="9"
                x2="41"
                y1="25"
                y2="25"
            />
            <line
                fill="none"
                stroke="#000000"
                stroke-miterlimit="10"
                stroke-width="4"
                x1="25"
                x2="25"
                y1="9"
                y2="41"
            />
        </svg>
    );
};
