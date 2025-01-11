import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full flex">
        {/* LEFT */}
        <div className="w-[16%] md:w-[8%] lg:w-[16%] xl:w-[16%] p-4">
          <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start">
            <Image src="/logo.png" alt="logo" width={32} height={32}/>
            <span className="hidden lg:block font-bold">School Lama</span>
          </Link>
          <Menu/>
        </div>
        {/* RIGHT */}
        <div className="w-[84%] md:w-[92%] lg:w-[84%] xl::w-[84%] bg-[#F7F8FA] overflow-scroll">
          <NavBar/>
          {children}
        </div>
    </div>
  );
}
