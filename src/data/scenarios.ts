type Scenario = {
    slug: string;
    description: string;
    props: {
        dimensions: {
            height: number;
            width: number;
            depth: number;
        };
        pointLightIntensity: number;
        pointLightPosition: [number, number, number];
        walls?: number;
        schach?: number;
        ruler?: boolean;
    };
};

const scenarios: Scenario[] = [
    {
        slug: 'taller-than-20-amos',
        description: 'סוכה שהוא גבוהה למעלה מעשרים אמה פסולה',
        props: {
            dimensions: {
                height: 21,
                width: 10,
                depth: 10,
            },
            pointLightIntensity: 100,
            pointLightPosition: [0, 15, 0],
            ruler: true,
        }
    },
    {
        slug: 'shorter-than-10-tefachim',
        description: 'ושאינה גבוהה עשרה טפחים פסולה',
        props: {
            dimensions: {
                height: 9,
                width: 10,
                depth: 10,
            },
            pointLightIntensity: 50,
            pointLightPosition: [0, 7, 0],
            ruler: true,
        }
    },
    {
        slug: 'no-3-walls',
        description: 'ושאין לה שלש דפנות פסולה',
        props: {
            dimensions: {
                height: 10,
                width: 10,
                depth: 10,
            },
            pointLightIntensity: 50,
            pointLightPosition: [0, 8, 0],
            walls: 2,
        }
    },
    {
        slug: 'more-sun-than-shade',
        description: 'ושחמתה מרובה מצלתה פסולה',
        props: {
            dimensions: {
                height: 10,
                width: 10,
                depth: 10,
            },
            pointLightIntensity: 50,
            pointLightPosition: [0, 8, 0],
            schach: .4,
        }
    }
];

export default scenarios;