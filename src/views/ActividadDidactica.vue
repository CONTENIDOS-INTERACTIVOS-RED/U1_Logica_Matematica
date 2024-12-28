<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Lógica Matemática',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Evaluar los conocimientos fundamentales sobre lógica matemática y sus aplicaciones.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Para qué se utiliza la lógica matemática?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para resolver problemas de álgebra avanzada',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para estructurar y analizar argumentos y proposiciones',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Para medir magnitudes en física',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cómo se diferencia la lógica matemática de otras ramas de la matemática?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo estudia los números primos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se enfoca en el razonamiento y no en el cálculo numérico',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estudia únicamente las ecuaciones cuadráticas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué disciplinas se apoyan en la lógica matemática?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Física y estadística', esCorrecta: false },
            { id: 'b', texto: 'Derecho y filosofía', esCorrecta: false },
            { id: 'c', texto: 'Filosofía e informática', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Quién es considerado el padre de la lógica matemática moderna?',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Isaac Newton', esCorrecta: false },
            { id: 'b', texto: 'Albert Einstein', esCorrecta: false },
            { id: 'c', texto: 'George Boole', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué indica el conector lógico "OR"?',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambas proposiciones deben ser verdaderas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Al menos una proposición debe ser verdadera',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ambas proposiciones deben ser falsas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
