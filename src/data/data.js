const productos = [
  // 🖱️ PERIFÉRICOS
  {
    id: 1,
    title: "Monitor Gamer 27'' 144Hz",
    category: "perifericos",
    price: 350000,
    img: "/images/monitor.jpg",
    stock: 10,
    description: "Monitor gamer de 27 pulgadas con panel IPS, 1ms de respuesta y 144Hz de refresco."
  },
  {
    id: 2,
    title: "Teclado Mecánico Redragon Kumara",
    category: "perifericos",
    price: 80000,
    img: "/images/teclado.jpg",
    stock: 15,
    description: "Teclado mecánico con switches red y retroiluminación RGB personalizable."
  },
  {
    id: 3,
    title: "Mouse Logitech G Pro X Superlight",
    category: "perifericos",
    price: 120000,
    img: "/images/mouse.jpg",
    stock: 12,
    description: "Mouse inalámbrico ultraligero con sensor HERO 25K y diseño ambidiestro."
  },
  {
    id: 4,
    title: "Auriculares HyperX Cloud II",
    category: "perifericos",
    price: 95000,
    img: "/images/auriculares.jpg",
    stock: 8,
    description: "Auriculares con sonido 7.1 virtual, micrófono desmontable y espuma viscoelástica."
  },
  {
    id: 5,
    title: "Mousepad SteelSeries QcK+",
    category: "perifericos",
    price: 25000,
    img: "/images/mousepad.jpg",
    stock: 20,
    description: "Mousepad de tela microtejida optimizada para precisión y control del movimiento."
  },

  // 💻 PLACAS DE VIDEO
  {
    id: 6,
    title: "Placa de Video RX 7600 8GB",
    category: "placas",
    price: 400000,
    img: "/images/rx7600.jpg",
    stock: 5,
    description: "GPU AMD Radeon RX 7600 con 8GB GDDR6, ideal para gaming 1080p ultra."
  },
  {
    id: 7,
    title: "NVIDIA RTX 4070 Ti 12GB",
    category: "placas",
    price: 950000,
    img: "/images/rtx4070ti.jpg",
    stock: 3,
    description: "Tarjeta gráfica con arquitectura Ada Lovelace, DLSS 3 y rendimiento extremo."
  },
  {
    id: 8,
    title: "NVIDIA RTX 3060 12GB",
    category: "placas",
    price: 650000,
    img: "/images/rtx3060.jpg",
    stock: 7,
    description: "Ideal para gaming 1080p y 1440p con trazado de rayos y DLSS."
  },
  {
    id: 9,
    title: "AMD Radeon RX 6700 XT 12GB",
    category: "placas",
    price: 720000,
    img: "/images/rx6700xt.jpg",
    stock: 4,
    description: "Potente GPU con 12GB GDDR6, rendimiento 2K excelente y refrigeración avanzada."
  },
  {
    id: 10,
    title: "NVIDIA RTX 4090 24GB",
    category: "placas",
    price: 2500000,
    img: "/images/rtx4090.jpg",
    stock: 2,
    description: "La GPU más potente del mercado, ideal para 4K y tareas de IA."
  },

  // 🖥️ GABINETES
  {
    id: 11,
    title: "Gabinete RGB Vidrio Templado",
    category: "gabinetes",
    price: 250000,
    img: "/images/gabinete.jpg",
    stock: 8,
    description: "Gabinete con panel lateral de vidrio templado y tres ventiladores RGB incluidos."
  },
  {
    id: 12,
    title: "Gabinete NZXT H510 Elite",
    category: "gabinetes",
    price: 280000,
    img: "/images/nzxt_h510.jpg",
    stock: 5,
    description: "Diseño minimalista, excelente gestión de cables y soporte para refrigeración líquida."
  },
  {
    id: 13,
    title: "Gabinete Cooler Master TD500 Mesh",
    category: "gabinetes",
    price: 230000,
    img: "/images/td500mesh.jpg",
    stock: 6,
    description: "Chasis ATX con panel frontal mesh para flujo de aire óptimo y 3 ventiladores ARGB."
  },
  {
    id: 14,
    title: "Gabinete Lian Li O11 Dynamic",
    category: "gabinetes",
    price: 350000,
    img: "/images/o11dynamic.jpg",
    stock: 4,
    description: "Gabinete premium con doble cámara, soporte para refrigeración líquida y panel de vidrio."
  },
  {
    id: 15,
    title: "Gabinete Corsair iCUE 4000X RGB",
    category: "gabinetes",
    price: 290000,
    img: "/images/corsair4000x.jpg",
    stock: 5,
    description: "Diseño moderno con tres ventiladores RGB y excelente flujo de aire."
  },

  // 🧠 COMPONENTES
  {
    id: 16,
    title: "Procesador AMD Ryzen 7 7800X3D",
    category: "componentes",
    price: 850000,
    img: "/images/ryzen7800x3d.jpg",
    stock: 5,
    description: "Procesador de 8 núcleos y 16 hilos, ideal para gaming de alto rendimiento."
  },
  {
    id: 17,
    title: "Procesador Intel Core i7-13700K",
    category: "componentes",
    price: 870000,
    img: "/images/i713700k.jpg",
    stock: 6,
    description: "13ª generación con 16 núcleos híbridos y alto rendimiento para juegos y multitarea."
  },
  {
    id: 18,
    title: "Memoria RAM Corsair Vengeance RGB 32GB (2x16GB) 6000MHz",
    category: "componentes",
    price: 250000,
    img: "/images/ramcorsair.jpg",
    stock: 10,
    description: "Memoria DDR5 de alta velocidad con iluminación RGB dinámica."
  },
  {
    id: 19,
    title: "SSD NVMe Samsung 980 PRO 1TB",
    category: "componentes",
    price: 200000,
    img: "/images/ssd980pro.jpg",
    stock: 12,
    description: "Almacenamiento ultra rápido con velocidades de lectura de hasta 7000 MB/s."
  },
  {
    id: 20,
    title: "Fuente Corsair RM850x 80+ Gold",
    category: "componentes",
    price: 220000,
    img: "/images/fuente850x.jpg",
    stock: 8,
    description: "Fuente modular de 850W certificada 80+ Gold, silenciosa y eficiente."
  },

  // 🎧 ACCESORIOS
  {
    id: 21,
    title: "Silla Gamer DXRacer Formula Series",
    category: "accesorios",
    price: 350000,
    img: "/images/silla_dxracer.jpg",
    stock: 5,
    description: "Silla ergonómica ajustable con apoyabrazos 3D y soporte lumbar."
  },
  {
    id: 22,
    title: "Micrófono Blue Yeti USB",
    category: "accesorios",
    price: 180000,
    img: "/images/blueyeti.jpg",
    stock: 10,
    description: "Micrófono profesional con patrones múltiples y calidad de grabación impecable."
  },
  {
    id: 23,
    title: "Soporte para Auriculares RGB",
    category: "accesorios",
    price: 35000,
    img: "/images/soporte_auriculares.jpg",
    stock: 15,
    description: "Base con iluminación RGB y dos puertos USB para mayor comodidad."
  },
  {
    id: 24,
    title: "Control Xbox Wireless Carbon Black",
    category: "accesorios",
    price: 110000,
    img: "/images/xbox_controller.jpg",
    stock: 9,
    description: "Control inalámbrico compatible con PC y consolas Xbox Series."
  },
  {
    id: 25,
    title: "Lámpara LED RGB para Setup",
    category: "accesorios",
    price: 30000,
    img: "/images/lampara_rgb.jpg",
    stock: 25,
    description: "Luz ambiental RGB personalizable para darle estilo a tu setup gamer."
  }
];

export default productos;
