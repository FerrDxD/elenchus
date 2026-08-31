export const translations = {
  id: {
    // UI
    'ui.subtitle': 'Simulasi Protokol Logika',
    'ui.status': 'STATUS_SISTEM: AKTIF',
    'ui.user': 'ID_PENGGUNA: AKSES_ROOT',
    'ui.cleared': 'Selesai',
    'ui.locked': 'Terkunci',
    'ui.pending': 'Tersedia',
    'ui.abort': 'BATAL',
    'ui.execute': 'EKSEKUSI',
    'ui.transmission': 'Transmisi Masuk',
    'ui.specs': 'Spesifikasi',
    'ui.par': 'Batas Komponen:',
    'ui.truth_table': 'Tabel Kebenaran',
    'ui.analyzing': 'MENGANALISIS',
    'ui.validating': 'Memvalidasi jalur logika...',
    'ui.components': 'KOMPONEN',
    'ui.locked_alert': 'AKSES DITOLAK: Stage ini terkunci. Harap selesaikan stage sebelumnya terlebih dahulu.',
    'ui.grid': 'PAPAN',
    'ui.tools': 'ALAT',
    
    // Result Panel
    'result.success': 'SISTEM TERTEMBUS',
    'result.fail': 'VALIDASI GAGAL',
    'result.ticks': 'Siklus Waktu:',
    'result.comps': 'Komponen Aktif:',
    'result.par_achieved': 'Tercapai',
    'result.par_failed': 'Gagal',
    'result.next': 'LANJUTKAN',
    'result.retry': 'COBA LAGI',
    'result.mismatch': 'Output logika tidak sesuai',

    // Groups
    'group.Tutorial': 'Tutorial',
    'group.Gerbang Dasar': 'Gerbang Dasar',
    'group.Kombinasi Logika': 'Kombinasi Logika',

    // Tutorials
    'desc.t_wire': 'Transmisi Sistem: Selamat datang di Elencus. Hubungkan sinyal dari INPUT ke OUTPUT menggunakan WIRE (Kabel).',
    'desc.t_and': 'Transmisi Sistem: Gerbang AND. Menghasilkan output 1 HANYA jika KEDUA input bernilai 1.',
    'desc.t_or': 'Transmisi Sistem: Gerbang OR. Menghasilkan output 1 jika SALAH SATU atau KEDUA input bernilai 1.',
    'desc.t_not': 'Transmisi Sistem: Gerbang NOT. Membalikkan sinyal. Input 0 menjadi 1, input 1 menjadi 0.',
    'desc.t_xor': 'Transmisi Sistem: Gerbang XOR (Exclusive OR). Output bernilai 1 HANYA JIKA kedua input BERBEDA (0 dan 1).',
    'desc.t_nand': 'Transmisi Sistem: Gerbang NAND. Ini adalah kebalikan dari AND. Output 0 HANYA JIKA kedua input 1.',
    'desc.t_nor': 'Transmisi Sistem: Gerbang NOR. Kebalikan dari OR. Output 1 HANYA JIKA kedua input 0.',
    'desc.t_xnor': 'Transmisi Sistem: Gerbang XNOR. Kebalikan dari XOR. Output bernilai 1 HANYA JIKA kedua input SAMA (keduanya 0 atau keduanya 1).'
  },
  en: {
    // UI
    'ui.subtitle': 'Logic Protocol Simulation',
    'ui.status': 'SYS_STATUS: ONLINE',
    'ui.user': 'USER_ID: ROOT_ACCESS',
    'ui.cleared': 'Cleared',
    'ui.locked': 'Locked',
    'ui.pending': 'Pending',
    'ui.abort': 'ABORT',
    'ui.execute': 'EXECUTE',
    'ui.transmission': 'Incoming Transmission',
    'ui.specs': 'Specifications',
    'ui.par': 'Par Components:',
    'ui.truth_table': 'Truth Table',
    'ui.analyzing': 'ANALYZING',
    'ui.validating': 'Validating logic pathways...',
    'ui.components': 'COMPONENTS',
    'ui.locked_alert': 'ACCESS DENIED: This stage is locked. Please complete the previous stage first.',
    'ui.grid': 'GRID',
    'ui.tools': 'TOOLS',

    // Result Panel
    'result.success': 'SYSTEM BREACHED',
    'result.fail': 'VALIDATION FAILED',
    'result.ticks': 'Clock Cycles:',
    'result.comps': 'Active Components:',
    'result.par_achieved': 'Achieved',
    'result.par_failed': 'Failed',
    'result.next': 'PROCEED',
    'result.retry': 'RETRY',
    'result.mismatch': 'Logic output mismatch',

    // Groups
    'group.Tutorial': 'Tutorial',
    'group.Gerbang Dasar': 'Basic Gates',
    'group.Kombinasi Logika': 'Logic Combinations',

    // Tutorials
    'desc.t_wire': 'System Transmission: Welcome to Elencus. Route the signal from INPUT to OUTPUT using a WIRE.',
    'desc.t_and': 'System Transmission: AND Gate. Outputs 1 ONLY if BOTH inputs are 1.',
    'desc.t_or': 'System Transmission: OR Gate. Outputs 1 if EITHER or BOTH inputs are 1.',
    'desc.t_not': 'System Transmission: NOT Gate. Inverts the signal. Input 0 becomes 1, input 1 becomes 0.',
    'desc.t_xor': 'System Transmission: XOR Gate (Exclusive OR). Outputs 1 ONLY IF the inputs are DIFFERENT (0 and 1).',
    'desc.t_nand': 'System Transmission: NAND Gate. This is the inverse of AND. Outputs 0 ONLY IF both inputs are 1.',
    'desc.t_nor': 'System Transmission: NOR Gate. Inverse of OR. Outputs 1 ONLY IF both inputs are 0.',
    'desc.t_xnor': 'System Transmission: XNOR Gate. Inverse of XOR. Outputs 1 ONLY IF both inputs are the SAME.'
  }
};

let currentLang = 'en';

if (typeof window !== 'undefined') {
  const browserLang = navigator.language || (navigator as any).userLanguage;
  if (browserLang && browserLang.toLowerCase().startsWith('id')) {
    currentLang = 'id';
  } else {
    currentLang = 'en';
  }
}

export function initLanguage() {
  // Kept for backward compatibility if called, though no longer strictly needed
}

export function t(key: keyof typeof translations['en']): string {
  const langObj = translations[currentLang as keyof typeof translations] || translations['en'];
  return langObj[key] || translations['en'][key] || key;
}
