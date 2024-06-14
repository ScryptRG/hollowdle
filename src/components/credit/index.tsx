import Link from "next/link";

export default function Credit() {
  return (
    <p className="absolute top-3 left-3 text-white">
      Developed with &#9829; by{" "}
      <Link
        href={"https://github.com/ScryptRG"}
        target="_blank"
        className="text-blue-200 hover:underline"
      >
        ScryptRG
      </Link>{" "}
      &copy; 2024
    </p>
  );
}
