import type { Level } from '../engine/types';

export const levels: Level[] = [
  {
    "id": "l0",
    "group": "Tutorial",
    "order": 0,
    "gridSize": {
      "width": 8,
      "height": 4
    },
    "availableComponents": [
      "WIRE"
    ],
    "description": "Transmisi Sistem: Welcome to Elencus. Tugas pertamamu adalah merutekan sinyal dari INPUT ke OUTPUT agar sesuai dengan tabel kebenaran.\nPilih WIRE dari kiri, klik INPUT (A), lalu klik OUTPUT untuk menyambungkannya. Setelah itu tekan EXECUTE.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 1
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A",
        "position": {
          "x": 6,
          "y": 1
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 0,
      "maxTicks": 1
    }
  },
  {
    "id": "l1",
    "group": "Gerbang Dasar",
    "order": 1,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND"
    ],
    "description": "Transmisi Sistem: Hubungkan kedua INPUT ke gerbang AND, lalu hubungkan outputnya ke OUTPUT. Gerbang AND akan menghasilkan output 1 hanya jika KEDUA input bernilai 1. Perhatikan tabel kebenaran di bawah.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A AND B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 1,
      "maxTicks": 1
    }
  },
  {
    "id": "l2",
    "group": "Gerbang Dasar",
    "order": 2,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "OR",
      "NOT"
    ],
    "description": "Transmisi Sistem: Kali ini kamu perlu membalikkan sinyal. Gunakan gerbang NOT agar saat input 0, output menjadi 1, dan sebaliknya.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 3
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 1,
      "maxTicks": 1
    }
  },
  {
    "id": "l3",
    "group": "Kombinasi Logika",
    "order": 3,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT"
    ],
    "description": "Transmisi Sistem: Mari gabungkan beberapa gerbang. Sirkuit ini memerlukan gabungan (A AND B) ATAU C. Pecah masalah ini menjadi dua bagian: buat gerbang AND untuk A dan B, lalu hubungkan hasilnya ke gerbang OR bersama dengan input C.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "(A AND B) OR C",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_0",
    "group": "Gerbang Dasar",
    "order": 4,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang NAND. Output akan 0 hanya jika kedua input bernilai 1. Sisanya 1. Perhatikan tabel kebenaran dengan saksama.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NAND",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_1",
    "group": "Gerbang Dasar",
    "order": 5,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang NOR. Output akan 1 hanya jika kedua input bernilai 0. Ingat, gerbang NOT akan membalikkan sinyal.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_2",
    "group": "Gerbang Dasar",
    "order": 6,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang XOR (Exclusive OR). Output akan 1 jika kedua input berbeda. Gunakan gerbang AND untuk mensyaratkan kedua jalur aktif.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "XOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_3",
    "group": "Gerbang Dasar",
    "order": 7,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang XNOR. Output akan 1 jika kedua input sama. Gerbang OR akan aktif jika salah satu jalur aktif.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "XNOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_4",
    "group": "Gerbang Dasar",
    "order": 8,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Output 1 hanya jika A=1 dan B=0. Kamu bisa memecah jalur input menggunakan WIRE bercabang (hubungkan lebih dari 1 WIRE ke node yang sama).",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A AND NOT B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_5",
    "group": "Gerbang Dasar",
    "order": 9,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Output 1 hanya jika A=0 dan B=1. Coba kerjakan dari arah OUTPUT mundur ke INPUT.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A AND B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_6",
    "group": "Gerbang Dasar",
    "order": 10,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Output 1 jika A=1 atau B=0. Jangan menyerah! Logika sirkuit memang butuh kesabaran.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A OR NOT B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_7",
    "group": "Gerbang Dasar",
    "order": 11,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Output 1 jika A=0 atau B=1. Gunakan instingmu sebagai engineer sistem.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A OR B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_8",
    "group": "Gerbang Dasar",
    "order": 12,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang NAND. Output akan 0 hanya jika kedua input bernilai 1. Sisanya 1. Perhatikan tabel kebenaran dengan saksama.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NAND",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_9",
    "group": "Gerbang Dasar",
    "order": 13,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang NOR. Output akan 1 hanya jika kedua input bernilai 0. Ingat, gerbang NOT akan membalikkan sinyal.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_10",
    "group": "Gerbang Dasar",
    "order": 14,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang XOR (Exclusive OR). Output akan 1 jika kedua input berbeda. Gunakan gerbang AND untuk mensyaratkan kedua jalur aktif.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "XOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_11",
    "group": "Gerbang Dasar",
    "order": 15,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang XNOR. Output akan 1 jika kedua input sama. Gerbang OR akan aktif jika salah satu jalur aktif.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "XNOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_12",
    "group": "Gerbang Dasar",
    "order": 16,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Output 1 hanya jika A=1 dan B=0. Kamu bisa memecah jalur input menggunakan WIRE bercabang (hubungkan lebih dari 1 WIRE ke node yang sama).",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A AND NOT B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_13",
    "group": "Gerbang Dasar",
    "order": 17,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Output 1 hanya jika A=0 dan B=1. Coba kerjakan dari arah OUTPUT mundur ke INPUT.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A AND B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_14",
    "group": "Gerbang Dasar",
    "order": 18,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Output 1 jika A=1 atau B=0. Jangan menyerah! Logika sirkuit memang butuh kesabaran.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A OR NOT B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_15",
    "group": "Gerbang Dasar",
    "order": 19,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Output 1 jika A=0 atau B=1. Gunakan instingmu sebagai engineer sistem.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A OR B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_16",
    "group": "Gerbang Dasar",
    "order": 20,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang NAND. Output akan 0 hanya jika kedua input bernilai 1. Sisanya 1. Perhatikan tabel kebenaran dengan saksama.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NAND",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_17",
    "group": "Gerbang Dasar",
    "order": 21,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang NOR. Output akan 1 hanya jika kedua input bernilai 0. Ingat, gerbang NOT akan membalikkan sinyal.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_18",
    "group": "Gerbang Dasar",
    "order": 22,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang XOR (Exclusive OR). Output akan 1 jika kedua input berbeda. Gunakan gerbang AND untuk mensyaratkan kedua jalur aktif.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "XOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_19",
    "group": "Gerbang Dasar",
    "order": 23,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang XNOR. Output akan 1 jika kedua input sama. Gerbang OR akan aktif jika salah satu jalur aktif.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "XNOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_20",
    "group": "Gerbang Dasar",
    "order": 24,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "description": "Transmisi Sistem: Output 1 hanya jika A=1 dan B=0. Kamu bisa memecah jalur input menggunakan WIRE bercabang (hubungkan lebih dari 1 WIRE ke node yang sama).",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A AND NOT B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_21",
    "group": "Gerbang Dasar",
    "order": 25,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 hanya jika A=0 dan B=1. Coba kerjakan dari arah OUTPUT mundur ke INPUT.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A AND B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_22",
    "group": "Gerbang Dasar",
    "order": 26,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 jika A=1 atau B=0. Jangan menyerah! Logika sirkuit memang butuh kesabaran.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A OR NOT B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_23",
    "group": "Gerbang Dasar",
    "order": 27,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 jika A=0 atau B=1. Gunakan instingmu sebagai engineer sistem.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A OR B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_24",
    "group": "Gerbang Dasar",
    "order": 28,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang NAND. Output akan 0 hanya jika kedua input bernilai 1. Sisanya 1. Perhatikan tabel kebenaran dengan saksama.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NAND",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_25",
    "group": "Gerbang Dasar",
    "order": 29,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang NOR. Output akan 1 hanya jika kedua input bernilai 0. Ingat, gerbang NOT akan membalikkan sinyal.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_26",
    "group": "Gerbang Dasar",
    "order": 30,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang XOR (Exclusive OR). Output akan 1 jika kedua input berbeda. Gunakan gerbang AND untuk mensyaratkan kedua jalur aktif.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "XOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_27",
    "group": "Gerbang Dasar",
    "order": 31,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang XNOR. Output akan 1 jika kedua input sama. Gerbang OR akan aktif jika salah satu jalur aktif.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "XNOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_28",
    "group": "Gerbang Dasar",
    "order": 32,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 hanya jika A=1 dan B=0. Kamu bisa memecah jalur input menggunakan WIRE bercabang (hubungkan lebih dari 1 WIRE ke node yang sama).",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A AND NOT B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_29",
    "group": "Gerbang Dasar",
    "order": 33,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 hanya jika A=0 dan B=1. Coba kerjakan dari arah OUTPUT mundur ke INPUT.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A AND B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_30",
    "group": "Gerbang Dasar",
    "order": 34,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 jika A=1 atau B=0. Jangan menyerah! Logika sirkuit memang butuh kesabaran.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A OR NOT B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_31",
    "group": "Gerbang Dasar",
    "order": 35,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 jika A=0 atau B=1. Gunakan instingmu sebagai engineer sistem.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A OR B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_32",
    "group": "Gerbang Dasar",
    "order": 36,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang NAND. Output akan 0 hanya jika kedua input bernilai 1. Sisanya 1. Perhatikan tabel kebenaran dengan saksama.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NAND",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_33",
    "group": "Gerbang Dasar",
    "order": 37,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang NOR. Output akan 1 hanya jika kedua input bernilai 0. Ingat, gerbang NOT akan membalikkan sinyal.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_34",
    "group": "Gerbang Dasar",
    "order": 38,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang XOR (Exclusive OR). Output akan 1 jika kedua input berbeda. Gunakan gerbang AND untuk mensyaratkan kedua jalur aktif.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "XOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_35",
    "group": "Gerbang Dasar",
    "order": 39,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang XNOR. Output akan 1 jika kedua input sama. Gerbang OR akan aktif jika salah satu jalur aktif.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "XNOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_36",
    "group": "Gerbang Dasar",
    "order": 40,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 hanya jika A=1 dan B=0. Kamu bisa memecah jalur input menggunakan WIRE bercabang (hubungkan lebih dari 1 WIRE ke node yang sama).",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A AND NOT B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_37",
    "group": "Gerbang Dasar",
    "order": 41,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 hanya jika A=0 dan B=1. Coba kerjakan dari arah OUTPUT mundur ke INPUT.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A AND B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_38",
    "group": "Gerbang Dasar",
    "order": 42,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 jika A=1 atau B=0. Jangan menyerah! Logika sirkuit memang butuh kesabaran.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A OR NOT B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_39",
    "group": "Gerbang Dasar",
    "order": 43,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 jika A=0 atau B=1. Gunakan instingmu sebagai engineer sistem.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A OR B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_40",
    "group": "Gerbang Dasar",
    "order": 44,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang NAND. Output akan 0 hanya jika kedua input bernilai 1. Sisanya 1. Perhatikan tabel kebenaran dengan saksama.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NAND",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_41",
    "group": "Gerbang Dasar",
    "order": 45,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang NOR. Output akan 1 hanya jika kedua input bernilai 0. Ingat, gerbang NOT akan membalikkan sinyal.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_42",
    "group": "Gerbang Dasar",
    "order": 46,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang XOR (Exclusive OR). Output akan 1 jika kedua input berbeda. Gunakan gerbang AND untuk mensyaratkan kedua jalur aktif.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "XOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_43",
    "group": "Gerbang Dasar",
    "order": 47,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Buatlah gerbang XNOR. Output akan 1 jika kedua input sama. Gerbang OR akan aktif jika salah satu jalur aktif.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "XNOR",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_44",
    "group": "Gerbang Dasar",
    "order": 48,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 hanya jika A=1 dan B=0. Kamu bisa memecah jalur input menggunakan WIRE bercabang (hubungkan lebih dari 1 WIRE ke node yang sama).",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A AND NOT B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "gd_45",
    "group": "Gerbang Dasar",
    "order": 49,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 hanya jika A=0 dan B=1. Coba kerjakan dari arah OUTPUT mundur ke INPUT.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A AND B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 2,
      "maxTicks": 2
    }
  },
  {
    "id": "gd_46",
    "group": "Gerbang Dasar",
    "order": 50,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 jika A=1 atau B=0. Jangan menyerah! Logika sirkuit memang butuh kesabaran.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "A OR NOT B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "gd_47",
    "group": "Gerbang Dasar",
    "order": 51,
    "gridSize": {
      "width": 10,
      "height": 6
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 jika A=0 atau B=1. Gunakan instingmu sebagai engineer sistem.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "NOT A OR B",
        "position": {
          "x": 8,
          "y": 3
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "kl_0",
    "group": "Kombinasi Logika",
    "order": 52,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Sirkuit Mayoritas: Output 1 jika setidaknya dua dari tiga input bernilai 1. Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Majority",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "kl_1",
    "group": "Kombinasi Logika",
    "order": 53,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Sirkuit Minoritas: Output 1 jika paling banyak satu input bernilai 1. Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Minority",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "kl_2",
    "group": "Kombinasi Logika",
    "order": 54,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Paritas Ganjil: Output 1 jika jumlah input bernilai 1 adalah ganjil (1 atau 3). Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Odd Parity",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 5,
      "maxTicks": 5
    }
  },
  {
    "id": "kl_3",
    "group": "Kombinasi Logika",
    "order": 55,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Paritas Genap: Output 1 jika jumlah input bernilai 1 adalah genap (0 atau 2). Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Even Parity",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 6,
      "maxTicks": 6
    }
  },
  {
    "id": "kl_4",
    "group": "Kombinasi Logika",
    "order": 56,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Multiplexer 2-to-1: Jika A=1 output B, jika A=0 output C. Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Mux (A as Sel)",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "kl_5",
    "group": "Kombinasi Logika",
    "order": 57,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 jika C=1 DAN salah satu dari A atau B adalah 1. Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "(A OR B) AND C",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "kl_6",
    "group": "Kombinasi Logika",
    "order": 58,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Gabungan logika: Output 1 jika (A=1 dan B=1) ATAU (C=0). Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "(A AND B) OR NOT C",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 5,
      "maxTicks": 5
    }
  },
  {
    "id": "kl_7",
    "group": "Kombinasi Logika",
    "order": 59,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Sirkuit Mayoritas: Output 1 jika setidaknya dua dari tiga input bernilai 1. Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Majority",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 6,
      "maxTicks": 6
    }
  },
  {
    "id": "kl_8",
    "group": "Kombinasi Logika",
    "order": 60,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Sirkuit Minoritas: Output 1 jika paling banyak satu input bernilai 1. Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Minority",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "kl_9",
    "group": "Kombinasi Logika",
    "order": 61,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Paritas Ganjil: Output 1 jika jumlah input bernilai 1 adalah ganjil (1 atau 3). Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Odd Parity",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "kl_10",
    "group": "Kombinasi Logika",
    "order": 62,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Paritas Genap: Output 1 jika jumlah input bernilai 1 adalah genap (0 atau 2). Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Even Parity",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 5,
      "maxTicks": 5
    }
  },
  {
    "id": "kl_11",
    "group": "Kombinasi Logika",
    "order": 63,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Multiplexer 2-to-1: Jika A=1 output B, jika A=0 output C. Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Mux (A as Sel)",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 6,
      "maxTicks": 6
    }
  },
  {
    "id": "kl_12",
    "group": "Kombinasi Logika",
    "order": 64,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Output 1 jika C=1 DAN salah satu dari A atau B adalah 1. Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "(A OR B) AND C",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "kl_13",
    "group": "Kombinasi Logika",
    "order": 65,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Gabungan logika: Output 1 jika (A=1 dan B=1) ATAU (C=0). Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "(A AND B) OR NOT C",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "kl_14",
    "group": "Kombinasi Logika",
    "order": 66,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Sirkuit Mayoritas: Output 1 jika setidaknya dua dari tiga input bernilai 1. Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Majority",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 5,
      "maxTicks": 5
    }
  },
  {
    "id": "kl_15",
    "group": "Kombinasi Logika",
    "order": 67,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Sirkuit Minoritas: Output 1 jika paling banyak satu input bernilai 1. Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Minority",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 6,
      "maxTicks": 6
    }
  },
  {
    "id": "kl_16",
    "group": "Kombinasi Logika",
    "order": 68,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Paritas Ganjil: Output 1 jika jumlah input bernilai 1 adalah ganjil (1 atau 3). Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Odd Parity",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 3,
      "maxTicks": 3
    }
  },
  {
    "id": "kl_17",
    "group": "Kombinasi Logika",
    "order": 69,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Paritas Genap: Output 1 jika jumlah input bernilai 1 adalah genap (0 atau 2). Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Even Parity",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      }
    ],
    "par": {
      "maxComponents": 4,
      "maxTicks": 4
    }
  },
  {
    "id": "kl_18",
    "group": "Kombinasi Logika",
    "order": 70,
    "gridSize": {
      "width": 12,
      "height": 8
    },
    "availableComponents": [
      "WIRE",
      "AND",
      "OR",
      "NOT",
      "XOR",
      "SPLITTER"
    ],
    "description": "Transmisi Sistem: Multiplexer 2-to-1: Jika A=1 output B, jika A=0 output C. Jangan lupa optimasi sirkuitmu. Pastikan sambungan antar gerbang efisien.",
    "inputs": [
      {
        "id": "in1",
        "label": "A",
        "position": {
          "x": 1,
          "y": 2
        }
      },
      {
        "id": "in2",
        "label": "B",
        "position": {
          "x": 1,
          "y": 4
        }
      },
      {
        "id": "in3",
        "label": "C",
        "position": {
          "x": 1,
          "y": 6
        }
      }
    ],
    "outputs": [
      {
        "id": "out1",
        "label": "Mux (A as Sel)",
        "position": {
          "x": 10,
          "y": 4
        }
      }
    ],
    "testCases": [
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 0,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 0,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 0
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 0
        },
        "expectedOutputs": {
          "out1": 1
        }
      },
      {
        "inputValues": {
          "in1": 1,
          "in2": 1,
          "in3": 1
        },
        "expectedOutputs": {
          "out1": 1
        }
      }
    ],
    "par": {
      "maxComponents": 5,
      "maxTicks": 5
    }
  }
];
