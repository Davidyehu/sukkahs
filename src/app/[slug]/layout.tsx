"use client";
import React from "react";
import scenarios from "@/data/scenarios";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "./layout.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const currentScenario = scenarios.findIndex(
    (scenario) => scenario.slug == pathname.slice(1)
  );
  
  return (
    <div className={styles.mainContainer}>
      <Link
        href={
          scenarios[
            currentScenario - 1 > -1
              ? currentScenario - 1
              : scenarios.length - 1
          ].slug
        }
      >
        <NavigateBeforeIcon />
      </Link>
      {children}
      <Link
        href={
          scenarios[
            currentScenario + 1 < scenarios.length ? currentScenario + 1 : 0
          ].slug
        }
      >
        <NavigateNextIcon />
      </Link>
    </div>
  );
}
