import Image from "next/image";
import primaryImage from "@/assets/primary.png";

export default function Home() {
  return (
    <div className="fixed inset-0 w-screen h-screen">
      <Image
        src={primaryImage}
        alt="Primary"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
