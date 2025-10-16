'use client';

import { useState } from 'react';

type DiceType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100';

interface DiceConfig {
  type: DiceType;
  label: string;
  sides: number;
  shape: string;
}

const diceTypes: DiceConfig[] = [
  { type: 'd4', label: 'D4', sides: 4, shape: '△' },
  { type: 'd6', label: 'D6', sides: 6, shape: '⬛' },
  { type: 'd8', label: 'D8', sides: 8, shape: '◆' },
  { type: 'd10', label: 'D10', sides: 10, shape: '⬟' },
  { type: 'd12', label: 'D12', sides: 12, shape: '⬡' },
  { type: 'd20', label: 'D20', sides: 20, shape: '⬢' },
  { type: 'd100', label: 'D100', sides: 100, shape: '⊛' },
];

type DiceQuantities = Record<DiceType, number>;

interface RollHistory {
  id: number;
  timestamp: Date;
  total: number;
  rolls: { type: DiceType; value: number }[];
}

export default function DiceRoller() {
  const [quantities, setQuantities] = useState<DiceQuantities>({
    d4: 0,
    d6: 0,
    d8: 0,
    d10: 0,
    d12: 0,
    d20: 0,
    d100: 0,
  });
  const [selectedDice, setSelectedDice] = useState<DiceType | null>(null);
  const [result, setResult] = useState<number | null>(null);
  const [rolls, setRolls] = useState<{ type: DiceType; value: number }[]>([]);
  const [history, setHistory] = useState<RollHistory[]>([]);
  const [isRolling, setIsRolling] = useState(false);

  const getActiveDiceType = (): DiceType | null => {
    for (const [type, qty] of Object.entries(quantities)) {
      if (qty > 0) return type as DiceType;
    }
    return null;
  };

  const incrementDice = (type: DiceType, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantities(prev => ({
      ...prev,
      [type]: Math.min(prev[type] + 1, 99),
    }));
  };

  const decrementDice = (type: DiceType, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuantities(prev => ({
      ...prev,
      [type]: Math.max(prev[type] - 1, 0),
    }));
  };

  const rollDice = () => {
    const totalDice = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
    if (totalDice === 0) return;

    setIsRolling(true);
    const newRolls: { type: DiceType; value: number }[] = [];

    Object.entries(quantities).forEach(([type, qty]) => {
      const diceConfig = diceTypes.find(d => d.type === type);
      if (!diceConfig || qty === 0) return;

      for (let i = 0; i < qty; i++) {
        newRolls.push({
          type: type as DiceType,
          value: Math.floor(Math.random() * diceConfig.sides) + 1,
        });
      }
    });

    setTimeout(() => {
      const total = newRolls.reduce((sum, roll) => sum + roll.value, 0);
      setRolls(newRolls);
      setResult(total);
      setHistory(prev => [
        {
          id: Date.now(),
          timestamp: new Date(),
          total,
          rolls: newRolls,
        },
        ...prev,
      ]);
      setIsRolling(false);
    }, 500);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Dice Selector */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-green-600 dark:text-cyan-400 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Select Your Dice
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {diceTypes.map((dice) => {
            const activeDiceType = getActiveDiceType();
            const isDisabled = activeDiceType !== null && activeDiceType !== dice.type;

            return (
            <div
              key={dice.type}
              className="relative"
              onMouseEnter={() => !isDisabled && setSelectedDice(dice.type)}
              onMouseLeave={() => setSelectedDice(null)}
              onClick={() => {
                if (isDisabled) return;
                if (quantities[dice.type] === 0) {
                  setQuantities(prev => ({ ...prev, [dice.type]: 1 }));
                } else {
                  setQuantities(prev => ({ ...prev, [dice.type]: 0 }));
                }
              }}
            >
              <div
                className={`
                  relative p-6 rounded-lg border-2 transition-all duration-200
                  flex flex-col items-center justify-center gap-2
                  ${isDisabled
                    ? 'bg-gray-600/30 dark:bg-gray-800/30 border-gray-500/30 dark:border-gray-700/30 opacity-40 cursor-not-allowed'
                    : quantities[dice.type] > 0
                      ? 'bg-gradient-to-br from-green-600 to-green-400 dark:from-cyan-500 dark:to-purple-600 border-green-400 dark:border-cyan-400 shadow-[0_0_20px_rgba(34,197,94,0.5)] dark:shadow-[0_0_20px_rgba(34,211,238,0.5)] cursor-pointer'
                      : 'bg-purple-800/50 dark:bg-purple-900/50 border-purple-600 dark:border-purple-500 hover:border-green-500 dark:hover:border-cyan-400 hover:bg-purple-700/50 dark:hover:bg-purple-800/50 cursor-pointer'
                  }
                `}
              >
                {quantities[dice.type] >= 2 && (
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 bg-purple-900 dark:bg-purple-950 text-green-200 dark:text-cyan-300 font-bold text-lg px-3 py-1 rounded-full border-2 border-green-400 dark:border-cyan-500">
                    {quantities[dice.type]}
                  </span>
                )}
                <span className="text-5xl">{dice.shape}</span>
                <span className="text-xl font-bold text-green-100 dark:text-cyan-300">{dice.label}</span>
              </div>

              {/* Plus/Minus Controls */}
              {selectedDice === dice.type && quantities[dice.type] > 0 && !isDisabled && (
                <div className="absolute top-0 left-0 right-0 flex justify-between p-2 z-10">
                  <button
                    onClick={(e) => decrementDice(dice.type, e)}
                    className="w-8 h-8 rounded-full bg-red-600 dark:bg-red-700 hover:bg-red-500 dark:hover:bg-red-600 text-white font-bold text-xl flex items-center justify-center border-2 border-red-400 dark:border-red-500 shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
                  >
                    −
                  </button>
                  <button
                    onClick={(e) => incrementDice(dice.type, e)}
                    className="w-8 h-8 rounded-full bg-green-600 dark:bg-green-700 hover:bg-green-500 dark:hover:bg-green-600 text-white font-bold text-xl flex items-center justify-center border-2 border-green-400 dark:border-green-500 shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
            );
          })}
          </div>

          {/* Roll Button */}
          <div className="flex justify-center">
            <button
              onClick={rollDice}
              disabled={isRolling}
              className="bg-gradient-to-r from-green-600 to-green-400 dark:from-cyan-600 dark:to-purple-600 hover:from-green-500 hover:to-green-300 dark:hover:from-cyan-500 dark:hover:to-purple-500
                       disabled:from-gray-600 disabled:to-gray-500 dark:disabled:from-gray-700 dark:disabled:to-gray-600 disabled:cursor-not-allowed
                       text-white font-bold text-2xl px-12 py-4 rounded-xl
                       border-4 border-green-400 dark:border-cyan-400 shadow-[0_0_30px_rgba(34,197,94,0.5)] dark:shadow-[0_0_30px_rgba(34,211,238,0.5)]
                       transition-all duration-200 hover:scale-105 active:scale-95
                       disabled:shadow-none disabled:scale-100"
            >
              {isRolling ? '🎲 Rolling...' : '🎲 Roll Dice!'}
            </button>
          </div>
        </div>

        {/* Right Column - Results and History */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-green-600 dark:text-cyan-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Results & History
            </h2>
            {history.length > 0 && (
              <button
                onClick={clearHistory}
                className="px-3 py-1 text-sm bg-red-600/70 dark:bg-red-700/70 hover:bg-red-500 dark:hover:bg-red-600 text-white font-semibold rounded-lg border-2 border-red-500 transition-all duration-200"
              >
                Clear History
              </button>
            )}
          </div>

          {/* Current Result */}
          {result !== null && (
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 dark:from-purple-950 dark:to-indigo-950 border-4 border-green-600 dark:border-cyan-600 rounded-xl p-6 shadow-[0_0_30px_rgba(34,197,94,0.3)] dark:shadow-[0_0_30px_rgba(34,211,238,0.3)] animate-in fade-in duration-500">
              <h3 className="text-xl font-bold text-green-400 dark:text-cyan-300 text-center mb-3">
                Latest Roll
              </h3>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-400 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent mb-3">
                  {result}
                </div>
                {rolls.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {rolls.map((roll, index) => (
                      <span
                        key={index}
                        className="bg-purple-800/50 dark:bg-purple-900/50 border-2 border-green-600 dark:border-cyan-500 rounded-lg px-3 py-2 text-green-200 dark:text-cyan-200 font-bold"
                        title={`${roll.type.toUpperCase()}`}
                      >
                        {roll.value}
                        <span className="text-xs ml-1 opacity-75">({roll.type})</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* History */}
          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
            {history.length <= 1 ? (
              <div className="text-center text-green-400/50 dark:text-cyan-200/50 py-12">
                {history.length === 0 ? 'No rolls yet. Select dice and roll to see history!' : 'Roll more dice to build your history!'}
              </div>
            ) : (
              history.slice(1).map((entry, index) => (
                <div
                  key={entry.id}
                  className="bg-purple-800/30 dark:bg-purple-900/30 border-2 border-purple-600/50 dark:border-purple-500/50 rounded-lg p-4 hover:border-green-500/50 dark:hover:border-cyan-500/50 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-green-400 dark:text-cyan-300">
                      {entry.total}
                    </span>
                    <span className="text-xs text-green-300/70 dark:text-cyan-200/70">
                      {entry.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {entry.rolls.map((roll, rollIndex) => (
                      <span
                        key={rollIndex}
                        className="bg-purple-700/30 dark:bg-purple-800/30 border border-purple-500/50 rounded px-2 py-1 text-xs text-green-200 dark:text-cyan-200"
                      >
                        {roll.value} ({roll.type})
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
