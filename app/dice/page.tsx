import DiceRoller from '@/components/DiceRoller';
import DiceBackground from '@/components/DiceBackground';

export default function DicePage() {
  return (
    <>
      <DiceBackground />
      <main className="flex-1 flex items-center justify-center py-12 min-h-screen">
        <DiceRoller />
      </main>
    </>
  );
}
