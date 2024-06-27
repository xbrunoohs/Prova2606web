const Transacoes = (props) => {
  return (
    <div>
      <body>
        <main>
          <section id="page-name">
            <h2>Transações</h2>
          </section>

          <section>
            <table>
              <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Entrada</th>
                <th>Saída</th>
                <th>Total</th>
              </tr>
              <tr>
                <th>1</th>
                <th>Salário</th>
                <th>5000</th>
                <th>0</th>
                <th>5000</th>
              </tr>
              <tr>
                <td>2</td>
                <td>Aluguel</td>
                <td>0</td>
                <td>1500</td>
                <td>-1500</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Supermercado</td>
                <td>0</td>
                <td>300</td>
                <td>-300</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Internet</td>
                <td>0</td>
                <td>100</td>
                <td>-100</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Transporte</td>
                <td>0</td>
                <td>150</td>
                <td>-150</td>
              </tr>
            </table>
          </section>
        </main>
      </body>
    </div>
  )
}

export default Transacoes;