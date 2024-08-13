import { css } from "@repo/styled-system/css";
import { CounterButton, Link } from "@repo/ui";

export default function Index(): JSX.Element {
  return (
    <div
      className={css({
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        maxWidth: "100%",
        margin: "0 auto",
        padding: "0 16px",
        textAlign: "center",
      })}
    >
      <h1
        className={css({
          fontSize: "3rem",
          fontWeight: "700",
          margin: "0",
          "& span": {
            display: "inline-block",
            backgroundImage: "linear-gradient(to right, #3b82f6, #ef4444)",
            backgroundClip: "text",
            color: "transparent",
          },
        })}
      >
        Blog <br />
        <span>Kitchen Sink</span>
      </h1>
      <CounterButton />
      <p
        className={css({
          color: "#9ca3af",
          fontWeight: "500",
          "& a": {
            color: "#3b82f6",
            textDecoration: "none",
            _hover: {
              textDecoration: "underline",
            },
          },
        })}
      >
        Built With <Link href="https://turbo.build/repo">Turborepo</Link>
        {" & "}
        <Link href="https://remix.run/">Remix</Link>
      </p>
    </div>
  );
}
