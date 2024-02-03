class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarTabelaAtendimentos()
  }

  criarTabelaAtendimentos() {
    const sql = `        
        CREATE TABLE if not exists atendimentos (
            id int not null auto_increment primary key,
            data date,
            servico varchar(100),
            cliente varchar(100),
            status enum('ativo', 'realizado', 'cancelado') default 'ativo'    
        );
        `;
        this.conexao.query(sql, (error) => {
            if(error){
                console.log("erro na hora de criar a tabela")
                console.log(error.message)
                return;
            }
            console.log("show, tabela criada com sucesso")
        })
  }
}

module.exports = new Tabelas()
