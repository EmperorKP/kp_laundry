"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px] bg-white">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start',
                {
                  'bg-[#50b6e9]': isActive,
                  // 'fill:blue':isActive,
                  
                }
              )}
            >
              {typeof item.imgURL === 'string' ? (
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={24}
                    height={24}
                    className="bg-green"
                  />
                ) : (
                  <item.imgURL className="w-8 h-8 
                  " fill="#00334C" /> // Adjust the className to control the size as needed
                  
                )}
              <p className="text-lg font-semibold max-lg:hidden text-[#00334C]">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
