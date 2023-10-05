"use client";

import { useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";

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
        <RadioGroup.Root value={selected} onValueChange={setSelected}>
          <label className="sr-only">Server size</label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Item
                key={plan.name}
                value={plan.name}
                className={`relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none ${
                  selected === plan.name
                    ? "bg-sky-900 bg-opacity-75 text-white"
                    : "bg-white"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <span
                        className={`font-medium ${
                          selected === plan.name
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {plan.name}
                      </span>
                      <span
                        className={`inline ${
                          selected === plan.name
                            ? "text-sky-100"
                            : "text-gray-500"
                        }`}
                      >
                        <span>
                          {plan.ram}/{plan.cpus}
                        </span>{" "}
                        <span aria-hidden="true">&middot;</span>{" "}
                        <span>{plan.disk}</span>
                      </span>
                    </div>
                  </div>
                  {selected === plan.name && (
                    <div className="shrink-0 text-white">
                      <CheckIcon className="h-6 w-6" />
                    </div>
                  )}
                </div>
              </RadioGroup.Item>
            ))}
          </div>
        </RadioGroup.Root>
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
