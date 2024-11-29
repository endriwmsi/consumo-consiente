import Link from "next/link";
import Image from "next/image";
import logo2 from "../../../public/images/logo-consumo-consiente.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
      <Image src={logo2} alt="Cruip Logo" width={32} height={32} />
    </Link>
  );
}
