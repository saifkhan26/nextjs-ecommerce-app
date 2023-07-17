import Link from "next/link";
import Image from "next/image";
import { Button } from "@components/Button";
import shoppingCartIcon from '@public/icons/shopping_cart.svg'

export default function Header() {
  return (
    <header className="bg-rich-blue py-4 text-lavender-blush flex md:px-24 p-4">
      <p>Logo</p>
      <div className="ml-auto flex gap-7 items-center">
        <Link href="/">Home</Link>
        <Link href="/products">Product</Link>
        <Link
          href="/cart"
          style={{
            display: "flex",
            alignItems: "center",
          }}>
          <Image
            src={shoppingCartIcon}
            width={22}
            height={22}
          />
        </Link>
        <Button>Login</Button>
      </div>
    </header>
  );
}
