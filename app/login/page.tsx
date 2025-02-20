import Link from "next/link";

export default function Login() {
    return (
        <main className="h-screen flex items-center justify-center">
            <form
                className="w-fit grid border rounded-md"
            >
                <div className="bg-slate-300 rounded-t-md mb-2 p-2 text-center">Formulário de Login</div>
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
                    Senha
                </label>
                <input
                    type="password"
                    name="password"
                    className="border rounded-md px-2 py-1 mb-2 mx-2"
                />
                <input
                    type="submit"
                    className="bg-slate-300 hover:bg-slate-600 hover:text-white w-fit p-2 mb-2 rounded-md cursor-pointer mx-auto"
                    value="Enviar"
                />
                <p className="mx-2 mb-2">
                    Ainda não possui conta?
                    <Link
                        className="underline decoration-sky-300 text-sky-300 ml-1 hover:decoration-sky-600 hover:text-sky-600"
                        href="/registrar"
                    >
                        Registre-se aqui!
                    </Link>
                </p>
            </form>
        </main>
    )
}