import { getOpenJobs } from "../openJobs";

export async function getOpenJobsVm(company) {
  const data = await getOpenJobs(company);
  return data;
}
