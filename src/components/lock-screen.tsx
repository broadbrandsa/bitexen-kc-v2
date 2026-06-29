"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChiefMark } from "@/components/chief-mark";

const CORRECT_CODE = "1970";
const STORAGE_KEY = "bitexen_kc_v2_unlocked";

export function LockScreen({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [unlockSteps, setUnlockSteps] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      setUnlocked(saved === "true");
    } catch {
      setUnlocked(false);
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (code === CORRECT_CODE) {
      const steps = ["Verifying...", "Identity confirmed", "Clearance granted", "Access granted"];
      let i = 0;
      const interval = setInterval(() => {
        if (i < steps.length) {
          setUnlockSteps((prev) => [...prev, steps[i]]);
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setExiting(true);
            setTimeout(() => {
              try { localStorage.setItem(STORAGE_KEY, "true"); } catch {}
              setUnlocked(true);
            }, 900);
          }, 400);
        }
      }, 350);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
        setCode("");
      }, 700);
    }
  }, [code]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") handleSubmit();
    },
    [handleSubmit]
  );

  if (unlocked === null) return null;
  if (unlocked) return <>{children}</>;

  return (
    <>
      <div
        className={`lock-overlay ${exiting ? "lock-exiting" : ""} ${error ? "lock-shake" : ""}`}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--kc-ink)",
          overflow: "hidden",
        }}
      >
        {/* Background effects */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "50vh",
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(224,156,42,0.10) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "40vh",
            background:
              "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(184,122,20,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(224,156,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(224,156,42,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-md w-full">
          {/* Logo */}
          <ChiefMark className="h-12 md:h-14 w-auto" />

          {/* Thin line separator */}
          <div
            className="w-12 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--kc-gold), transparent)",
            }}
          />

          {/* Code input */}
          <div className="w-full max-w-xs">
            <input
              ref={inputRef}
              type="password"
              inputMode="numeric"
              autoComplete="off"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter access code"
              autoFocus
              className="w-full px-5 py-4 rounded-2xl text-center text-sm font-semibold tracking-[0.4em] transition-all duration-200 outline-none"
              style={{
                background: error ? "rgba(239,68,68,0.08)" : "rgba(224,156,42,0.04)",
                border: error
                  ? "1px solid rgba(239,68,68,0.4)"
                  : code
                  ? "1px solid rgba(224,156,42,0.4)"
                  : "1px solid rgba(224,156,42,0.12)",
                color: error ? "rgba(239,68,68,0.9)" : "var(--kc-paper)",
                boxShadow: code && !error ? "0 0 40px rgba(224,156,42,0.08)" : "none",
              }}
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, rgba(224,156,42,0.18), rgba(184,122,20,0.18))",
              border: "1px solid rgba(224,156,42,0.28)",
              color: "var(--kc-gold-soft)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(224,156,42,0.30), rgba(184,122,20,0.30))";
              e.currentTarget.style.borderColor = "rgba(224,156,42,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(224,156,42,0.18), rgba(184,122,20,0.18))";
              e.currentTarget.style.borderColor = "rgba(224,156,42,0.28)";
            }}
          >
            Unlock
          </button>

          {/* Error */}
          {error && (
            <p
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: "rgba(239,68,68,0.7)" }}
            >
              Incorrect code
            </p>
          )}

          {/* Unlock steps */}
          {unlockSteps.length > 0 && (
            <div className="flex flex-col gap-1.5 mt-2">
              {unlockSteps.map((step, i) => (
                <span
                  key={i}
                  className="text-[10px] font-semibold tracking-wider uppercase"
                  style={{
                    color: "var(--kc-gold)",
                    animation: "unlockStep 0.3s ease both",
                  }}
                >
                  {step}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ visibility: "hidden", pointerEvents: "none" }}>{children}</div>
    </>
  );
}
