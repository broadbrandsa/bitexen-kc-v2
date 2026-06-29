export function Footer() {
  return (
    <footer className="border-t border-[var(--kc-line)] bg-[var(--kc-ink)] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
        <div className="text-xs uppercase tracking-[0.32em] text-[var(--kc-mute)]">
          Prepared by Bitexen · for Kaizer Chiefs leadership
        </div>
        <div className="text-xs text-[var(--kc-mute)]">
          Kaizer Chiefs × Bitexen · Digital Fan Economy · 2026 · Confidential
        </div>
      </div>
    </footer>
  );
}
