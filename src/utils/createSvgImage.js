import * as icons from "simple-icons/icons";
import Image from "next/image";

export const createSvgImage = (
  iconTitle,
  width = 20,
  height = 20,
  originColor = false
) => {
  const IconElement = icons[`si${iconTitle}`];
  const svg = IconElement.svg.replace(
    "svg ",
    `svg fill="#${originColor ? IconElement.hex : "fff"}" `
  );
  return (
    <Image
      src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
      width={width}
      height={height}
      alt={iconTitle}
    />
  );
};
