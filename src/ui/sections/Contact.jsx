import styles from "./styles/contact.module.css"
import { IoLocationSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { IoLogoWhatsapp } from "react-icons/io"
import { FaCircleQuestion } from "react-icons/fa6"
import { useState } from "react"

const data = [
    {
        img: <IoLocationSharp />,
        text: "Localização, detalhes de localização.",
        isLink: true,
        link: "https://google.com"
    }, {
        img: <MdEmail />,
        text: "Contato@email.com",
        isLink: true,
        link: "https://google.com"
    }, {
        img: <IoLogoWhatsapp />,
        text: "(28) 99999-9999",
        isLink: true,
        link: "https://google.com"
    }, {
        img: <FaCircleQuestion />,
        text: "Funcionamento: Segunda a Sexta: 7h às 19h",
        isLink: false,
    }
]

//Configs
const linkToFetch = "https://formsubmit.co/felipemaifredo@gmail.com"

const formDataInitialState = {
    name: "",
    emailOrWhatsApp: "",
    message: ""
}

const Contact = () => {
    const [formData, setFormData] = useState(formDataInitialState)
    const [textBTN, setTextBTN] = useState("Enviar")
    
    function handleSubmit(event) {
        event.preventDefault()

        if (!formData.name || !formData.emailOrWhatsApp || !formData.message) {
            setTextBTN("Preecha todos os campos acima")
            setTimeout(() => {
                setTextBTN("Enviar")
            }, 5000)
        } else {
            setTextBTN("Enviado...")
            fetch(linkToFetch, {
                method: "post",
                headers: { "Accept": "aplication/json", "Content-Type": "application/json" },
                body: JSON.stringify({
                    _captcha: "false",
                    _subject: "Novo Contato no Site!",
                    Nome: formData.name,
                    EmailouWhatsApp: formData.emailOrWhatsApp,
                    Mensagem: formData.message
                })
            }).then(() => {
                setTextBTN("Mensagem Enviada!")
                setTimeout(() => {
                    clearForm()
                    setTextBTN("Enviar")
                }, 5000)
            })
        }
    }

    function clearForm() {
        setFormData(formDataInitialState)
    }

    return (
        <section id="contato" className={styles.contact_section}>
            <div className={styles.data_container}>
                <h2>Estamos prontos para lhe atender</h2>
                {data.map((item) => (
                    <>
                        {item.isLink ? (
                            <a className={styles.data_item} key={item.text} href={item.link} target="_blanck"> <span> {item.img} </span> {item.text} </a>
                        ) : (
                            <p className={styles.data_item} key={item.text} > <span> {item.img} </span> {item.text} </p>
                        )}
                    </>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={formData.name && styles.not_empty}
                    placeholder="Nome"
                />
                <input
                    value={formData.emailOrWhatsApp}
                    onChange={(e) => setFormData({ ...formData, emailOrWhatsApp: e.target.value })}
                    className={formData.emailOrWhatsApp && styles.not_empty}
                    placeholder="Email ou WhatsApp"
                />
                <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={formData.message && styles.not_empty}
                    placeholder="Mensagem"
                />
                <button 
                    type="submit"
                    disabled={textBTN === "Enviando..." ? true : false}
                > {textBTN} </button>
            </form>
        </section>
    )
}

export default Contact