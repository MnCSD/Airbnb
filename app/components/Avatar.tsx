import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({src}) => {

  console.log(src)

  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
