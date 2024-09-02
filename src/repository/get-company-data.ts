import { promises as fs } from "fs";

type CompanyData = {
  name: string;
  slug: string;
  timeframe: string;
  competitors: {
    name: string;
    id: string;
    value: number;
  }[];
};

export const getCompanyData = async (
  companyId: string,
  timeframe: string,
): Promise<CompanyData | undefined> => {
  const filePath = `src/data/${companyId}.json`;
  const data = await fs.readFile(filePath, "utf8");
  const companyData: CompanyData[] = JSON.parse(data);

  return companyData.find((company) => company.timeframe === timeframe);
};
