import "./App.css";
import { SparklesCore } from "./components/ui/sparkles";

function App() {
  return (
    <div className="border">
      <div className="min-h-screen  relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
