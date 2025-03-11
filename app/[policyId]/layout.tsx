import Header from "./components/header";
import { PolicyFormProvider } from "./components/policy-form-provider";
import Sidebar from "./components/sidebar";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ policyId: string }>;
}) {
  const { policyId } = await params;
  return (
    <div className=" container mx-auto flex flex-col h-dvh border rounded-lg ">
      <PolicyFormProvider>
        <Header />
        <div className="flex-1 ">
          <div className="flex flex-row h-full">
            <div className="flex w-1/5">
              <Sidebar policyId={policyId} />
            </div>
            <div className="flex flex-1 ">{children}</div>
          </div>
        </div>
      </PolicyFormProvider>
    </div>
  );
}
