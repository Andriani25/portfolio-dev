export interface Project {
    id: string;
    title: {
        es: string;
        en: string;
    };
    description: {
        es: string;
        en: string;
    };
    solution: {
        es: string;
        en: string;
    };
    githubUrl: string;
    projectUrl: string;
    isPublic: boolean;
    images: string[];
}

import formUspt1 from "../assets/formUspt1.jpeg";
import formUspt2 from "../assets/formUspt2.jpeg";
import formUspt3 from "../assets/formUspt3.jpeg";

import cabana1 from "../assets/cabana1.jpeg";
import cabana2 from "../assets/cabana2.jpeg";
import cabana3 from "../assets/cabana3.jpeg";

import usptTest1 from "../assets/usptTest1.jpeg";
import usptTest2 from "../assets/usptTest2.jpeg";
import usptTest3 from "../assets/usptTest3.jpeg";

export const PROJECTS_DETAILED_DATA: Record<string, Project> = {
    "Formulario de Inscripcion USPT": {
        id: "formuspt",
        title: {
            es: "Formulario de Inscripcion USPT",
            en: "Inscription Form Uspt"
        },
        description: {
            es: "Un formulario para ingresantes en las carreras, cursos, diplomaturas o maestrias de la Universidad San Pablo Tucumán. En la misma, se registra al interesado y se generan los papeles necesarios automaticamente con la informacion brindada.",
            en: "An inscription form for the USPT for those interested in careers, courses, diplomas or master's degrees at the Universidad San Pablo Tucumán. In it, all the necessary papers are generated automatically with the information provided for the costumer."
        },
        solution: {
            es: "Se implementó una solucion rápida para el cliente, brindando una opcion rápida y escalable para conseguir mayor cantidad de interesados e inscriptos en la universidad. Además, de brindar un sistema simple de gestion para los administrativos con el que ya estaban familiarizados.",
            en: "A quick solution was implemented for the client, providing a fast and scalable option to get more interested and enrolled students at the university. Additionally, it provides a simple management system for the administrative staff with which they were already familiar."
        },
        githubUrl: "",
        projectUrl: "https://inscripciones-virtuales-uspt.vercel.app/",
        isPublic: false,
        images: [
            formUspt1,
            formUspt2,
            formUspt3
        ]
    },
    "Cabana Landing Page": {
        id: "cabana",
        title: {
            es: "Cabana Landing Page",
            en: "Cabana Landing Page"
        },
        description: {
            es: "Una página web para un estudio de grabacion musical, diseñada para mostrar sus instalaciones y servicios, ademas de facilitar el contacto para reservas.",
            en: "A website for a recording studio, designed to showcase its facilities and services, as well as facilitate contact for bookings."
        },
        solution: {
            es: "Diseñado con un enfoque mobile-first y utilizando Tailwind CSS para un estilizado rápido y eficiente. Se incorporaron animaciones interactivas con Framer Motion para mejorar el engagement del usuario.",
            en: "Designed with a mobile-first approach and using Tailwind CSS for fast and efficient styling. Interactive animations were incorporated with Framer Motion to improve engagement."
        },
        githubUrl: "https://github.com/Andriani25/la_cabana_studio",
        projectUrl: "https://la-cabana-studio.vercel.app/",
        isPublic: true,
        images: [
            cabana1,
            cabana2,
            cabana3
        ]
    },
    "Test Vocacional USPT": {
        id: "testuspt",
        title: {
            es: "Test Vocacional USPT",
            en: "Vocational Test USPT"
        },
        description: {
            es: "Un test vocacional para la Universidad San Pablo Tucumán, diseñado para ayudar a los estudiantes a encontrar la carrera ideal para ellos.",
            en: "A vocational test for the Universidad San Pablo Tucumán, designed to help students find the ideal career for them."
        },
        solution: {
            es: "Se implementó un sistema de preguntas con respuestas múltiples, donde cada respuesta tiene un puntaje asociado. Al finalizar el test, se genera un informe con las carreras recomendadas para el usuario.",
            en: "A system of questions with multiple answers was implemented, where each answer has an associated score. At the end of the test, a report is generated with the recommended careers for the user."
        },
        githubUrl: "https://github.com/Andriani25/USPT-TestVocacional",
        projectUrl: "https://uspt-test-carreras.vercel.app/",
        isPublic: true,
        images: [
            usptTest1,
            usptTest2,
            usptTest3
        ]
    },
};
