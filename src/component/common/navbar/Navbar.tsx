import { homeContenEn } from "@/locale/en/home";
import { homeContenEs } from "@/locale/es/home";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar() {
  const router = useRouter();

  const changeLanguage = () => {
    const newLocale = router.locale === "es" ? "en" : "es";
    router.push(router.pathname, router.pathname, {
      locale: newLocale,
    });
  };

  const content =
    router.locale === "es" ? homeContenEs.navbar : homeContenEn.navbar;

  return (
    <nav className="flex items-center justify-between p-5">
      <div>
        <Link href="/">
          <Image
            src="/navbar/favicon.ico"
            alt="logo de qseyo"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <ul className="flex items-center gap-x-6">
        <li>
          <Link href="/about">{content.about}</Link>
        </li>
        <li>
          <Link href="/contact">{content.contact}</Link>
        </li>
        <li>
          <Link href="/cart">{content.cart}</Link>
        </li>
        <li>
          <button onClick={changeLanguage}>
            {router.locale === "es" ? "EN" : "ES"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
