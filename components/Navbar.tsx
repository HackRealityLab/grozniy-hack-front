import Image from "next/image";
import NavLink from "./NavLink";

import Logo from "@/public/Logo.svg";

const Navbar = () => {
  return (
    <nav className="h-full flex flex-col items-center justify-between bg-card rounded-3xl p-5 border border-gray-300 w-[290px]">
      <section className="flex flex-col gap-5">
        <div className="">
          <Image
            src={Logo}
            alt="Министерство природных ресурсов и экологии Российской Федерации"
            width={250}
          />
        </div>
        <div className="flex flex-col gap-4">
          <NavLink href={"/"}>Главная</NavLink>
          <NavLink href={"/archive"}>Архив записей</NavLink>
          <NavLink href={"/stats"}>Статистика</NavLink>
        </div>
      </section>
      <section>ID: 000000001</section>
    </nav>
  );
};

export default Navbar;
