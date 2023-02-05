import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="w-full">
        <h1 className="text-center text-4xl font-semibold">
          <span className="hidden  md:block">Quiser</span>
          <span className="block  md:hidden">Q</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
