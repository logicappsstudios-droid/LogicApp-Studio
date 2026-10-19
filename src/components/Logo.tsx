/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return null;
}

export function BrandLogo({ isDark = false }: { isDark?: boolean }) {
  return (
    <div className="flex flex-col group">
      <div className="text-lg sm:text-xl font-extrabold tracking-tight leading-none flex items-center gap-1.5">
        <span className={isDark ? 'text-white' : 'text-slate-900'}>Logic</span>
        <span className="text-blue-500">App</span>
      </div>
      <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] text-slate-400 uppercase pt-1">
        Studios
      </span>
    </div>
  );
}
