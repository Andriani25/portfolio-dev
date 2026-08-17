export interface PrivacySection {
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

export interface PrivacyData {
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
    sections: PrivacySection[];
}

export const PRIVACY_DATA: PrivacyData = {
    title: {
        es: "Política de Privacidad",
        en: "Privacy Policy"
    },
    lastUpdated: {
        es: "Última actualización: Agosto 2026",
        en: "Last updated: August 2026"
    },
    intro: {
        es: "Esta Política de Privacidad explica qué información personal se recopila en este sitio web del portafolio de Andriani Leandro (en adelante, \"el proveedor\" o \"el programador\"), cómo se utiliza, y los derechos que usted tiene sobre sus datos, de acuerdo con la Ley 25.326 de Protección de los Datos Personales de la República Argentina y demás normativa aplicable. Al utilizar este sitio o contactar al proveedor, usted acepta las prácticas descriptas en esta política.",
        en: "This Privacy Policy explains what personal information is collected on this portfolio website of Andriani Leandro (hereinafter \"the provider\" or \"the programmer\"), how it is used, and the rights you have over your data, in accordance with Law 25.326 on Personal Data Protection of the Argentine Republic and other applicable regulations. By using this site or contacting the provider, you agree to the practices described in this policy."
    },
    sections: [
        {
            id: "collection",
            icon: "📊",
            title: {
                es: "1. Información que Recopilamos",
                en: "1. Information We Collect"
            },
            content: {
                es: "Este sitio web no recopila datos personales de forma automática. No utiliza formularios de contacto, no requiere registro ni cuentas de usuario, y no implementa analíticas de tráfico. La única información personal que el proveedor puede manejar es aquella que usted decide compartir voluntariamente al comunicarse por correo electrónico (nombre, dirección de correo y los datos incluidos en su mensaje).",
                en: "This website does not automatically collect personal data. It does not use contact forms, does not require registration or user accounts, and does not implement traffic analytics. The only personal information the provider may handle is what you decide to share voluntarily when contacting by email (name, email address and the data included in your message)."
            }
        },
        {
            id: "client-data",
            icon: "💼",
            title: {
                es: "2. Datos de Clientes y Proyectos",
                en: "2. Client and Project Data"
            },
            content: {
                es: "Durante el desarrollo de proyectos de automatización, el cliente puede compartir información sensible como datos personales de terceros, credenciales de acceso o estrategias comerciales. Esta información se trata como confidencial y se utiliza exclusivamente para la prestación del servicio contratado, tal como se establece en los Términos y Servicios. Al finalizar el proyecto, las credenciales y datos sensibles se devuelven o eliminan a solicitud del cliente.",
                en: "During the development of automation projects, the client may share sensitive information such as third-party personal data, access credentials or business strategies. This information is treated as confidential and is used exclusively for the provision of the contracted service, as established in the Terms and Services. Upon project completion, credentials and sensitive data are returned or deleted at the client's request."
            }
        },
        {
            id: "cookies",
            icon: "🍪",
            title: {
                es: "3. Cookies y Rastreo",
                en: "3. Cookies and Tracking"
            },
            content: {
                es: "Este sitio web no utiliza cookies, píxeles de seguimiento, ni servicios de analíticas de terceros. Las preferencias de tema (claro/oscuro) e idioma (español/inglés) se mantienen únicamente en la memoria de la sesión del navegador y no se almacenan en su dispositivo. Por lo tanto, no se requiere un banner de consentimiento de cookies.",
                en: "This website does not use cookies, tracking pixels or third-party analytics services. The theme (light/dark) and language (Spanish/English) preferences are kept only in the browser session memory and are not stored on your device. Therefore, a cookie consent banner is not required."
            }
        },
        {
            id: "use",
            icon: "🎯",
            title: {
                es: "4. Uso de la Información",
                en: "4. Use of Information"
            },
            content: {
                es: "La información que usted comparte voluntariamente se utiliza únicamente para responder sus consultas, elaborar propuestas y brindar los servicios contratados. El proveedor no vende, alquila ni cede sus datos personales a terceros, salvo que sea requerido por ley o por orden judicial, conforme al Artículo 11 de la Ley 25.326.",
                en: "The information you voluntarily share is used solely to respond to your inquiries, prepare proposals and provide the contracted services. The provider does not sell, rent or transfer your personal data to third parties, except when required by law or by court order, in accordance with Article 11 of Law 25.326."
            }
        },
        {
            id: "retention",
            icon: "🔐",
            title: {
                es: "5. Retención y Seguridad",
                en: "5. Retention and Security"
            },
            content: {
                es: "El proveedor aplica medidas razonables de seguridad para proteger la información que recibe, y conserva los datos únicamente durante el tiempo necesario para cumplir con la finalidad para la que fueron proporcionados o durante los plazos legales aplicables. Se recomienda no enviar información altamente sensible a través de correo electrónico sin antes acordar un canal seguro.",
                en: "The provider applies reasonable security measures to protect the information received, and retains data only for as long as necessary to fulfill the purpose for which it was provided or for the applicable legal periods. It is recommended not to send highly sensitive information by email without first agreeing on a secure channel."
            }
        },
        {
            id: "rights",
            icon: "🛡️",
            title: {
                es: "6. Sus Derechos (Ley 25.326)",
                en: "6. Your Rights (Law 25.326)"
            },
            content: {
                es: "De acuerdo con la Ley 25.326 de Protección de los Datos Personales, usted tiene derecho a solicitar el acceso, la rectificación, la actualización o la supresión de sus datos personales, así como a oponerse a su tratamiento cuando corresponda. Para ejercer estos derechos, simplemente envíe un correo electrónico a andriani.leandro25@gmail.com indicando su solicitud.",
                en: "In accordance with Law 25.326 on Personal Data Protection, you have the right to request access, rectification, updating or deletion of your personal data, as well as to object to its processing when applicable. To exercise these rights, simply send an email to andriani.leandro25@gmail.com stating your request."
            }
        },
        {
            id: "minors",
            icon: "🧒",
            title: {
                es: "7. Menores de Edad",
                en: "7. Minors"
            },
            content: {
                es: "Este sitio y los servicios ofrecidos no están dirigidos a menores de 18 años. El proveedor no recopila de manera intencional datos personales de menores de edad.",
                en: "This site and the services offered are not directed to individuals under 18 years of age. The provider does not intentionally collect personal data from minors."
            }
        },
        {
            id: "changes",
            icon: "📝",
            title: {
                es: "8. Cambios en esta Política",
                en: "8. Changes to this Policy"
            },
            content: {
                es: "El proveedor puede actualizar esta Política de Privacidad cuando lo considere necesario. Cualquier cambio será publicado en esta misma página, junto con la fecha de la última actualización. Se recomienda revisar periódicamente esta sección.",
                en: "The provider may update this Privacy Policy when considered necessary. Any changes will be published on this same page, together with the date of the last update. It is recommended to review this section periodically."
            }
        },
        {
            id: "contact",
            icon: "📧",
            title: {
                es: "9. Contacto",
                en: "9. Contact"
            },
            content: {
                es: "Ante cualquier duda o consulta sobre esta Política de Privacidad o el tratamiento de sus datos personales, puede contactarse con el proveedor en andriani.leandro25@gmail.com.",
                en: "If you have any questions about this Privacy Policy or the processing of your personal data, you can contact the provider at andriani.leandro25@gmail.com."
            }
        }
    ]
};