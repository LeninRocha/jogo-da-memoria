import { useState } from 'react';
import styles from './Jogador.module.scss'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useRouter } from 'next/router';

function Jogador() {
    const router = useRouter();
    const [level, setLevel] = useState('')
    const [user, setUser] = useState('')
    const [erro, setErro] = useState(false)
    const radios = [
        { name: 'Fácil', value: '5' },
        { name: 'Médio', value: '7' },
        { name: 'Difícil', value: '9' },
    ];
    function handleSubmit(e){
        e.preventDefault();
        
        if(level !== '' && user !== ''){
            localStorage.setItem('jogador', user)
            router.push("/jogo/"+level);
        }else{
            setErro(true)
        }
      }
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Digite o seu nome"
            className={styles.input} 
            value={user} onChange={ (e) => setUser(e.target.value)}
            />

            <ButtonGroup className="mb-2">
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="success"
                        name="radio"
                        value={radio.value}
                        checked={level === radio.value}
                        className={"m1"}
                        onChange={(e) => setLevel(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <button className={styles.btn} type="submit">
                Jogar
            </button>
            {erro && 
                (
                    <div className="erro" style={{padding: 8, color: 'red'}}>Por favor, preencha o campo nome!</div>
                )
            }
        </form>

    )
}
export default Jogador