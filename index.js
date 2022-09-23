var axios = require("axios");

function salvar(nome, produto, quantidade, valor) {
  axios.post(
    "https://sheetdb.io/api/v1/ywjnvosd8vxm1",
    {
      data: {
        nome: nome,
        produto: produto,
        quantidade: quantidade,
        valor: valor,
      },
    },
    {
      auth: {
        username: "awzui5y8",
        password: "fkl9nkif9vht3jhlltqy",
      },
    }
  );
}

function coletar() {
  axios
    .get("https://sheetdb.io/api/v1/ywjnvosd8vxm1", {
      auth: {
        username: "awzui5y8",
        password: "fkl9nkif9vht3jhlltqy",
      },
    })
    .then((response) => {
      console.log(response.data);
    });
}

function produtoDe(nome) {
  axios
    .get(`https://sheetdb.io/api/v1/ywjnvosd8vxm1/search?nome=${nome}`, {
      auth: {
        username: "awzui5y8",
        password: "fkl9nkif9vht3jhlltqy",
      },
    })
    .then((response) => {
      const data = response.data;
      const usuario = data[0];
      const produto = usuario.produto;
      console.log(response.data);
    });
}

function atualizarProduto(nome, produto) {
  axios
    .patch(
      `https://sheetdb.io/api/v1/ywjnvosd8vxm1/nome/${nome}`,
      {
        data: { produto: produto },
      },
      {
        auth: {
          username: "awzui5y8",
          password: "fkl9nkif9vht3jhlltqy",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    });
}



//salvar("Italo", "Pizza", 1, 50);
//coletar();
//produtoDe("Italo");
//atualizarProduto("Italo", "cheesecake")
//console.log("Compra Efetuada com sucesso");
