export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición de lógica matemática',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pensamiento lógico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Razonamiento deductivo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Razonamiento inductivo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Relación entre ambos tipos de razonamiento',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Importancia del pensamiento lógico en la vida cotidiana',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Pensamiento crítico y lógica',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Proposiciones, conectores lógicos y tablas de verdad',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        unidad: '',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividadDidactica',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bates, T. (2015). Teaching in a digital age: Guidelines for designing teaching and learning. BCcampus.',
      link: '',
    },
    {
      referencia:
        'Bautista Pérez, G., Forés Miravalles, A., & Borges Sáiz, F. (2016). Didáctica universitaria en entornos virtuales de enseñanza-aprendizaje. Narcea Ediciones.',
      link: '',
    },
    {
      referencia: 'Bustinduy, I. (2015). La gestión del tiempo. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Cenich, G. (2006). Propuesta de aprendizaje basado en proyecto y trabajo colaborativo: experiencia de un curso en línea. Red Revista Electrónica de Investigación Educativa.',
      link: '',
    },
    {
      referencia:
        'García, L. (2019). Productividad y gestión del tiempo: Principios y técnicas efectivas.',
      link: '',
    },
    {
      referencia:
        'Moore, M. G., & Kearsley, G. (2012). Distance education: A systems view of online learning (3rd ed.). Wadsworth Cengage Learning.',
      link: '',
    },
    {
      referencia:
        "O'Driscoll, A., & Kaye, P. (2019). Los sistemas de gestión de aprendizaje: Modernización educativa y acceso eficiente al contenido. Editorial ABC.",
      link: '',
    },
    {
      referencia:
        'Organización para la Cooperación y el Desarrollo Económicos (OCDE). (2017). Manual para entornos de aprendizaje innovadores. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Pedraza, M. A. (2009). Los entornos virtuales de enseñanza-aprendizaje: propuesta pedagógica. El Cid Editor | Apuntes.',
      link: '',
    },
    {
      referencia:
        'Quijada Monroy, V. del C. (2014). Aprendizaje virtual. Editorial Digital UNID.',
      link: '',
    },
    {
      referencia:
        'Ramos Ramos, P. (2014). Gestión del tiempo y planificación de tareas (2a ed.). Editorial ICB.',
      link: '',
    },
    {
      referencia:
        'Ruiz Ospino, E. A., & Sánchez Fontalvo, I. M. (2019). ¿Qué piensan los profesores universitarios de los estilos de aprendizaje?. Editorial Unimagdalena.',
      link: '',
    },
    {
      referencia:
        'Salmon, G. (2013). Moderación electrónica: la clave para la enseñanza y el aprendizaje en línea.',
      link: '',
    },
    {
      referencia:
        'Sangrà Morer, A., & Girona Campillo, C. (2013). Los materiales de aprendizaje en contextos educativos virtuales: pautas para el diseño tecnopedagógico. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Torres Quiñones, A. (2015). La construcción de las estrategias de aprendizaje en la formación inicial del profesional de la educación desde los entornos virtuales de aprendizaje. Editorial Universitaria.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Axioma',
      significado:
        'Proposición que se acepta como verdadera sin necesidad de demostración; base sobre la cual se construyen teoremas.',
    },
    {
      termino: 'Conclusión',
      significado:
        'Resultado o inferencia derivada de las premisas en un razonamiento lógico.',
    },
    {
      termino: 'Condicional',
      significado:
        'Proposición del tipo "si... entonces...", que establece una relación entre dos eventos.',
    },
    {
      termino: 'Conjunción',
      significado:
        'Operación lógica que combina dos proposiciones y es verdadera solo si ambas son verdaderas; representada como P∧Q.',
    },
    {
      termino: 'Ecuación',
      significado: 'Igualdad matemática que contiene una o más incógnitas.',
    },
    {
      termino: 'Lógica',
      significado:
        'Rama de la filosofía y las matemáticas que estudia el razonamiento válido y las inferencias.',
    },
    {
      termino: 'Lógica de predicados',
      significado:
        'Extensión de la lógica proposicional que incluye cuantificadores y permite el uso de variables y predicados.',
    },
    {
      termino: 'Negación',
      significado:
        'Operación lógica que invierte el valor de verdad de una proposición.',
    },
    {
      termino: 'Premisa',
      significado:
        'Proposición o afirmación que forma parte de un argumento lógico.',
    },
    {
      termino: 'Silogismo',
      significado:
        'Forma de razonamiento deductivo que consiste en dos premisas y una conclusión.',
    },
    {
      termino: 'Tabla de verdad',
      significado:
        'Herramienta que muestra todos los posibles valores de verdad de una proposición o conjunto de proposiciones.',
    },
    {
      termino: 'Teorema',
      significado:
        'Proposición que ha sido demostrada a partir de axiomas y otras proposiciones previamente establecidas.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
