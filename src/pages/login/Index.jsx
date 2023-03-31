import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validaEmail = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$"
    

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changeSenha = (e) => {
        setSenha(e.target.value);
    }

    async function fazerRequisicao() {
        let dadosUsuario = null
        try {
            const response = await axios.post("http://localhost:3000/usuarios/sign-in", {
                email,
                senha
            });

            console.log(response.data);
            
            dadosUsuario = response.data;
            
            console.log(dadosUsuario.id);
            if (response.status === 200 && dadosUsuario.id !== undefined) {
                setEmail('')
                setSenha('')
                alert("Usuário cadastrado com sucesso!");
            }else{
                alert("Usuário não encontrado!")
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
        <div>
            <div className='area-register'>
                <form className='item-form' onSubmit={handleSubmit}>
                    <div className="item-input">
                        <h3 className='titulo-form'>Faça o login em sua conta</h3>
                    </div>

                    <div className="item-input">
                        <span className='text-input'>Email</span>
                        <input className='input-item' type="email" value={email} onChange={changeEmail} required pattern={validaEmail} />
                    </div>
                    <div className="item-input">
                        <span className='text-input'>Senha</span>
                        <input className='input-item' type="password" value={senha} onChange={changeSenha} required />
                    </div>
                    {/* <div className="item-input">
          <span className='text-input'>Confirmar senha</span>
          <input className='input-item' type="password" />
        </div> */}
                    <input className='botao-cadastro' type="submit" value="Entrar" />
                </form>
            </div>
        </div>
    )
}

export default Login