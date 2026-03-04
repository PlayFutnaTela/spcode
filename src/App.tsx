import { useState, useEffect } from 'react';
import { transpileCode } from './transpiler';
import { defaultCode, tagMapping, attributeMapping } from './slangDictionary';
import { Code2, Play, BookOpen, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [inputCode, setInputCode] = useState(defaultCode);
  const [compiledHtml, setCompiledHtml] = useState('');
  const [showDictionary, setShowDictionary] = useState(false);

  useEffect(() => {
    const html = transpileCode(inputCode);
    setCompiledHtml(html);
  }, [inputCode]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="bg-neutral-900 border-b border-neutral-800 p-4 flex items-center justify-between shrink-0 z-10">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
            <Terminal className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Paulista Code Editor</h1>
            <p className="text-xs text-neutral-500 font-mono">v1.0.0 // SP-BR</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowDictionary(!showDictionary)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors border border-neutral-700 text-sm font-medium"
          >
            <BookOpen className="w-4 h-4" />
            {showDictionary ? 'Esconder Dicionário' : 'Ver Dicionário'}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden relative">
        
        {/* Editor & Preview Split */}
        <div className="flex-1 flex flex-col md:flex-row h-full">
          
          {/* Editor Section */}
          <div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-neutral-800 min-h-[50%] md:min-h-0 bg-neutral-950">
            <div className="bg-neutral-900/50 px-4 py-2 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-neutral-400">
                <Code2 className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider">Editor (Gíria)</span>
              </div>
            </div>
            <textarea
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="flex-1 w-full bg-neutral-950 p-4 font-mono text-sm text-emerald-400 focus:outline-none resize-none leading-relaxed selection:bg-emerald-500/30"
              spellCheck={false}
              placeholder="Escreve sua fita aqui..."
            />
          </div>

          {/* Preview Section */}
          <div className="flex-1 flex flex-col min-h-[50%] md:min-h-0 bg-white">
            <div className="bg-neutral-100 px-4 py-2 border-b border-neutral-200 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 text-neutral-600">
                <Play className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider">Resultado (HTML)</span>
              </div>
            </div>
            <div className="flex-1 relative w-full h-full">
              <iframe
                srcDoc={compiledHtml}
                title="Preview"
                className="w-full h-full border-none"
                sandbox="allow-scripts"
              />
            </div>
          </div>
        </div>

        {/* Dictionary Sidebar (Overlay on mobile, sidebar on desktop) */}
        {showDictionary && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full md:w-80 bg-neutral-900 border-l border-neutral-800 shadow-2xl z-20 flex flex-col"
          >
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-900">
              <h2 className="font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-500" />
                Dicionário
              </h2>
              <button 
                onClick={() => setShowDictionary(false)}
                className="p-1 hover:bg-neutral-800 rounded-md text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase text-emerald-500 mb-3 font-bold tracking-wider">Tags (Estrutura)</h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(tagMapping).map(([slang, html]) => (
                    <div key={slang} className="bg-neutral-800/50 p-2 rounded border border-neutral-800 flex flex-col">
                      <span className="text-emerald-400 font-mono text-sm font-medium">&lt;{slang}&gt;</span>
                      <span className="text-neutral-500 font-mono text-xs mt-1">&lt;{html}&gt;</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase text-blue-500 mb-3 font-bold tracking-wider">Atributos</h3>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(attributeMapping).map(([slang, html]) => (
                    <div key={slang} className="bg-neutral-800/50 p-2 rounded border border-neutral-800 flex flex-col">
                      <span className="text-blue-400 font-mono text-sm font-medium">{slang}=</span>
                      <span className="text-neutral-500 font-mono text-xs mt-1">{html}=</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </main>
    </div>
  );
}
