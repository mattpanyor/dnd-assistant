import DiceRoller from '@/components/DiceRoller';
import DiceBackground from '@/components/DiceBackground';

export default function DicePage() {
  return (
    <>
      <DiceBackground />
      <div className="flex-1 flex items-start justify-center pt-4 pb-12">
        <DiceRoller />
      </div>
    </>
  );
}
