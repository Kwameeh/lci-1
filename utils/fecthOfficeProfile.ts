import { OfficeProfile } from "@/typing";
export const fetchOfficeProfile = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getOfficeProfile`,
  );
  console.log(res);
  const data = await res.json();
  const officeProfile: OfficeProfile[] = data.officeProfile;

  return officeProfile;
};
