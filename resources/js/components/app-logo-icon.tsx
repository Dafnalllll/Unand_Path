import { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(
    props: ImgHTMLAttributes<HTMLImageElement>,
) {
    return (
        <div data-aos="zoom-in" data-aos-delay="300">
            <img
                {...props}
                src="/unand_path.webp"
                alt="Unand Logo"
                className={`h-32 w-32 transition-transform duration-300 hover:scale-120 ${props.className ?? ''}`}
            />
        </div>
    );
}
