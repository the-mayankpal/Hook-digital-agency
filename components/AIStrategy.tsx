
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface AIStrategyProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIStrategy: React.FC<AIStrategyProps> = ({ isOpen, onClose }) => {
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const generateStrategy = async () => {
    if (!niche.trim()) return;
    
    setLoading(true);
    setError(null);
    setResult([]);

    try {
      // Robust check for API key to prevent crashes in non-configured environments
      const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : null;
      
      if (!apiKey) {
        throw new Error("API configuration is currently unavailable for this preview. Please book a call for a personalized strategy.");
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a senior content strategist for a luxury UGC agency. Generate 3 high-converting "Hooks" for a brand in the ${niche} niche. 
        Each hook should follow the short-form video (TikTok/Reels) format.
        Return ONLY the hooks as a numbered list.`,
      });

      const text = response.text || '';
      const lines = text.split('\n').filter(l => l.trim().match(/^\d\./)).map(l => l.replace(/^\d\.\s*/, ''));
      setResult(lines.length > 0 ? lines : [text]);
    } catch (err: any) {
      console.error("AI Generation failed:", err);
      setError(err.message || "Failed to generate ideas. Our AI is currently scaling.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-card-dark w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold tracking-tight">AI Content Strategy</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
              <span className="material-icons-outlined text-gray-400">close</span>
            </button>
          </div>

          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Enter your brand's niche and let our AI suggest 3 high-impact hooks to stop the scroll.
          </p>

          <div className="space-y-6">
            <div className="relative">
              <input 
                type="text" 
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="e.g. Luxury Skincare, Eco-friendly Fashion"
                className="w-full bg-gray-50 dark:bg-zinc-900 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-black dark:focus:ring-white transition-all outline-none text-lg font-medium"
                onKeyDown={(e) => e.key === 'Enter' && generateStrategy()}
              />
            </div>

            <button 
              onClick={generateStrategy}
              disabled={loading || !niche.trim()}
              className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-2xl font-bold text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="material-icons-outlined animate-spin">sync</span>
                  Analyzing Trends...
                </>
              ) : (
                'Generate Hooks'
              )}
            </button>

            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl text-sm font-medium border border-red-100 dark:border-red-900/30">
                {error}
              </div>
            )}

            {result.length > 0 && (
              <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400">Viral Hooks:</h4>
                {result.map((hook, i) => (
                  <div key={i} className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-xl border-l-4 border-black dark:border-white text-sm md:text-base italic font-medium">
                    "{hook}"
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIStrategy;
