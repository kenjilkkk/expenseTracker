/*document.addEventListener('DOMContentLoaded', function() {
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

		})

	document.querySelectorAll('.despesa-item').forEach((item) => {
		const index = item.dataset.index;
	})	


	const deleteData = document.getElementById('delete');

	deleteData.addEventListener("submit", async function {
		console.log(index);	
		try {
			const responseDelete = fetch(`/editar/${index}`);

			const dataDelete = await reponseDelete.json();

			if(dataDelete.ok) {
				setTimeout(() => {
					window.location.href = '/';
				},200);
				}
			}catch(e) {
				console.log(e);
			}
	})

});*/

	document.addEventListener('DOMContentLoaded', function() {
  // Submissão de nova despesa
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
				setTimeout(() => {
					window.location.reload(); // recarrega a página pra ver a nova despesa
				},200)
      } else {
        alert('Erro ao adicionar despesa');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na requisição');
    }
  });

  // Deletar despesa
  document.querySelectorAll('.despesa-item').forEach((item) => {
    const index = item.dataset.index;

    const deleteForm = item.querySelector('form[action^="/deletar"]');

    if (deleteForm) {
      deleteForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        try {
          const response = await fetch(`/deletar/${index}`, {
            method: 'DELETE',
          });

          if (response.ok) {
            console.log('Despesa deletada:', index);
						setTimeout(() => {
							window.location.reload(); // recarrega pra atualizar a lista
						},200)
          } else {
            alert('Erro ao deletar despesa');
          }
        } catch (e) {
          console.log('Erro ao deletar:', e);
        }
      });
    }
  });
});

