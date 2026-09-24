import { ImageResponse } from "next/og";
import { institut } from "@/content/institut";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F4EDE3",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#6B5F54",
            marginBottom: 28,
          }}
        >
          Institut de beauté · Saint-Vit
        </div>
        <div style={{ display: "flex", fontSize: 82, color: "#2B2420" }}>{institut.nom}</div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontStyle: "italic",
            color: "#7A5F30",
            marginTop: 20,
          }}
        >
          Virginie vous accueille depuis {institut.anneesExperience} ans
        </div>
      </div>
    ),
    { ...size },
  );
}
