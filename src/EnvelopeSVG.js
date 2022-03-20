import React from "react";

function EnvelopeSVG({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsBx="https://boxy-svg.com"
      viewBox="76.002 51.22 377.374 223.498"
      className={className}
    >
      <path
        fill="#FFFAEB"
        stroke="#000"
        strokeOpacity="0.05"
        d="M266.33 164.193q1.917-1.124 0-2.248L78.355 51.794q-1.918-1.124-1.918 1.124V273.22q0 2.248 1.918 1.124z"
        bxShape="triangle -42.753 384.417 224.798 191.809 0.5 0.01 1@bb699217"
      ></path>
      <path
        fill="#FFFAEB"
        stroke="#000"
        strokeOpacity="0.05"
        d="M264.44 163.994q-1.905-1.124 0-2.248L451.234 51.595q1.906-1.124 1.906 1.124V273.02q0 2.248-1.906 1.124z"
        bxShape="triangle 42.753 -382.002 224.798 190.604 0.5 0.01 1@4f30161a"
      ></path>
      <path
        fill="#FFFAEB"
        stroke="#000"
        strokeOpacity="0.05"
        d="M263.091 156.371q1.897-1.195 3.793 0l185.859 117.115q1.897 1.195-1.896 1.195H79.128q-3.793 0-1.896-1.195z"
        bxShape="triangle 75.335 155.176 379.305 119.505 0.5 0.01 1@9d2ba04b"
      ></path>
    </svg>
  );
}


function EnvelopeSVGBack({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsBx="https://boxy-svg.com"
      viewBox="76.002 51.22 377.374 223.498"
      className={className}
    >
      <path
        fill="#fffef2"
        stroke="#000"
        strokeOpacity="0.05"
        d="M262.493 169.869q1.897 1.195 3.793 0L452.145 52.754q1.897-1.195-1.896-1.195H78.53q-3.793 0-1.896 1.195z"
        bxShape="triangle 74.737 -171.064 379.305 119.505 0.5 0.01 1@c0ba4860"
      ></path>
    </svg>
  );
}

export default EnvelopeSVG;
export { EnvelopeSVGBack };