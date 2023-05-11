// import { LoadingSvg } from "@/app/components/svg";

import Image from "next/image";
import loading from "../../assets/svg/loading.svg";

export default function Loading() {
  return (
    <div className="h-max">
      <Image src={loading} alt={"Loading"} width={200} height={200} />
    </div>
  );
}
