import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm({ handleSubmit, btnText, projectData }) {


    const [categories, setCategories] = useState([])

    //PARA VER SE OS DADOS VEM PARA INICIALIZAR ELES OU NAo
    const [project, setProject] = useState(projectData || {})

    //hook para enviar apenas a requisição quando precisar, se nao utilizar, envia varias requisições
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
        //console.log(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })  //pegar os dados do projeto, pegar o nome do input = vai mudar a informação independente do que for preencher
        console.log(project)
    }

    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
        console.log(project)
    }


    return (
        <form onSubmit={submit} className={styles.form}>
            <Input handleOnChance={handleChange}
                type="text" text="Nome do Projeto" name="name"
                placeholder="Insira o nome do projeto"/>

            <Input handleOnChance={handleChange}
                type="number" text="Orçamento do Projeto" name="budget"
                placeholder="Insira o orçamento do projeto" />

            <Select handleOnChance={handleCategory}
                name="category_id" text="Selecione a categoria"
                options={categories} value={project.category ? project.category.id : ''} />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm