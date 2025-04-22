import { Player } from '@lottiefiles/react-lottie-player';
import learningAnimation from "../assets/animations/learning.json";
import buildingAnimation from "../assets/animations/building.json";
import jobAnimation from "../assets/animations/job.json";
import arrowAnimation from "../assets/animations/arrow.json"; // Import arrow animation

const LearningJourneySteps = () => {
  return (
    <section className="w-full py-40"> {/* Removed bg-white */}
      <div className="max-w-7xl mx-auto px-4 text-center"> {/* Fixed layout width class */}
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 whitespace-nowrap">
          India’s Leading Tech Training Hub
        </h2>

        <p>Hybrid Learning | Hands-On Projects | Career Support</p>
        {/* Animations */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6"> {/* Reduced gap */}
          <div className="flex flex-col items-center space-y-4">
            <Player autoplay loop src={learningAnimation} className="h-64 w-64" />
          </div>

          {/* Arrow Animation */}
          <div className="flex flex-col items-center space-y-2"> {/* Reduced space-y */}
            <Player autoplay loop src={arrowAnimation} className="h-16 w-16" />
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Player autoplay loop src={buildingAnimation} className="h-64 w-64" />
          </div>

          {/* Arrow Animation */}
          <div className="flex flex-col items-center space-y-2"> {/* Reduced space-y */}
            <Player autoplay loop src={arrowAnimation} className="h-16 w-16" />
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Player autoplay loop src={jobAnimation} className="h-64 w-64" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourneySteps;
