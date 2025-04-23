document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-despesa');

  form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const desc = document.getElementById('desc').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const data = document.getElementById('data').value;
    const categoria = document.getElementById('categoria').value;

    const despesa = { desc, valor, data, categoria };

    try {
      const response = await fetch('/api/despesas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(despesa)
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Despesa adicionada:', data);
      } else {
        alert('Erro ao adicionar despesa');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na requisição');
    }
  });
});
