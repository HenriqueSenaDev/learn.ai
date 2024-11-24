import logotypeSrc from "design-system/assets/images/brand/logotype.png";
import Image, { ImageProps } from "next/image";

type LogotypeProps = Omit<ImageProps, "src" | "alt">;

export const Logotype = (props: LogotypeProps) => {
    return (
        <Image
            src={logotypeSrc}
            alt="Learn.ai writen in serifed font besides a graduation cap, both in blue color."
            {...props}
        />
    );
}