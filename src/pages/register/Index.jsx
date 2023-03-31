import axios from 'axios';
import React, { useState } from 'react'
import { registerFetch } from '../../axios/config';
import "./Styles.css"


const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const validaNome = "^[a-zA-ZÀ-ÖØ-öø-ÿ ]{1,50}$"
  const validaEmail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$"

  const changeName = (e) => {
    setNome(e.target.value);
  }

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }

  const changeSenha = (e) => {
    setSenha(e.target.value);
  }

  async function fazerRequisicao() {
    try {
      const response = await axios.post("http://localhost:3000/usuarios/sign-up", {
       nome,
       email,
       senha
      });
      console.log(response.status);
      if(response.status===200){
        setNome('')
        setEmail('')
        setSenha('')
        alert("Usuário cadastrado com sucesso!");
      }
    } catch (error) {
      console.error(error);
    }
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fazerRequisicao();
  }

  return (
    <div className='area-register'>
      <form className='item-form' onSubmit={handleSubmit}>
        <div className="item-input">
          <h3 className='titulo-form'>Cadastre-se</h3>
        </div>
        <div className="item-input">
          <span className='text-input'>Nome</span>
          <input className='input-item' type="text" value={nome} onChange={changeName} required pattern={validaNome}/>
        </div>
        <div className="item-input">
          <span className='text-input'>Email</span>
          <input className='input-item' type="email" value={email} onChange={changeEmail} required pattern={validaEmail}/>
        </div>
        <div className="item-input">
          <span className='text-input'>Senha</span>
          <input className='input-item' type="password" value={senha} onChange={changeSenha} required />
        </div>
        {/* <div className="item-input">
          <span className='text-input'>Confirmar senha</span>
          <input className='input-item' type="password" />
        </div> */}
        <input className='botao-cadastro' type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default Register;