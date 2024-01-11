import { OfficeProfile } from "@/typing";
export const fetchOfficeProfile = async () => {
  const res = await fetch(`http://localhost:3000//api/getOfficeProfile`);
  console.log(res);
  const data = await res.json();
  const officeProfile: OfficeProfile[] = data.officeProfile;

  return officeProfile;
};
