import Link from "next/link";
import { Button } from "./ui/button";

interface NavLink {
  href: string;
  children: string;
}

const NavLink: React.FC<NavLink> = ({ href, children }) => {
  return (
    <Button className="bg-accent text-foreground" asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default NavLink;
