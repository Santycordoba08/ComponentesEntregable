

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-content">

                <button className="google-button">
                    <img src="public/google.png" alt="" />
                    Registrarse con Google
                </button>
                <button className="apple-button">
                    <img src="public/apple.jpg" alt="" />
                    Registrarse con Apple
                </button>
                <div className="or-separator">o</div>
                <button className="create-account-button">Crear cuenta</button>
                <p>
                    Al registrarte, aceptas los <a href="/terms">Términos de servicio</a> y la <a href="/privacy">Política 
                    de privacidad</a>, incluida la política de <a href="/cookies">Uso de Cookies</a>.
                </p>

            </div>
        </div>
    );
};         


export default Login;

