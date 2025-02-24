"use client";

import { useTranslation } from "@/Hooks/useTranslation";

export default function Footer() {
  const t = useTranslation();

  return (
    <footer className="bg-black text-white py-6 px-4 mt-10 border-t border-gray-700">
      <div className="container mx-auto flex flex-col items-center text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Alan Ríos. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
