// FLOW: Halaman Detail
export default function LobbyDetail({ params }) {
  // Disini nanti fetch data dari Backend Laravel pakai params.slug
  
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-[#0F172A] border border-slate-800 rounded-2xl p-8 shadow-2xl relative">
        
        {/* Tombol Back (Kembali ke Home) */}
        <a href="/" className="text-slate-400 hover:text-white text-sm mb-6 inline-block">
          &larr; Kembali cari squad
        </a>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
            {/* Logo Game Disini */}
            <span className="font-bold text-xl">HOK</span>
          </div>
          <div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold">Push Rank Mythic Fast</h1>
            <p className="text-yellow-400 font-medium mt-1">Tier: Grandmaster V keatas</p>
          </div>
        </div>

        {/* FLOW: Tampilan Detail Syarat Mabar */}
        <div className="space-y-4 mb-8 text-slate-300 leading-relaxed border-t border-b border-slate-800 py-6">
          <p>Dicari roamer dan mage yang peka map. No toxic, mic on kalau bisa. Kita main jam 8 malam ini sampai winstreak.</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-400">
            <li>Minimal WR 55%</li>
            <li>Bisa open mic</li>
            <li>Serius tapi santai</li>
          </ul>
        </div>

        {/* FLOW: Action Buttons (Tertarik / Tidak) */}
        <div className="flex gap-4">
          {/* FLOW: Klik tombol "Hubungi via WA" */}
          <a 
            href="https://wa.me/628123456789" 
            target="_blank"
            className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl text-center transition-all flex items-center justify-center gap-2"
          >
            <span>Chat WhatsApp</span>
          </a>
          
          {/* FLOW: Tombol Share/Simpan (Opsional) */}
          <button className="px-4 py-3 border border-slate-700 rounded-xl hover:bg-slate-800 transition-all text-slate-400">
            Share
          </button>
        </div>

      </div>
    </main>
  );
}