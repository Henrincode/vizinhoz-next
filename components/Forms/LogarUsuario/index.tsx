'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaUser, FaLock } from 'react-icons/fa';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.trim(), password }),
        });

        const data = await res.json();
        if (!res.ok) {
            setError(data?.error || 'Erro ao logar');
            return;
        }
        // cookie HttpOnly foi setado pela rota, agora podemos redirecionar
        router.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit} className="
            flex
            flex-col
            gap-4
            max-w-100
            mx-auto
            mt-6
            p-2
            rounded-xl
            bg-white

            [&_.fLinha]:flex
            [&_.fLinha]:flex-row
            [&_.fLinha]:flex-wrap
            [&_.fLinha]:gap-4

            [&_.fGrupo]:flex-1
            [&_.fGrupo]:flex
            [&_.fGrupo]:flex-col
            [&_.fGrupo]:flex-wrap
            [&_.fGrupo]:gap-1

            [&_label]:flex
            [&_label]:flex-row
            [&_label]:items-center
            [&_label]:gap-1
            [&_label]:pl-2
            [&_label]:font-bold
            [&_label]:text-sm
            [&_label]:text-gray-400

            [&_input]:min-w-60
            [&_input]:w-full
            [&_input]:p-3
            [&_input]:border-3
            [&_input]:rounded-xl
            [&_input]:border-blue-200
            [&_input]:hover:border-blue-500
            [&_input]:focus:border-blue-500
            [&_input]:outline-none
            [&_input]:resize-none

            [&_.botao]:px-2
            [&_.botao]:py-1
            [&_.botao]:rounded-xl
            [&_.botao]:text-white
            [&_.botao]:cursor-pointer
        ">
            <div className="fGrupo">
                <label htmlFor=""><FaUser /> Username</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            </div>
            <div className="fGrupo">
                <label htmlFor=""><FaLock /> Senha</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" type="password" />
            </div>
            <div className="flex flex-row justify-center gap-4">
                <button className="botao bg-blue-600 hover:bg-blue-900">Logar</button>

                <Link href="/cadastrar" className="botao bg-green-600 hover:bg-green-900">Cadastrar</Link>

            </div>
        </form>
    )
}