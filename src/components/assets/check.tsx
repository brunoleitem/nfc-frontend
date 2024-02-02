import * as React from "react";

function CheckSVG(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.088 24c-2.246 0-4.156-.786-5.729-2.36C.786 20.069 0 18.159 0 15.913V8.088C0 5.842.786 3.932 2.36 2.36 3.931.786 5.841 0 8.087 0h7.824c2.246 0 4.156.786 5.729 2.36C23.214 3.931 24 5.841 24 8.087v7.824c0 2.246-.786 4.156-2.36 5.729C20.069 23.214 18.159 24 15.913 24H8.088zm2.585-6.699l7.909-7.909-1.911-1.91-5.998 5.997-2.869-2.869-1.911 1.912 4.78 4.78z"
        fill="#242423"
      />
    </svg>
  );
}

export default CheckSVG;
