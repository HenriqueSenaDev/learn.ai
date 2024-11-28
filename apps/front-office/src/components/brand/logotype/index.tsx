import logotypeSrc from "design-system/assets/images/brand/logotype.png";
import Image, { ImageProps } from "next/image";

type LogotypeProps = Omit<ImageProps, "src" | "alt">;

export const Logotype = (props: LogotypeProps) => {
    return (
        <Image
            src={logotypeSrc}
            alt="Learn.ai escrito em fonte serifada ao lado de um ícone de capelo, ambos em cor azul escura."
            {...props}
        />
    );
}