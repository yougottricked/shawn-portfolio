import { ImageResponse } from "next/og";
import { PROFILE } from "@/lib/constants";

export const alt = `${PROFILE.name}, ${PROFILE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Link preview card in the site palette (see globals.css). */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#fdf7ed",
          color: "#43352b",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#7a6248" }}>{PROFILE.location}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{PROFILE.name}</div>
          <div style={{ marginTop: 12, fontSize: 40, color: "#7a6248" }}>{PROFILE.role}</div>
        </div>
        <div style={{ display: "flex", borderTop: "2px solid #d9c7b0", paddingTop: 28, fontSize: 28 }}>
          AkuaVerse · LWICMS · RescueNet · Deep learning
        </div>
      </div>
    ),
    size
  );
}
