const form = document.getElementById('form');
const dataList = document.getElementById('data-list');

// Função para gerar um ID único
function generateID() {
    return Math.floor(Math.random() * 100000);
}

// Manipulador de evento para adicionar dados ao formulário
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = generateID();
    const name = document.getElementById('name').value;
    const cellphone = document.getElementById('cellphone').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const houseNumber = document.getElementById('houseNumber').value;
    const propertyType = document.getElementById('propertyType').value;
    const cep = document.getElementById('cep').value;
    const datetime = document.getElementById('datetime').value;

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${cellphone}</td>
        <td>${propertyType}, ${houseNumber}, ${neighborhood}, ${city}, ${state}, ${cep}</td>
        <td>${datetime}</td>
        <td>
            <button class="edit-btn">✏️</button>
            <button class="delete-btn">🗑️</button>
            <button class="done-btn">✅</button>
            <button class="fail-btn">❌</button>
        </td>
    `;

    dataList.appendChild(row);

    // Limpa o formulário
    form.reset();
});

// Eventos adicionais para editar, excluir, concluir ou marcar como não concluído
dataList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.classList.contains('done-btn')) {
        e.target.parentElement.parentElement.style.backgroundColor = '#d4edda';
    } else if (e.target.classList.contains('fail-btn')) {
        e.target.parentElement.parentElement.style.backgroundColor = '#f8d7da';
    } else if (e.target.classList.contains('edit-btn')) {
        alert('Função de edição ainda não implementada!');
    }
});
