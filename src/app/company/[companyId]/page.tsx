import { getCompanyData } from "@/repository/get-company-data";

import Link from "next/link";
import EmployeesFlow from "@/components/employees-flow";

export default async function CompanyPage({ params, searchParams }: any) {
  const timeframe = searchParams.timeframe ?? "1";
  const companyData = await getCompanyData(params.companyId, timeframe);

  if (!companyData) return <div>Company not found</div>;

  const company = {
    name: companyData.name,
    slug: companyData.slug,
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Company Page</h1>
      {!searchParams.timeframe && (
        <p className="text-sm text-primary/75 italic">
          By default, the timeframe is set to 1
        </p>
      )}
      <nav className="flex gap-x-4 mt-4">
        <Link
          href={`/company/${params.companyId}?timeframe=1`}
          className="text-blue-500 hover:underline"
        >
          Timeframe 1
        </Link>
        <Link
          href={`/company/${params.companyId}?timeframe=2`}
          className="text-blue-500 hover:underline"
        >
          Timeframe 2
        </Link>
        <Link
          href={`/company/${params.companyId}?timeframe=3`}
          className="text-blue-500 hover:underline"
        >
          Timeframe 3
        </Link>
        <Link
          href={`/company/${params.companyId}?timeframe=4`}
          className="text-blue-500 hover:underline"
        >
          Timeframe 4
        </Link>
      </nav>

      <div className="w-8/12 mx-auto h-96 border my-12">
        <EmployeesFlow company={company} data={companyData.competitors} />
      </div>
    </div>
  );
}
