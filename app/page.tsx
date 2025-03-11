import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <h1 className="text-lg font-bold">ポリシー一覧</h1>
      <Button variant="outline" asChild>
        <Link href={"./a/device-general"}>A ポリシー </Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href={"./b/device-general"}>B ポリシー</Link>
      </Button>
    </main>
  );
}
