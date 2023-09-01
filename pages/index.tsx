import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Link href={`/api/auth/login`} style={{ marginInlineEnd: "3em" }}>
        Login
      </Link>

      <Link href={`/profile`}>Profile</Link>
    </main>
  );
}
