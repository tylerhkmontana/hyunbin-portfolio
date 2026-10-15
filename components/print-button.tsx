"use client";

export function PrintButton() {
  return (
    <button className="button button-dark" type="button" onClick={() => window.print()}>
      Print / Save as PDF
    </button>
  );
}
