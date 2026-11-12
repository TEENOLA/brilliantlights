export type Tone = "teal" | "yellow" | "cyan" | "blue";

/** Placeholder palettes: fill, dashed edge and label colour for each tone. */
export const toneClasses: Record<Tone, string> = {
  teal: "bg-[#c9ecec] border-[#5fb3b0] text-[#0a5a57]",
  yellow: "bg-[#fdeaa0] border-[#d9b03a] text-[#6b4f00]",
  cyan: "bg-[#c7eaf2] border-[#5db9cc] text-[#0f5566]",
  blue: "bg-[#d3e2f7] border-[#7ea3d6] text-[#1c3f78]",
};

export const toneRotation: Tone[] = ["teal", "yellow", "cyan", "blue"];

export function toneAt(index: number): Tone {
  return toneRotation[index % toneRotation.length];
}
