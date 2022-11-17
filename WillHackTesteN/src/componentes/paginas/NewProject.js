import {useNavigate} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'
function NewProject() {
    const navigate = useNavigate()
    function createPost(project) {
        //inicializando o cost e o serviçe
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects",{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(project)
        
        } )
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            navigate('/projects',{state: {message: 'Projeto criado com sucesso'}})
        })
        .catch((err) => console.log(err))
    }
    return ( 
        <div className={styles.newprojectContainer}>
            <h1>Criar Projeto</h1>
            <p>Crie o seu projeto para depois adicionar o seu serviço</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar Projeto'/>
        </div>
     );
}

export default NewProject;