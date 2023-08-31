import React, { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { ISourceOptions } from "tsparticles-engine";


const ParticleBackground: React.FC<{ options: ISourceOptions }> = ({ options }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
  }, []);
  
  return (
    <div
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
};

export default ParticleBackground;
