import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-block" aria-label="Cruip">
      <span className="bg-[linear-gradient(to_right,var(--color-indigo-400),var(--color-cyan-400))] bg-clip-text text-2xl font-extrabold tracking-tighter text-transparent">
        V.K
      </span>
    </Link>
  );
}