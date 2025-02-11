import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://localhost:3000", // Permite requisições do frontend
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true // Permite envio de cookies e autenticação
}));

app.use(express.json()); // Permite receber JSON nas requisições

// **Rota raiz**
app.get("/", (req, res) => {
  res.send("Servidor backend rodando com CORS configurado!");
});

// **Rota de login (simulação)**
app.post("/api/auth/login", (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email e senha são obrigatórios!" });
    }

    if (email === "teste@email.com" && password === "123456") {
      return res.json({ message: "Login bem-sucedido!", token: "fake-token-123" });
    }

    res.status(401).json({ message: "Credenciais inválidas!" });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
});

// **Rota de registro (simulação)**
app.post("/api/auth/register", (req, res) => {
  try {
    const { nome, email, password } = req.body;

    if (!nome || !email || !password) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    // Simulação de sucesso no cadastro
    res.status(201).json({ message: "Registro bem-sucedido!", user: { nome, email } });
  } catch (error) {
    console.error("Erro no registro:", error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
});

// **Rota para buscar dados do usuário**
app.get("/api/user", (req, res) => {
  try {
    res.json({ id: 1, nome: "Leonardo", email: "leonardo@email.com" });
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
});

// **Tratamento global de erros**
app.use((err, req, res, next) => {
  console.error("Erro no servidor:", err);
  res.status(500).json({ message: "Erro interno no servidor." });
});

// **Inicia o servidor**
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
