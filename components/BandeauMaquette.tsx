import { institut } from "@/content/institut";

export function BandeauMaquette() {
  if (!institut.maquette) return null;

  return (
    <div className="bg-encre px-4 py-2 text-center text-xs text-creme">
      Maquette de présentation — certains contenus sont donnés à titre d&apos;exemple.
    </div>
  );
}

export function MentionExemple() {
  return (
    <span className="mt-1 inline-block text-[0.68rem] italic text-taupe-texte">
      exemple de présentation
    </span>
  );
}
