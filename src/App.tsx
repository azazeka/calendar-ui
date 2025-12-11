import { CosmicCalendar } from "./components/cosmic/CosmicCalendar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-hidden font-sans antialiased selection:bg-purple-500/30">
      <CosmicCalendar />
    </div>
  );
}
