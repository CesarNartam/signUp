import Input from "../components/Input"
import "../assets/styles/Form.css"

const Form = () => {
    return(
        <form className="formulario">
            <Input type='text' name="name" label="Nombre:    " placeholder="Introduce tu nombre aquí" />
            <br></br>
            <Input type='email' name="email" label="E-mail:    " placeholder="example@email.com" />
            <br></br>
            <Input type='password' name="password" label="Contraseña:    " placeholder="password" />
            <br></br>
            <Input type='date' name="color" label="Fecha de nacimiento:    " />
            <br></br>
            <Input type='tel' label="Número telefónico:    " />
            <br></br>
            <Input type='checkbox' name="conditions" label="Aceptar términos y condiciones    " />
            <br></br>
            <Input type='submit' value="Enviar" />
            <Input type='reset' value="Reiniciar formulario"/>
            <br></br>     
        </form>
    )
}
export default Form