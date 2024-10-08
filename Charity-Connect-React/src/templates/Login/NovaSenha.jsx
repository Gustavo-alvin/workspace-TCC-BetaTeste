import { useState } from "react";
import CadastroService from "../../services/CadastroService";

const NovaSenha = () => {
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleReset = async () => {
        try {
            const response = await CadastroService.resetPassword(token, newPassword); // 'token' deve ser extraído da URL
            setMessage(response);
        } catch (error) {
            setMessage('Erro ao redefinir a senha. Tente novamente.');
        }
    };

    return (
        <form onSubmit={handleReset}>
            <input 
                type="password" 
                value={newPassword} 
                onChange={(e) => setNewPassword(e.target.value)} 
                placeholder="Nova senha" 
                required 
            />
            <button type="submit">Redefinir Senha</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default NovaSenha;