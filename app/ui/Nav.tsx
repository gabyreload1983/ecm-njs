"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Contacto", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <Disclosure as="nav" className="bg-black w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex max-w-7xl items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image src="/logo.png" alt="logo" width={36} height={36} />
              </Link>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    "rounded-md px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-sky-500",
                    {
                      "bg-gray-900 text-sky-300": pathname === item.href,
                    }
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={clsx(
                "block rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-sky-500",
                {
                  "bg-gray-900 text-sky-300": pathname === item.href,
                }
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
