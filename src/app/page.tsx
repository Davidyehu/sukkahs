import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import scenarios from "@/data/scenarios";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Links:</h1>
      {scenarios.map((scenario) => (
        <Link key={scenario.slug} href={scenario.slug}>
          <h1>{scenario.description}</h1>
        </Link>
      ))}
    </main>
  );
}
