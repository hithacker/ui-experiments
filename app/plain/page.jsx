"use client";

import React, { useState } from "react";

const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];

export default function Example() {
  const [selected, setSelected] = useState(plans[0].name);

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <div className="space-y-2">
          {plans.map((plan) => (
            <PlanOption
              key={plan.name}
              plan={plan}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PlanOption({ plan, selected, setSelected }) {
  const [isFocused, setIsFocused] = useState(false);
  const isSelected = selected === plan.name;

  const handleMouseDown = () => {
    setIsFocused(false);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Tab" || e.key === "ArrowUp" || e.key === "ArrowDown") {
      setIsFocused(true);
    }
  };

  return (
    <div
      onClick={() => setSelected(plan.name)}
      role="radio"
      aria-checked={isSelected}
      tabIndex={isSelected ? 0 : -1}
      className={`relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md 
        ${isSelected ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"}
        ${
          isFocused
            ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
            : ""
        }
      `}
      onMouseDown={handleMouseDown}
      onKeyUp={handleKeyUp}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <div className="text-sm">
            <p
              className={`font-medium ${
                isSelected ? "text-white" : "text-gray-900"
              }`}
            >
              {plan.name}
            </p>
            <span
              className={`inline ${
                isSelected ? "text-sky-100" : "text-gray-500"
              }`}
            >
              <span>
                {plan.ram}/{plan.cpus}
              </span>{" "}
              <span aria-hidden="true">&middot;</span> <span>{plan.disk}</span>
            </span>
          </div>
        </div>
        {isSelected && (
          <div className="shrink-0 text-white">
            <CheckIcon className="h-6 w-6" />
          </div>
        )}
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
