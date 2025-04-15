import { Player } from '@lottiefiles/react-lottie-player';
import learningAnimation from "../assets/animations/learning.json";
import buildingAnimation from "../assets/animations/building.json";
import jobAnimation from "../assets/animations/job.json";

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
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex flex-col items-center space-y-4">
            <Player autoplay loop src={learningAnimation} className="h-64 w-64" />
            <p className="text-lg font-medium text-gray-700">Learning</p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Player autoplay loop src={buildingAnimation} className="h-64 w-64" />
            <p className="text-lg font-medium text-gray-700">Building Projects</p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <Player autoplay loop src={jobAnimation} className="h-64 w-64" />
            <p className="text-lg font-medium text-gray-700">Got the Job</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourneySteps;
