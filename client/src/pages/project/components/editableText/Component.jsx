import React from 'react';

class EditableText extends React.Component {
  constructor(props) {
    super(props);
    // Cria uma referência para o elemento com contentEditable
    this.editableRef = React.createRef();
  }

  // Define um método para lidar com o evento de keydown
  handleKeyDown = (event) => {
    // Verifica se a tecla pressionada é o enter (código 13)
    if (event.keyCode === 13) {
      // Cancela o comportamento padrão do navegador
      event.preventDefault();
    }
  }

  // Define um método para lidar com o evento de input
  handleInput = (event) => {
    // Obtém o novo valor do elemento
    let newValue = event.target.textContent;
    // Chama a função handleChange passando o novo valor como argumento
    this.handleChange(newValue);
  }

  // Define a função handleChange que faz alguma ação com o novo valor
  handleChange = (newValue) => {
    // Aqui você pode fazer o que quiser com o novo valor, como atualizar o estado, enviar para uma API, etc.
    console.log("O novo valor é: " + newValue);
  }

  // Adiciona um listener para o evento de keydown quando o componente é montado
  componentDidMount() {
    this.editableRef.current.addEventListener("keydown", this.handleKeyDown);
    // Adiciona um listener para o evento de input quando o componente é montado
    this.editableRef.current.addEventListener("input", this.handleInput);
  }

  // Remove o listener para o evento de keydown quando o componente é desmontado
  componentWillUnmount() {
    this.editableRef.current.removeEventListener("keydown", this.handleKeyDown);
    // Remove o listener para o evento de input quando o componente é desmontado
    this.editableRef.current.removeEventListener("input", this.handleInput);
  }

  render() {
    return (
      <p contentEditable="true" ref={this.editableRef}>{this.props.children}</p>
    );
  }
}

export default EditableText;