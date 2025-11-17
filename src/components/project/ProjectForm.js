import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/Submit';
import styles from './ProjectForm.module.css'
import {useEffect, useState } from 'react';

function ProjectForm({handleSubmit, btnText, projectData}){
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then((data)=>{
        setCategories(data)
    }).catch((err)=>console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({...project, [e.target.name]: e.target.value})
        }

    function handleCategory(e){
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name:e.target.options[e.target.selectedIndex].text,
            },
    })
    }
    return(
            <form className={styles.form} onSubmit={submit}>
                <Input text="Nome do projeto"
                type="text" 
                name="name" 
                placeholder="Insira o nome do projeto" 
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}/>

                <Input text="Orçamento do Projeto" 
                type="number" 
                name="budget" 
                placeholder="Insira orçamento total" 
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}/>
               
                <Select text="Selecione a Opção" 
                name="category_id" 
                options={categories} 
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}/>

                <SubmitButton text={btnText}/>
            </form>
    )
}

export default ProjectForm;