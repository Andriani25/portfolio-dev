export interface TermsSection {
    id: string;
    icon: string;
    title: {
        es: string;
        en: string;
    };
    content: {
        es: string;
        en: string;
    };
}

export interface TermsData {
    title: {
        es: string;
        en: string;
    };
    lastUpdated: {
        es: string;
        en: string;
    };
    intro: {
        es: string;
        en: string;
    };
    sections: TermsSection[];
}

export const TERMS_DATA: TermsData = {
    title: {
        es: "Términos y Servicios",
        en: "Terms and Services"
    },
    lastUpdated: {
        es: "Última actualización: Agosto 2026",
        en: "Last updated: August 2026"
    },
    intro: {
        es: "Al contratar o utilizar los servicios de automatización ofrecidos por Andriani Leandro (en adelante, \"el proveedor\" o \"el programador\"), el cliente acepta los siguientes Términos y Servicios. Le pedimos leer detenidamente este documento antes de comenzar cualquier proyecto. Si no está de acuerdo con alguno de los términos, por favor no inicie el proyecto.",
        en: "By hiring or using the automation services offered by Andriani Leandro (hereinafter \"the provider\" or \"the programmer\"), the client agrees to the following Terms and Services. Please read this document carefully before starting any project. If you do not agree with any of the terms, please do not start the project."
    },
    sections: [
        {
            id: "scope",
            icon: "⚙️",
            title: {
                es: "1. Alcance de los Servicios de Automatización",
                en: "1. Scope of Automatization Services"
            },
            content: {
                es: "El proveedor ofrece servicios de desarrollo y automatización de software como programador técnico, incluyendo de manera enunciativa: scripts y bots personalizados, automatización de procesos y tareas repetitivas, integraciones con APIs y servicios de terceros, extracción y procesamiento de datos (web scraping), generación automática de documentos y reportes, y optimización de flujos de trabajo. El alcance exacto de cada proyecto, sus entregables, plazos e hitos se detallan en la propuesta o contrato específico de cada cliente. Queda excluido de los servicios todo trabajo no contemplado expresamente en dicha propuesta.",
                en: "The provider offers software development and automation services as a technical programmer, including but not limited to: custom scripts and bots, automation of repetitive processes and tasks, integrations with APIs and third-party services, data extraction and processing (web scraping), automatic generation of documents and reports, and workflow optimization. The exact scope of each project, its deliverables, timelines and milestones are detailed in the proposal or specific contract of each client. Any work not expressly contemplated in said proposal is excluded from the services."
            }
        },
        {
            id: "proposal",
            icon: "📋",
            title: {
                es: "2. Propuestas, Estimaciones y Entregables",
                en: "2. Proposals, Estimates and Deliverables"
            },
            content: {
                es: "Cada proyecto comienza con una propuesta o estimación que define los entregables, los formatos de entrega, los plazos y los hitos de pago. Las estimaciones de tiempo y costo son aproximadas y se basan en la información proporcionada por el cliente al momento de la cotización. Los entregables se consideran finales cuando el cliente los aprueba por escrito o por correo electrónico.",
                en: "Each project begins with a proposal or estimate that defines the deliverables, delivery formats, deadlines and payment milestones. Time and cost estimates are approximate and based on the information provided by the client at the moment of quoting. Deliverables are considered final when the client approves them in writing or by email."
            }
        },
        {
            id: "revisions",
            icon: "🔄",
            title: {
                es: "3. Revisiones y Solicitudes de Cambio",
                en: "3. Revisions and Change Requests"
            },
            content: {
                es: "La cotización base incluye un número razonable de rondas de revisión (por defecto dos) para ajustes menores sobre los entregables acordados. Cualquier cambio mayor al alcance original, nuevas funcionalidades o rediseños que no estuvieran contemplados en la propuesta se considerarán trabajo adicional y se cotizarán por separado, ya sea a tarifa horaria o mediante una nueva propuesta. Una \"revisión\" se define como un ajuste menor sobre el trabajo ya entregado; una funcionalidad nueva o un cambio de enfoque se considera trabajo nuevo.",
                en: "The base quote includes a reasonable number of revision rounds (by default two) for minor adjustments on the agreed deliverables. Any major change to the original scope, new features or redesigns that were not contemplated in the proposal will be considered additional work and will be quoted separately, either at an hourly rate or through a new proposal. A \"revision\" is defined as a minor adjustment to the already delivered work; a new feature or a change of approach is considered new work."
            }
        },
        {
            id: "payment",
            icon: "💰",
            title: {
                es: "4. Honorarios, Pagos y Depósitos",
                en: "4. Fees, Payments and Deposits"
            },
            content: {
                es: "Para proyectos nuevos se solicita un depósito inicial del 30% (ajustable según el tamaño del proyecto) antes de comenzar el trabajo. El saldo restante se factura según los hitos acordados o al momento de la entrega final. Las facturas tienen un vencimiento estándar de 15 días. Se aplicará un recargo por mora del 2% mensual sobre los saldos vencidos. El proveedor se reserva el derecho de suspender el trabajo si el pago no se recibe en término. Los métodos de pago aceptados se especifican en la propuesta.",
                en: "For new projects, an initial deposit of 30% (adjustable depending on project size) is required before starting work. The remaining balance is invoiced according to the agreed milestones or upon final delivery. Invoices have a standard due date of 15 days. A late fee of 2% per month will be applied on overdue balances. The provider reserves the right to suspend work if payment is not received on time. Accepted payment methods are specified in the proposal."
            }
        },
        {
            id: "ip",
            icon: "©️",
            title: {
                es: "5. Propiedad Intelectual",
                en: "5. Intellectual Property"
            },
            content: {
                es: "La propiedad intelectual del código y los entregables finales desarrollados específicamente para el cliente se transfiere al cliente una vez realizado el pago total del proyecto. El proveedor conserva la titularidad de los frameworks, plantillas, bibliotecas propias y metodologías genéricas reutilizables desarrolladas con anterioridad, así como el derecho a exhibir el trabajo en su portafolio. Los componentes de terceros y las librerías de código abierto mantienen sus respectivas licencias.",
                en: "The intellectual property of the code and final deliverables developed specifically for the client is transferred to the client once the total payment of the project is made. The provider retains ownership of frameworks, templates, proprietary libraries and reusable generic methodologies developed previously, as well as the right to showcase the work in his portfolio. Third-party components and open-source libraries retain their respective licenses."
            }
        },
        {
            id: "confidentiality",
            icon: "🔒",
            title: {
                es: "6. Confidencialidad y Datos",
                en: "6. Confidentiality and Data"
            },
            content: {
                es: "El proveedor tratará como confidencial toda la información sensible del cliente a la que acceda durante el proyecto, incluyendo datos personales, credenciales de acceso y estrategias comerciales. Dicha información se utilizará únicamente para la prestación del servicio y no será divulgada a terceros. Al finalizar el proyecto, las credenciales y datos sensibles serán devueltos o eliminados a solicitud del cliente. Esta obligación permanece vigente incluso después de finalizado el proyecto.",
                en: "The provider will treat as confidential any sensitive client information accessed during the project, including personal data, access credentials and business strategies. Such information will be used solely for the provision of the service and will not be disclosed to third parties. Upon project completion, credentials and sensitive data will be returned or deleted at the client's request. This obligation remains in effect even after the project is finished."
            }
        },
        {
            id: "thirdparty",
            icon: "🔗",
            title: {
                es: "7. Servicios y Plataformas de Terceros",
                en: "7. Third-Party Services and Platforms"
            },
            content: {
                es: "Muchas automatizaciones interactúan con plataformas, APIs o sitios web de terceros. El proveedor no está afiliado con dichos terceros y no garantiza la disponibilidad, estabilidad ni permisos de esas plataformas. Es responsabilidad exclusiva del cliente cumplir con los términos de servicio y la legislación aplicable de las plataformas involucradas, y asumir los riesgos derivados de su uso. El proveedor no se hace responsable por suspensiones de cuentas, bloqueos o pérdidas ocasionadas por la utilización de las automatizaciones sobre dichas plataformas.",
                en: "Many automations interact with third-party platforms, APIs or websites. The provider is not affiliated with such third parties and does not guarantee the availability, stability or permissions of those platforms. It is the client's sole responsibility to comply with the terms of service and applicable legislation of the platforms involved, and to assume the risks derived from their use. The provider is not responsible for account suspensions, bans or losses caused by the use of automations on those platforms."
            }
        },
        {
            id: "warranty",
            icon: "🛡️",
            title: {
                es: "8. Garantía y Limitación de Responsabilidad",
                en: "8. Warranty and Limitation of Liability"
            },
            content: {
                es: "El proveedor realizará el trabajo con diligencia profesional y según las buenas prácticas de la industria. Se brinda un período de corrección de errores de 30 días desde la entrega final para fallas que no cumplan con lo especificado en la propuesta. El proveedor no garantiza resultados comerciales específicos ni el funcionamiento continuo, ininterrumpido o libre de errores de las automatizaciones, especialmente cuando dependen de sistemas de terceros. La responsabilidad total del proveedor, en cualquier caso, se limita al monto total pagado por el cliente en ese proyecto. El proveedor no será responsable por daños indirectos, lucro cesante o pérdida de oportunidades de negocio.",
                en: "The provider will perform the work with professional diligence and according to industry best practices. A 30-day error correction period is provided from final delivery for failures that do not meet what is specified in the proposal. The provider does not guarantee specific commercial results nor the continuous, uninterrupted or error-free operation of the automations, especially when they depend on third-party systems. The provider's total liability, in any case, is limited to the total amount paid by the client on that project. The provider will not be liable for indirect damages, loss of profits or loss of business opportunities."
            }
        },
        {
            id: "cancellation",
            icon: "✋",
            title: {
                es: "9. Cancelación y Terminación",
                en: "9. Cancellation and Termination"
            },
            content: {
                es: "El cliente puede cancelar el proyecto con un aviso previo de 7 días. En caso de cancelación, se retendrá el depósito inicial como compensación y se facturará el trabajo ya realizado más allá del depósito, según las tarifas acordadas. El proveedor puede suspender o terminar el trabajo ante falta de pago, incumplimiento de los términos o comportamiento que dificulte la colaboración.",
                en: "The client may cancel the project with 7 days prior notice. In case of cancellation, the initial deposit will be retained as compensation and the work already performed beyond the deposit will be billed according to the agreed rates. The provider may suspend or terminate the work in case of non-payment, breach of the terms or behavior that hinders collaboration."
            }
        },
        {
            id: "force-majeure",
            icon: "🌊",
            title: {
                es: "10. Fuerza Mayor",
                en: "10. Force Majeure"
            },
            content: {
                es: "Ninguna de las partes será responsable por retrasos o incumplimientos causados por eventos fuera de su control razonable, incluyendo desastres naturales, pandemias, conflictos armados, medidas gubernamentales, cortes de energía o fallas de conectividad.",
                en: "Neither party will be liable for delays or failures caused by events outside their reasonable control, including natural disasters, pandemics, armed conflicts, government measures, power outages or connectivity failures."
            }
        },
        {
            id: "disputes",
            icon: "⚖️",
            title: {
                es: "11. Resolución de Conflictos y Ley Aplicable",
                en: "11. Dispute Resolution and Governing Law"
            },
            content: {
                es: "Ante cualquier discrepancia, las partes se comprometen a negociar de buena fe para resolver el conflicto de manera amistosa. Si no se logra un acuerdo, las partes podrán recurrir a mediación o arbitraje antes de iniciar acciones judiciales. Estos términos se rigen por las leyes de la República Argentina, y cualquier controversia se somete a la jurisdicción de los tribunales de San Miguel de Tucumán, Provincia de Tucumán.",
                en: "In the event of any discrepancy, the parties commit to negotiate in good faith to resolve the conflict amicably. If an agreement is not reached, the parties may resort to mediation or arbitration before initiating legal actions. These terms are governed by the laws of the Argentine Republic, and any controversy is submitted to the jurisdiction of the courts of San Miguel de Tucumán, Province of Tucumán."
            }
        },
        {
            id: "contact",
            icon: "📧",
            title: {
                es: "12. Contacto",
                en: "12. Contact"
            },
            content: {
                es: "Ante cualquier duda sobre estos Términos y Servicios, puede contactarse con el proveedor en andriani.leandro25@gmail.com.",
                en: "If you have any questions about these Terms and Services, you can contact the provider at andriani.leandro25@gmail.com."
            }
        }
    ]
};