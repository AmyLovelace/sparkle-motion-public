import type { ISourceOptions } from "tsparticles-engine";

const options: ISourceOptions = {
    name: "Slow",
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
        },
        size: {
            value: {
                min: 0.5,
                max: 1,
            },
        },
        links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "slow",
                parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                },
            },
            onClick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 4,
                opacity: 0.8,
            },
            repulse: {
                distance: 200,
            },
            push: {
                quantity: 1,
            },
            remove: {
                quantity: 2,
            },
            slow: {
                radius: 100,
                factor: 3,
            },
        },
    },

};
export default options;