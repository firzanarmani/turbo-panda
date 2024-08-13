import { log } from "@repo/logger";
import { css } from "@repo/styled-system/css";
import { CounterButton, Link } from "@repo/ui";

export const metadata = {
  title: "Store | Kitchen Sink",
};

export default function Store(): JSX.Element {
  log("Hey! This is the Store page.");

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
        Store <br />
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
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://nextjs.org/" newTab>
          Next.js
        </Link>
      </p>
    </div>
  );
}
