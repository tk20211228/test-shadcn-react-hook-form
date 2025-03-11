import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default async function Sidebar({ policyId }: { policyId: string }) {
  return (
    <div className="flex flex-col m-4 gap-4 border rounded-lg p-4 w-full bg-sidebar">
      <h2 className="text-lg font-bold">サイドバー</h2>
      <Separator />
      <Button variant="ghost" asChild>
        <Link href={"/"}>ポリシー一覧 </Link>
      </Button>
      <Separator />
      <Button variant="ghost" asChild>
        <Link href={`/${policyId}/device-general`}>デバイス全般 </Link>
      </Button>
      <Button variant="ghost" asChild>
        <Link href={`/${policyId}/network`}>ネットワーク </Link>
      </Button>
      <Separator />
    </div>
  );
}
