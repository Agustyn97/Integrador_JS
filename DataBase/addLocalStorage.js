/* auriculares */
const auriculares = [
  {
    id: 1,
    nombre: "Auriculares Sony",
    descripcion:
      "Sony, sin lugar a dudas es una de las marcas más reconocidas en el mundo por la fabricación de dispositivos de audio. Su gama de auriculares se caracteriza por brindar siempre una gran experencia de uso en sus usuarios y ofrecer una alta calidad en todos los componentes de sus reproductores. Esto hace que puedas notar un gran sonido desde su primer uso.",
    color: ["Negro", "Azul", "Blanco"],
    precio: 5999,
    img: "../Images/Productos/Auriculares/auriculares_sony_bincha.jpg"
  },
  {
    id: 2,
    nombre: "Auriculares Cotion G9000",
    descripcion:
      "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Kotion G9000 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
    color: ["Rojo", "Azul"],
    precio: 15000,
    img: "../Images/Productos/Auriculares/auriculares_cotio_n_each_G900.png"
  },
  {
    id: 3,
    nombre: "Earpods",
    descripcion:
      "A diferencia de los audífonos circulares tradicionales, el diseño de los EarPods se basa en la geometría del oído, por eso son más cómodos que cualquier otro audífono de este tipo. Las bocinas del interior de los EarPods han sido diseñadas para mejorar la calidad del sonido y minimizar su pérdida. ¿El resultado? Un audio de alta calidad.",
    color: ["Blanco", "Negro"],
    precio: 6499,
    img: "../Images/Productos/Auriculares/auriculares_earpods.jpg"
  },
  {
    id: 4,
    nombre: "Auriculares Inalambricos Xiaomi",
    descripcion:
      "Con los Xiaomi AirDots 2 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores. Al ser in-ear, mejoran la calidad del audio y son de tamaño pequeño para poder insertarse en tu oreja. Son ideales para acompañarte a la hora de hacer ejercicio mientras te sumergís en el mejor sonido envolvente.",
    color: ["Blanco", "Negro"],
    precio: 3486,
    img: "../Images/Productos/Auriculares/auriculares_inalambricos_xiaomi.jpg"
  },
  {
    id: 5,
    nombre: "Auriculares Motorola",
    descripcion:
      "Auriculares Motorola Universales con salida de audio 3.5 mm, poseen alta calidad de sonido, micrófono incorporado para realizar llamadas. Incluye tres distintos tamaños de soportes de gel para la mejor comodidad en los oídos y un botón para control de música/llamadas",
    color: ["Negro"],
    precio: 1988,
    img: "../Images/Productos/Auriculares/auriculares_motorola.jpg"
  },
];

/* cargadores */

const cargadores = [
  {
    id: 1,
    nombre: "Cargador Inalambrico Samsung",
    descripcion:
      "El Power Bank Gadnic 18000 mah te permitirá cargar tu celular o tu dispositivo móvil donde vos quieras. Cuenta con una gran almacenamiento de carga y un sistema de carga rápida que te permitirá llenar la batería de cualquier dispositivo en pocos minutos. Con su sistema de carga simultánea vas a poder cargar diferentes dispositivos al mismo tiempo.",
    color: ["Negro", "Blanco"],
    precio: 7999,
    img: "../Images/Productos/Cargadores/cargador_inalambrico_samsung.jpg"
  },
  {
    id: 2,
    nombre: "Cargador K3",
    descripcion: "Cargador K3 con salida V8",
    color: ["Blanco", "Negro", "Rojo", "Verde"],
    precio: 499,
    img: "../Images/Productos/Cargadores/cargador_k3_v8.jpg"
  },
  {
    id: 3,
    nombre: "Cargador Samsung Type C",
    descripcion:
      "Cargador Samsung Ultra Rapido Original 25w Cable Tipo C, Super Fast Charging para mantenerse Live. Dale a tus dispositivos el poderoso soporte de carga que se merecen. El cargador de pared Super Fast Charging (25 W) proporciona una carga súper rápida de hasta 25 W para dispositivos compatibles. Usá el cargador de pared con un cable de carga oficial Samsung de tipo C a tipo C para obtener resultados óptimos.",
    color: ["Negro", "Blanco"],
    precio: 6500,
    img: "../Images/Productos/Cargadores/cargador_samsung_tipoC.jpeg"
  },
  {
    id: 4,
    nombre: "Cargador Motorola Turbo Power",
    descripcion:
      "Turbo Power Original y Sellado. 15w - Más Cable Micro Usb a Usb , el cargador y cable vienen por caja separadas.",
    color: ["Negro"],
    precio: 3840,
    img: "../Images/Productos/Cargadores/cargador_turbo_power.jpg"
  },
  {
    id: 5,
    nombre: "Cargador Iphone Original",
    descripcion:
      "Cargador de iPhone con adaptador de corriente USB-C de 20 W homologado por Apple especialmente para Argentina.",
    color: ["Blanco"],
    precio: 8499,
    img: "../Images/Productos/Cargadores/cargador-iphone-12-pro-max.jpg"
  },
];

/* conectores */

const conectores = [
  {
    id: 1,
    nombre: "Cable Type C",
    descripcion:"",
    color:"Blanco",
    precio: 500,
    img: "../Images/Productos/Conectores/cable_tipoC.jpg"
  },
  {
    id: 2,
    nombre: "Cable V3",
    descripcion:"",
    color:"Negro",
    precio: 600,
    img: "../Images/Productos/Conectores/cable_v3.jpg"
  },
  {
    id: 3,
    nombre: "Cable HDMI",
    descripcion:"",
    color:"Negro",
    precio: 999,
    img: "../Images/Productos/Conectores/cable-hdmi.jpg"
  },
  {
    id: 4,
    nombre: "Cable V8",
    descripcion:"",
    color:"Negro",
    precio: 250,
    img: "../Images/Productos/Conectores/cable_v8.jpg"
  },
  {
    id: 5,
    nombre: "Cable VGA",
    descripcion:"",
    color:"Negro",
    precio: 850,
    img: "../Images/Productos/Conectores/cable_vga.jpg"
  },
];

  const auricularesJson = JSON.stringify(auriculares);
  localStorage.setItem("auriculares", auricularesJson);
  const conectoresJson = JSON.stringify(conectores);
  localStorage.setItem("conectores", conectoresJson);
  const cargadoresJson = JSON.stringify(cargadores);
  localStorage.setItem("cargadores", cargadoresJson);

