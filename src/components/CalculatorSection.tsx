import React, { useState } from 'react';
import { DollarSign, Clock, Calendar, TrendingUp, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CalculatorSectionProps {
  onDeploy: (teamSize: number, hours: number, cost: number, savings: number) => void;
  onNotify: (title: string, message: string) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onDeploy, onNotify }) => {
  const [teamSize, setTeamSize] = useState<number>(10);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(15);
  const [hourlyCost, setHourlyCost] = useState<number>(35);

  // Calculations
  const annualManualCost = teamSize * hoursPerWeek * hourlyCost * 52;
  const annualSavings = Math.round(annualManualCost * 0.70);
  const annualDigitalFteCost = annualManualCost - annualSavings;
  const totalHoursSaved = teamSize * hoursPerWeek * 52;
  const paybackDays = Math.max(14, Math.round(9000 / (annualSavings / 365)));
  const threeYearRoi = Math.round(annualSavings * 3);

  const handleDeployClick = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    onNotify('ROI Model Loaded', `Target savings of $${annualSavings.toLocaleString()}/yr passed to consultation.`);
    onDeploy(teamSize, hoursPerWeek, hourlyCost, annualSavings);
  };

  return (
    <div id="calculator" className="py-24 bg-[#f8fafc] relative border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold font-mono shadow-xs">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Deterministic Financial Model</span>
          </div>
          {/* Single Solid Heading Color */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-heading">
            Digital FTE ROI Calculator
          </h2>
          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto">
            Estimate your annual operational cost savings and productivity gains by deploying AsNexa autonomous Digital FTEs.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="bg-white p-6 sm:p-12 rounded-3xl border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Sliders Input Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Slider 1: Team Size */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-800">Operations Team Size</span>
                <span className="text-blue-700 font-mono text-base px-3 py-1 rounded-xl bg-blue-50 border border-blue-200 font-bold">
                  {teamSize} members
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={teamSize}
                onChange={e => setTeamSize(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>1 member</span>
                <span>50 members</span>
                <span>100 members</span>
              </div>
            </div>

            {/* Slider 2: Repetitive Task Hours */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-800">Repetitive Task Hours / Week per Person</span>
                <span className="text-indigo-700 font-mono text-base px-3 py-1 rounded-xl bg-indigo-50 border border-indigo-200 font-bold">
                  {hoursPerWeek} hrs/week
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="35"
                value={hoursPerWeek}
                onChange={e => setHoursPerWeek(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>5 hrs (Light)</span>
                <span>20 hrs (Average)</span>
                <span>35 hrs (Heavy Manual)</span>
              </div>
            </div>

            {/* Slider 3: Hourly Employee Cost */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-800">Average Hourly Employee Cost ($)</span>
                <span className="text-blue-700 font-mono text-base px-3 py-1 rounded-xl bg-blue-50 border border-blue-200 font-bold">
                  ${hourlyCost} / hr
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="150"
                value={hourlyCost}
                onChange={e => setHourlyCost(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>$15/hr</span>
                <span>$75/hr</span>
                <span>$150/hr</span>
              </div>
            </div>

            {/* 3D Visual Comparison Bar */}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block font-bold">
                Cost Comparison: Manual vs. AsNexa Digital FTE
              </span>
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-600">Current Manual OPEX:</span>
                    <span className="text-rose-600 font-bold">${annualManualCost.toLocaleString()}/yr</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div className="h-full bg-rose-500 rounded-full w-full" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-600">With AsNexa Digital FTE (70% Saved):</span>
                    <span className="text-emerald-700 font-bold">${annualDigitalFteCost.toLocaleString()}/yr</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full w-[30%]" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Output Display Card (5 cols) */}
          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg space-y-6 text-center">
            
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2 font-bold">
                Estimated Annual Net Savings
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-600 font-heading tracking-tight">
                ${annualSavings.toLocaleString()}
              </div>
              <span className="text-xs text-slate-600 font-mono mt-1 block">
                70% baseline operational reduction
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-slate-200 text-xs">
              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <Clock className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <span className="text-slate-500 block mb-1">Hours Liberated</span>
                <strong className="text-slate-900 font-mono text-sm">{totalHoursSaved.toLocaleString()} hrs/yr</strong>
              </div>

              <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <Calendar className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <span className="text-slate-500 block mb-1">Payback Period</span>
                <strong className="text-slate-900 font-mono text-sm">~{paybackDays} Days</strong>
              </div>
            </div>

            <div className="space-y-2 text-left text-xs text-slate-700 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>3-Year Cumulative Savings: <strong>${threeYearRoi.toLocaleString()}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600 shrink-0" />
                <span>SOC2 Type II &amp; Enterprise RBAC ready</span>
              </div>
            </div>

            <button
              onClick={handleDeployClick}
              className="w-full bg-[#1D63FF] hover:bg-blue-600 text-white font-bold text-sm py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Lock in This ROI Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
