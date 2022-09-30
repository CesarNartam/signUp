import "../assets/styles/Input.css"

const Input = ({type, name, label, value, placeholder}) =>{
    return (
    <label>
        {label}
        <input
            type = {type}
            name = {name}
            value = {value}
            placeholder = {placeholder}
        />
    </label>
    );
}
export default Input