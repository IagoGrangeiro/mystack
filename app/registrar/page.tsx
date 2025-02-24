"use client";
import Link from "next/link";
import { useState } from "react";
import { registerUser } from "../actions/actions";

export default function Registrar() {
    const [isChecked, setIsChecked] = useState(false);

    const comutarRegistro = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }): void => {
        setIsChecked(event.target.checked)
    }
    
    return (
        <main className="h-screen flex items-center justify-center">
            
            <form
                className="w-fit grid border rounded-md"
                action={registerUser}
            >
                <div className="bg-slate-300 rounded-t-md mb-2 p-2 text-center">Formulário de Registro</div>
                <label
                    htmlFor=""
                    className="mb-2 mx-2"
                >
                    Usuário
                </label>
                <input
                    type="text"
                    name="username"
                    className="border rounded-md px-2 py-1 mb-2 mx-2"
                />
                <label
                    htmlFor=""
                    className="mb-2 mx-2"
                >
                    E-mail
                </label>
                <input
                    type="email"
                    name="email"
                    className="border rounded-md px-2 py-1 mb-2 mx-2"
                />
                <label
                    htmlFor=""
                    className="mb-2 mx-2"
                >
                    Data de Nascimento
                </label>
                <input
                    type="date"
                    name="born"
                    className="border rounded-md px-2 py-1 mb-2 mx-2"
                />
                <label
                    htmlFor=""
                    className="mb-2 mx-2"
                >
                    Senha
                </label>
                <input
                    type="password"
                    name="password"
                    className="border rounded-md px-2 py-1 mb-2 mx-2"
                />
                <label
                    htmlFor=""
                    className="mb-2 mx-2"
                >
                    Confirmação a senha
                </label>
                <input
                    type="password"
                    name="password"
                    className="border rounded-md px-2 py-1 mb-2 mx-2"
                />
                <p className="mb-2 mx-2">
                    <input
                        checked={isChecked}
                        onChange={comutarRegistro}
                        type="checkbox"
                        name="terms"
                        className="mr-1"
                    />
                    Li e aceito os
                    <Link
                        className="underline decoration-sky-300 text-sky-300 mx-1 hover:decoration-sky-600 hover:text-sky-600"
                        href="/termos"
                        target="_blank"
                    >
                        termos
                    </Link>
                    de uso.
                </p>
                <input
                    type="submit"
                    className="bg-slate-300 hover:bg-slate-600 hover:text-white w-fit p-2 mb-2 rounded-md cursor-pointer mx-auto disabled:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed"
                    value="Enviar"
                    disabled={!isChecked}
                />
            </form>
        </main>
    );
}