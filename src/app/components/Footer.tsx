import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Isna Qurrotul Uyun.
        </p>
      </div>
    </footer>
  );
};
