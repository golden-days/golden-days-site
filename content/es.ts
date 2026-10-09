/**
 * Spanish (es-US) text for the website. It has the same shape as `en.ts`, so TypeScript
 * reports any string that is missing. When you change wording in `en.ts`, update
 * the matching line here too.
 *
 * Machine-assisted translation: have a fluent Spanish speaker read the whole
 * file before launch.
 */

import { phone, type Content } from "./en";

export const es: Content = {
  site: {
    name: "Golden Days Adult Day Health Care",
    shortName: "Golden Days",
    logoAlt: "Golden Days Adult Day Health Care",
    skipToContent: "Saltar al contenido principal",
  },

  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    phoneLabel: "Teléfono",
    email: "1215goldendays@gmail.com",
    emailHref: "mailto:1215goldendays@gmail.com",
    emailLabel: "Correo electrónico",
    addressLabel: "Dirección",
    addressLines: ["1215 Merkley Ave", "West Sacramento, CA 95691"],
    addressOneLine: "1215 Merkley Ave, West Sacramento, CA 95691",
    hoursLabel: "Horario",
    hours: "Horario del centro: de lunes a viernes, de 8:00 a. m. a 4:30 p. m.",
    programHours: "Horario del servicio: de lunes a viernes, de 8:00 a. m. a 2:00 p. m.",
    hoursNote:
      "Cerrado los sábados y domingos. También cerramos el Día de Acción de Gracias, el día de Navidad, el Día de Año Nuevo y el 4 de Julio.",
    mapTitle: "Mapa con la ubicación de Golden Days Adult Day Health Care",
    directionsLinkLabel: "Cómo llegar",
  },

  nav: {
    menuLabel: "Menú",
    closeLabel: "Cerrar",
    ariaLabel: "Navegación principal",
    links: [
      { href: "/", label: "Inicio" },
      { href: "/about", label: "Quiénes somos" },
      { href: "/services", label: "Servicios" },
      { href: "/transportation", label: "Transporte" },
      { href: "/qualify", label: "¿Califico?" },
      { href: "/enrollment", label: "Inscripción" },
      { href: "/contact", label: "Contacto" },
    ],
  },

  buttons: {
    call: "Llámenos",
    callWithNumber: `Llamar al ${phone.display}`,
    scheduleTour: "Programe una visita",
    doIQualify: "¿Califico?",
    learnMore: "Más información",
  },

  footer: {
    aboutHeading: "Golden Days Adult Day Health Care",
    aboutText:
      "Un centro de cuidado de salud diurno para adultos en West Sacramento, California. Al servicio de las familias de la zona desde 2003.",
    contactHeading: "Contáctenos",
    hoursHeading: "Horario",
    copyright: "Golden Days Adult Day Health Care. Todos los derechos reservados.",
    disclaimer:
      "Este sitio web es un borrador. Cualquier dato marcado como provisional es un texto de ejemplo y aún no ha sido confirmado.",
  },

  // ---------------------------------------------------------------- Home ---
  home: {
    meta: {
      title: "Cuidado de salud diurno para adultos en West Sacramento",
      description:
        "Golden Days Adult Day Health Care es un programa diurno para adultos en West Sacramento, California. Llámenos o programe una visita.",
    },
    hero: {
      heading: "Cuidado diurno para adultos en West Sacramento",
      intro:
        "Golden Days es un programa diurno para adultos y para las familias que los cuidan.",
      photo: {
        kind: "building" as const,
        label: "Espacio para foto - exterior del edificio",
        alt: "El frente del centro Golden Days Adult Day Health Care, con su letrero de sol sobre la entrada abierta y un cartel de Welcome to Golden Days en la ventana.",
        src: "/images/hero-building.jpg",
        width: 1600,
        height: 900,
      },
    },
    whoWeServe: {
      heading: "A quién atendemos",
      paragraphs: [
        "Golden Days recibe a adultos que viven en casa y necesitan apoyo, compañía o supervisión durante el día.",
        "Muchas de las personas que vienen a nosotros viven con un familiar que trabaja o que simplemente necesita un descanso durante la semana.",
        "Si no está seguro de que Golden Days sea lo más adecuado para su ser querido, llámenos. Con gusto lo hablamos, sin ninguna presión.",
      ],
    },
    services: {
      heading: "Lo que ofrecemos",
      intro: "Un día en Golden Days puede incluir cualquiera de los siguientes servicios.",
      linkLabel: "Ver todos los servicios",
      linkHref: "/services",
      tiles: [
        {
          icon: "nursing" as const,
          title: "Cuidado de enfermería",
          text: "Nuestro personal de enfermería revisa las necesidades de salud durante el día.",
        },
        {
          icon: "rehabilitation" as const,
          title: "Rehabilitación",
          text: "Sesiones de terapia para mejorar la fuerza, el equilibrio y el movimiento diario.",
        },
        {
          icon: "nutrition" as const,
          title: "Nutrición",
          text: "Desayuno y almuerzo todos los días, preparados por un cocinero que planea según las necesidades de cada persona.",
        },
        {
          icon: "socialWork" as const,
          title: "Trabajo social",
          text: "Ayuda para entender beneficios, trámites y recursos de la comunidad.",
        },
        {
          icon: "recreation" as const,
          title: "Recreación",
          text: "Música, juegos, manualidades, ejercicio, excursiones y tiempo con otras personas.",
        },
        {
          icon: "transportation" as const,
          title: "Transporte",
          text: "Viajes de ida y vuelta al centro en los días del programa.",
        },
      ],
    },
    transportation: {
      heading: "Llegar hasta aquí también es parte del cuidado",
      paragraphs: [
        "Golden Days ofrece viajes de ida y vuelta al centro para las personas que asisten al programa, incluso quienes usan silla de ruedas o andador.",
        "Acordamos con su familia un margen de tiempo para la recogida, y le llamamos si es necesario cambiar el horario.",
      ],
      linkLabel: "Lea sobre el transporte",
      linkHref: "/transportation",
      photo: {
        kind: "bus" as const,
        label: "Espacio para foto - autobús de Golden Days",
        alt: "Un autobús blanco de Golden Days estacionado frente al centro, con la puerta de pasajeros abierta.",
        src: "/images/bus.jpg",
        width: 1200,
        height: 900,
      },
    },
    enrollment: {
      heading: "Cómo funciona la inscripción",
      intro: "Cuatro pasos, y le ayudamos en cada uno.",
      steps: [
        {
          title: "Llame o envíenos un mensaje",
          text: "Cuéntenos un poco sobre su ser querido y cómo son sus días ahora.",
        },
        {
          title: "Visite el centro",
          text: "Venga a conocer las instalaciones, al personal y pregunte lo que desee.",
        },
        {
          title: "Complete una evaluación",
          text: "Nuestro equipo revisa la salud y las necesidades diarias para ver si el programa es adecuado.",
        },
        {
          title: "Comience a asistir",
          text: "Acordamos los días, organizamos los viajes y recibimos con cariño a su ser querido.",
        },
      ],
      linkLabel: "Vea la guía completa de inscripción",
      linkHref: "/enrollment",
    },
    cost: {
      heading: "¿Y el costo?",
      text: "Aceptamos seguro médico, y Medi-Cal junto con un plan de seguro. El pago particular también es una opción. Llámenos y le explicaremos qué se aplica a su familia.",
    },
    trust: {
      text: "Al servicio de las familias de West Sacramento desde 2003. Los mismos dueños desde 2007.",
    },
    contact: {
      heading: "Hable con nosotros",
      intro:
        "Envíe un mensaje y le responderemos, o llámenos durante el horario del centro.",
    },
  },

  // --------------------------------------------------------------- About ---
  about: {
    meta: {
      title: "Quiénes somos en Golden Days",
      description:
        "Golden Days Adult Day Health Care atiende a las familias de West Sacramento desde 2003, con los mismos dueños desde 2007.",
    },
    heading: "Quiénes somos en Golden Days",
    lead: "Golden Days Adult Day Health Care forma parte de West Sacramento desde 2003. Los mismos dueños dirigen el centro desde 2007.",
    photo: {
      kind: "interior" as const,
      label: "Espacio para foto - foto grupal del personal",
      alt: "Imagen provisional en lugar de una foto grupal del personal de Golden Days",
    },
    story: {
      heading: "Nuestra historia",
      paragraphs: [
        "Golden Days abrió en West Sacramento en 2003 como un lugar donde los adultos podían pasar el día con atención cercana. Los mismos dueños dirigen el centro desde 2007.",
        "A lo largo de esos años hemos llegado a conocer a muchas familias de la zona. Algunas personas vienen unos días a la semana durante años, y sus familias también pasan a formar parte del centro.",
        "Unas 120 personas pasan el día con nosotros, y el personal aun así se toma el tiempo de aprender los nombres, las rutinas y lo que hace sentir cómoda a cada persona.",
      ],
    },
    values: {
      heading: "Lo que nos importa",
      items: [
        {
          title: "Primero, el respeto",
          text: "Todos los que vienen aquí son adultos, y así los tratamos.",
        },
        {
          title: "Respuestas claras",
          text: "Explicamos los costos, los trámites y los horarios en palabras sencillas.",
        },
        {
          title: "Rutinas estables",
          text: "Rostros conocidos y un día predecible ayudan a las personas a sentirse a gusto.",
        },
        {
          title: "La familia siempre informada",
          text: "Llamamos cuando algo cambia, y contestamos el teléfono.",
        },
      ],
    },
    team: {
      heading: "Nuestro equipo",
      paragraphs: [
        "Nuestro personal incluye enfermeros, personal de terapia, una trabajadora social, líderes de actividades, conductores y personal de cocina.",
        "Muchos de ellos han trabajado en Golden Days por años y hablan más de un idioma.",
      ],
    },
    center: {
      heading: "El centro",
      paragraphs: [
        "El edificio tiene una sala de actividades, un comedor, salas tranquilas para descansar, un área de terapia y baños accesibles.",
        "Hay estacionamiento al frente, y la entrada está a nivel del suelo, sin escalones.",
      ],
      photo: {
        kind: "interior" as const,
        label: "Espacio para foto - comedor",
        alt: "El comedor de Golden Days, con mesas redondas preparadas para el almuerzo y flores frescas sobre las mesas.",
        src: "/images/dining-room.jpg",
        width: 1200,
        height: 900,
      },
    },
    cta: {
      heading: "Venga a conocernos",
      text: "Una visita dura cerca de media hora. Llámenos y buscaremos un horario.",
    },
  },

  // ------------------------------------------------------------ Services ---
  services: {
    meta: {
      title: "Servicios",
      description:
        "Cuidado de enfermería, rehabilitación, nutrición, trabajo social, recreación y transporte en Golden Days, en West Sacramento.",
    },
    heading: "Servicios",
    lead: "Un día en Golden Days se basa en seis tipos de apoyo. Las familias eligen los días que mejor les convienen.",
    items: [
      {
        icon: "nursing" as const,
        title: "Cuidado de enfermería",
        summary: "Revisiones de salud y medicamentos a cargo de nuestros enfermeros durante el día.",
        details: [
          "Los enfermeros revisan los signos vitales y la glucosa en la sangre (azúcar en la sangre).",
          "Los enfermeros dan los medicamentos programados durante el horario del programa.",
          "Si la salud cambia, llamamos a la familia y al consultorio del médico.",
        ],
      },
      {
        icon: "rehabilitation" as const,
        title: "Rehabilitación",
        summary: "Ejercicios y terapia que ayudan con la fuerza, el equilibrio y el movimiento.",
        details: [
          "El personal de terapia trabaja la caminata, el equilibrio y el movimiento de todos los días.",
          "Las sesiones se planean según lo que cada persona quiere lograr.",
          "El ejercicio en grupo se realiza casi todas las mañanas para quienes deseen participar.",
        ],
      },
      {
        icon: "nutrition" as const,
        title: "Nutrición",
        summary: "Desayuno y almuerzo cada día del programa, preparados por un cocinero que planea según las necesidades de cada persona.",
        details: [
          "El desayuno y el almuerzo se sirven todos los días del programa, y el menú va cambiando.",
          "Un cocinero especializado planea las comidas según las necesidades de cada persona.",
          "Cuéntenos sobre necesidades de alimentación, como alergias, dificultad para tragar (podemos picar la comida) o una dieta vegetariana.",
        ],
      },
      {
        icon: "socialWork" as const,
        title: "Trabajo social",
        summary: "Ayuda con beneficios, trámites y la búsqueda de servicios fuera del centro.",
        details: [
          "Nuestra trabajadora social ayuda a las familias a entender formularios y preguntas sobre la cobertura.",
          "Podemos orientarle hacia servicios locales, como ayuda en el hogar o programas de comidas.",
          "Hay reuniones con la familia cuando es necesario cambiar un plan.",
        ],
      },
      {
        icon: "recreation" as const,
        title: "Recreación",
        summary: "Música, juegos, manualidades, ejercicio suave y compañía durante todo el día.",
        details: [
          "Actividades diarias en las que cada persona puede participar o no, como música, juegos, manualidades y ejercicio.",
          "Las excursiones se hacen hasta tres veces por semana en promedio, sin costo adicional. Las personas con necesidades de movilidad pueden acompañarnos.",
          "Celebramos juntos los días festivos y los cumpleaños.",
        ],
      },
      {
        icon: "transportation" as const,
        title: "Transporte",
        summary: "Viajes de ida y vuelta al centro en los días del programa.",
        details: [
          "Los viajes están disponibles dentro de nuestra zona de servicio.",
          "Nuestros vehículos pueden transportar a personas que usan silla de ruedas o andador.",
          "El autobús se acerca a la puerta lo más posible. En casa, un cuidador ayuda al participante a subir al autobús. En el centro, los conductores ayudan a los participantes a bajar del autobús.",
        ],
      },
    ],
    dayHeading: "Cómo es un día",
    daySchedule: [
      { time: "8:30 a. m.", text: "Bienvenida" },
      { time: "9:00 a. m.", text: "Ejercicio de rehabilitación" },
      { time: "9:30 a. m.", text: "Desayuno / Noticias del día en la televisión" },
      { time: "10:00 a. m.", text: "Educación para la salud / Fisioterapia individual (lun., mar., vie.)" },
      { time: "10:30 a. m.", text: "Ejercicio de rehabilitación / Club de caminata / Excursión" },
      { time: "11:00 a. m.", text: "Ejercicios de rehabilitación / Terapia de grupo" },
      { time: "11:30 a. m.", text: "Ejercicio de rehabilitación / Grupo para mejorar la memoria / Juego de actividad / Grupo espiritual" },
      { time: "12:00 p. m.", text: "Invitados y conferencistas / Fisioterapia individual (lun., mar., vie.)" },
      { time: "12:30 p. m.", text: "Terapia ocupacional individual (miér., vie.)" },
      { time: "1:00 p. m.", text: "Almuerzo" },
      { time: "1:30 p. m.", text: "Película / Conversación" },
    ],
    weeklyHeading: "Actividades semanales",
    weeklyActivities: [
      { day: "Martes", text: "Grupo para mejorar la memoria" },
      { day: "Miércoles", text: "Clase de inglés" },
      { day: "Viernes", text: "Bingo" },
    ],
    cta: {
      heading: "¿No sabe qué necesita su ser querido?",
      text: "Llámenos. Le haremos algunas preguntas y le daremos una respuesta sincera.",
    },
  },

  // ------------------------------------------------------ Transportation ---
  transportation: {
    meta: {
      title: "Transporte",
      description:
        "Viajes a Golden Days en West Sacramento, incluidos vehículos accesibles para sillas de ruedas.",
    },
    heading: "Transporte",
    lead: "Llegar al centro no debería ser lo difícil. Golden Days ofrece viajes de ida y vuelta al programa para las personas que los necesitan.",
    photo: {
      kind: "bus" as const,
      label: "Espacio para foto - interior del autobús de Golden Days",
      alt: "Interior de un autobús de Golden Days: filas de asientos azules a ambos lados de un pasillo ancho, con símbolos de accesibilidad para sillas de ruedas en la pared.",
      src: "/images/bus-inside.jpg",
      width: 1600,
      height: 900,
    },
    sections: [
      {
        heading: "Zona de servicio",
        paragraphs: [
          "Ofrecemos viajes en West Sacramento y los vecindarios cercanos.",
          "Algunas direcciones fuera de esa zona podrían funcionar, según el día y la ruta. Si su zona no aparece en la lista, llámenos con su dirección y lo verificaremos.",
        ],
        list: {
          label: "Zonas que atendemos normalmente:",
          items: [
            "West Sacramento",
            "Bryte y Broderick",
            "Southport",
            "Partes de Sacramento cerca del río",
            "Antelope",
            "Elk Grove",
            "Natomas",
            "Carmichael",
            "Rancho Cordova",
          ],
        },
      },
      {
        heading: "Recogida y regreso",
        paragraphs: [
          "Cada pasajero recibe un margen de tiempo para la recogida y no una hora exacta, porque el tráfico y los demás pasajeros cambian la ruta.",
          "Nos acercamos a la puerta lo más posible. En la recogida, el cuidador del participante lo ayuda a subir al autobús. Los conductores no ayudan a los participantes a subir, y no pueden levantar a nadie para subirlo al autobús.",
          "En el centro, los conductores pueden ayudar a los participantes a bajar del autobús, y nuestros cuidadores están listos para recibirlos. Nuestros cuidadores no van a las casas de las personas.",
          "Si el autobús se retrasa, llamamos a la familia.",
        ],
      },
      {
        heading: "Acceso para sillas de ruedas y movilidad",
        paragraphs: [
          "Nuestros vehículos pueden transportar a personas que usan silla de ruedas, andador o bastón.",
          "Las sillas de ruedas se aseguran antes de que el vehículo se mueva, y se usa cinturón de seguridad con todos los pasajeros.",
          "Cuéntenos sobre el oxígeno, los traslados o cualquier otra cosa que el conductor deba saber, y lo tendremos en cuenta.",
        ],
      },
      {
        heading: "Cómo las familias organizan o cambian un viaje",
        paragraphs: [
          "Los viajes se organizan cuando su ser querido se inscribe, y el horario se mantiene igual de una semana a otra.",
          "Para cambiar la dirección de recogida, agregar un día o cancelar un viaje, llame a la oficina.",
          "Si cancela el mismo día, llame lo antes posible para que el conductor pueda ajustar la ruta.",
        ],
        list: {
          label: "Para cambiar un viaje, tenga a mano lo siguiente:",
          items: [
            "El nombre del pasajero",
            "La fecha o las fechas que cambian",
            "La nueva dirección, si cambia el lugar de recogida",
            "Un número de teléfono donde podamos localizarle ese día",
          ],
        },
      },
    ],
    secondPhoto: {
      kind: "bus" as const,
      label: "Espacio para foto - elevador para silla de ruedas en un autobús de Golden Days",
      alt: "El elevador para sillas de ruedas en la parte trasera de un autobús de Golden Days, con la plataforma levantada dentro de las puertas traseras abiertas.",
      src: "/images/wheelchair-lift.jpg",
      width: 1600,
      height: 900,
    },
    cta: {
      heading: "¿Preguntas sobre una recogida?",
      text: "Llame a la oficina y pida el horario de transporte.",
    },
  },

  // ---------------------------------------------------------- Enrollment ---
  enrollment: {
    meta: {
      title: "Inscripción",
      description:
        "Quién califica para Golden Days, quién paga, qué traer y los pasos para inscribirse en West Sacramento.",
    },
    heading: "Inscripción",
    lead: "Inscribirse requiere unas cuantas conversaciones, no una montaña de papeleo. Así es como funciona.",
    qualifies: {
      heading: "Quién califica",
      intro: "Golden Days suele ser adecuado para un adulto que:",
      items: [
        "Es un adulto que vive en casa o con su familia",
        "Necesita ayuda, supervisión o compañía durante el día",
        "Tiene una condición de salud que se beneficia de revisiones regulares",
        "Puede participar en un programa diurno en grupo",
      ],
      note: "La elegibilidad se decide después de una evaluación, no por teléfono. Llámenos y le diremos cuál es el siguiente paso.",
    },
    pays: {
      heading: "Quién paga",
      intro: "Las familias suelen pagar de una de estas maneras:",
      items: [
        {
          title: "Medi-Cal",
          text: "Aceptamos Medi-Cal junto con un plan de seguro, pero no Medi-Cal por sí solo. Podemos explicarle cómo es el proceso.",
        },
        {
          title: "Planes de atención administrada",
          text: "Algunos planes de salud cubren los programas diurnos. Revisaremos lo que dice su plan.",
        },
        {
          title: "Pago particular",
          text: "Las familias también pueden pagar directamente.",
        },
      ],
      note: "Nada en esta página es una promesa de cobertura ni un precio. Llámenos para obtener información actual sobre su situación.",
    },
    bring: {
      heading: "Qué traer",
      intro: "Traiga lo que tenga. Nosotros le ayudamos con el resto.",
      items: [
        "Identificación con foto",
        "Tarjeta del seguro (puede traerla sola)",
        "Tarjeta de Medi-Cal (tráigala junto con la tarjeta del seguro, no sola)",
        "El nombre y el teléfono de su médico",
        "Nombres y teléfonos de contactos de emergencia",
        "Cualquier documento médico reciente que ya tenga",
      ],
    },
    steps: {
      heading: "Los pasos",
      items: [
        {
          title: "Llame o envíenos un mensaje",
          text: "Cuéntenos sobre su ser querido, los días que desea y cualquier preocupación. Esta llamada dura unos diez minutos.",
        },
        {
          title: "Conozca el centro",
          text: "Visítenos durante el horario del programa, de preferencia antes de la 1:30 p. m., para ver un día normal. Traiga a su ser querido si le resulta cómodo.",
        },
        {
          title: "Evaluación",
          text: "Nuestro equipo revisa el historial de salud, las necesidades diarias y las metas para confirmar que el programa es adecuado.",
        },
        {
          title: "Trámites y cobertura",
          text: "Completamos juntos los formularios de inscripción y resolvemos las preguntas sobre la cobertura.",
        },
        {
          title: "Primer día",
          text: "Fijamos el horario, organizamos los viajes y presentamos a su ser querido al personal y a los demás participantes.",
        },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          question: "¿Cuántos días a la semana puede venir mi ser querido?",
          answer: "Los horarios van de uno a cinco días a la semana. Lo fijaremos junto con usted.",
        },
        {
          question: "¿Cuánto tarda la inscripción?",
          answer: "Depende de los trámites y de la cobertura. Le daremos un plazo realista en la primera llamada.",
        },
        {
          question: "¿Podemos probar primero?",
          answer: "Empiece con una visita. Pregúntenos por un día de prueba cuando venga.",
        },
        {
          question: "¿Qué pasa si mi ser querido no quiere venir?",
          answer: "Eso es común. Una visita y una primera semana corta suelen ayudar. Lo hemos hecho muchas veces.",
        },
      ],
    },
    qualifyPrompt: {
      heading: "¿No está seguro de si es lo adecuado?",
      text: "Responda cinco preguntas cortas y le indicaremos el siguiente paso. Toma cerca de un minuto.",
    },
    cta: {
      heading: "¿Listo para comenzar?",
      text: "Llámenos o programe una visita. Hacer preguntas no tiene costo.",
    },
  },

  // ------------------------------------------------- Do I qualify? check ---
  // Five questions, one per screen. Nothing here is stored or sent anywhere;
  // the answers only live in the browser while the page is open.
  qualify: {
    meta: {
      title: "¿Califico?",
      description:
        "Responda cinco preguntas cortas para ver si Golden Days, en West Sacramento, puede ser lo adecuado.",
    },
    intro: {
      heading: "Vea si Golden Days puede ser lo adecuado para usted o su ser querido.",
      reassurance:
        "Esto toma cerca de un minuto. No es una solicitud ni una decisión final. No le pedimos su nombre ni ninguna información de salud, y sus respuestas se quedan en esta página. No las recopilamos ni las guardamos.",
      startLabel: "Comenzar las preguntas",
    },
    progressLabel: "Pregunta {current} de {total}",
    progressBarLabel: "Cuánto lleva avanzado",
    backLabel: "Volver",
    helpLabel: "¿Qué significa esto?",
    answers: {
      yes: "Sí",
      no: "No",
      notSure: "No estoy seguro/a",
    },
    answerGroupLabel: "Elija una respuesta",
    questions: [
      {
        text: "¿La persona tiene 18 años o más?",
        help: "Golden Days es un programa para adultos. Si está preguntando por un padre, una madre o un cónyuge, responda por esa persona.",
      },
      {
        text: "¿Vive en West Sacramento o en una zona cercana que atendemos?",
        help: "Atendemos West Sacramento y zonas cercanas, incluidas Sacramento, Natomas, Elk Grove, Carmichael, Rancho Cordova y Antelope. Si no está seguro, elija No estoy seguro y lo verificaremos.",
      },
      {
        text: "¿Puede participar en actividades de grupo durante el día, con o sin andador o silla de ruedas?",
        help: "Las actividades de grupo incluyen ejercicio, música, juegos y comidas en compañía. Cada persona participa a su manera, y algunas también necesitan atención médica durante el día. Si no está seguro de que pueda estar en un grupo, elija No estoy seguro.",
      },
      {
        text: "¿Tiene seguro médico de una compañía de seguros, con o sin Medi-Cal?",
        help: "Aceptamos seguro médico, y Medi-Cal junto con un seguro. Medi-Cal por sí solo no es suficiente. Si no está seguro, elija No estoy seguro.",
      },
      {
        text: "¿Tiene un médico que pueda compartir documentos médicos recientes?",
        help: "Pedimos documentos médicos recientes de su médico, junto con la información de su seguro. Si no está seguro, elija No estoy seguro.",
      },
    ],
    results: {
      announcement: "Aquí están sus resultados.",
      goodFit: {
        heading: "Buenas noticias. Golden Days es adecuado para usted.",
        text: "Llámenos o programe una visita, y le ayudaremos con los siguientes pasos.",
      },
      notFit: {
        heading: "Es posible que Golden Days no sea lo adecuado.",
        text: "Gracias por verificarlo. Si desea hablarlo, llámenos y con gusto le ayudaremos.",
      },
      unsure: {
        heading: "Todavía no estamos seguros, y no hay problema.",
        text: "Muchas familias no están seguras al principio. Llámenos y revisaremos su situación juntos. Algunas respuestas pueden cambiar con los documentos o la cobertura adecuados. Si todas las respuestas son sí, Golden Days es adecuado para usted.",
      },
      enrollmentLinkLabel: "Lea cómo funciona la inscripción",
      startOverLabel: "Empezar de nuevo",
    },
  },

  // ------------------------------------------------------------- Contact ---
  contactPage: {
    meta: {
      title: "Contacto",
      description:
        "Llame a Golden Days Adult Day Health Care en West Sacramento, envíe un mensaje o programe una visita.",
    },
    heading: "Contáctenos",
    lead: "Llámenos durante el horario del centro, o envíe un mensaje y le responderemos.",
    detailsHeading: "Visítenos o llámenos",
    directionsHeading: "Cómo encontrarnos",
    directionsText:
      "La entrada está a nivel del suelo y el estacionamiento está frente al edificio.",
    photo: {
      kind: "building" as const,
      label: "Espacio para foto - entrada del edificio",
      alt: "La entrada de Golden Days en 1215 Merkley Ave, con el letrero sobre la puerta y conos colocados junto al camino.",
      src: "/images/building-entrance.jpg",
      width: 1200,
      height: 900,
    },
    tourHeading: "Programe una visita",
    tourText:
      "Las visitas se hacen durante el horario del programa, de preferencia antes de la 1:30 p. m., para que pueda ver un día normal. Llámenos o use el formulario y diga que desea una visita.",
  },

  form: {
    heading: "Envíenos un mensaje",
    responseTime: "Un miembro de nuestro equipo le llamará en un plazo de un día hábil.",
    callAlternativeLead: "¿Prefiere hablar?",
    callAlternativeLinkPrefix: "Llámenos al",
    medicalNote: "Por favor, no incluya información médica en este formulario.",
    fields: {
      name: { label: "Su nombre", placeholder: "Nombre y apellido" },
      phone: { label: "Número de teléfono", placeholder: "(916) 555-0123" },
      email: { label: "Correo electrónico (opcional)", placeholder: "you@example.com" },
      message: {
        label: "¿En qué podemos ayudarle? (opcional)",
        placeholder: "Cuéntenos un poco sobre la persona que necesita el cuidado.",
      },
      honeypot: { label: "Deje este campo vacío" },
    },
    required: "Obligatorio",
    submit: "Enviar mensaje",
    submitting: "Enviando...",
    successHeading: "Gracias. Su mensaje ha sido enviado.",
    successText:
      "Le responderemos durante el horario del centro. Si necesita una respuesta más pronto, por favor llámenos.",
    successAgain: "Enviar otro mensaje",
    errorHeading: "Su mensaje no se pudo enviar.",
    errorText: "Por favor, inténtelo de nuevo o llámenos.",
    notConfiguredHeading: "El formulario de mensajes aún no está conectado.",
    notConfiguredText:
      "Este sitio no tiene una dirección de formulario configurada, así que no se envió nada. Configure NEXT_PUBLIC_FORM_ENDPOINT con una dirección de Formspree para activar el formulario. Mientras tanto, por favor llámenos.",
    validation: {
      name: "Por favor, escriba su nombre.",
      phone: "Por favor, escriba un número de teléfono al que podamos llamar.",
    },
  },

  language: {
    label: "Idioma",
  },

  a11y: {
    stepLabel: "Paso {number}: ",
  },

  notFound: {
    metaTitle: "Página no encontrada",
    heading: "No pudimos encontrar esa página",
    text: "Es posible que la página se haya movido. Pruebe el menú en la parte superior de la pantalla, o llámenos y le ayudaremos.",
    homeLabel: "Ir a la página de inicio",
  },

  photoPlaceholderNote: "Imagen provisional. Reemplácela con una foto real antes del lanzamiento.",
};
