import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Bem-vindo a API do servidor FestaFácil ');
});

app.get('/sobre', (req, res) => {
    res.send('Brinquedos, monitores e salão de festas');
});

app.get('/pacotes', (req, res) =>{
    res.json(pacotes);
});

app.use(express.json());
const pacotes = [
    {
        nomePacote1: 'Pequeno',
        convidados: '20',
        valor: 55.50
    },
     {
        nomePacote2: 'Médio',
        convidados: '70',
        valor: 125.25
    },
     {
        nomePacote3: 'Grande',
        convidados: '145',
        valor: 222.50
    }
];

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log('FestaFácil rotas:');
    console.log(`   - http://localhost:${PORT}/`);
    console.log(`   - http://localhost:${PORT}/sobre`);
    console.log(`   - http://localhost:${PORT}/pacotes`);
});