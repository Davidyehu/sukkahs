import React from "react";
import scenarios from "@/data/scenarios";
import MainCanvas from "@/components/three-components/canvas";
import styles from "./page.module.scss";
import Sukkah from "@/components/three-components/sukkah";

export const dynamicParams = false;

export async function generateStaticParams() {
  return scenarios.map((scenario) => ({
    params: { slug: scenario.slug },
  }));
}

export default function Halacha({ params }: { params: { slug: string } }) {
  const scenario = scenarios.find((scenario) => params.slug == scenario.slug);
  return (
    <div className={styles.container}>
      <h1>
        {
          scenarios.find((scenario) => params.slug == scenario.slug)
            ?.description
        }
      </h1>
      <div className={styles.canvasContainer}>
        {scenario ? (
          <MainCanvas
            pointLightPosition={scenario.props.pointLightPosition}
            pointLightIntensity={scenario.props.pointLightIntensity}
          >
            <Sukkah
              dimensions={scenario?.props.dimensions}
              walls={scenario.props.walls}
              schach={scenario.props.schach}
            />
          </MainCanvas>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}
