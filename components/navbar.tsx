import React from "react";
import { Container } from "./ui/container";
import Link from "next/link";
import { MainNav } from "./mainNav";
import getCategories from "@/actions/getCategories";
import { NavbarActions } from "./navbar-actions";

export const revalidate = 0;

export const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={`/`} className="ml-4 flex lg:ml-8 gap-x-2">
            <h2 className="font-bold text-xl">SUPER E-MART</h2>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
