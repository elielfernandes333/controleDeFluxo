const projectStepsInfo = [];

function createProjectTable() {
    const projectTableBody = document.querySelector('.project-table tbody');
    projectTableBody.innerHTML = '';

    projectStepsInfo.forEach(info => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${info.diaInicial}</td>
            <td>${info.diaFinal}</td>
            <td>${info.professores}</td>
            <td>${info.area}</td>
            <td>${info.duracao}</td>
            <td>R$ ${info.custo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
        `;
        projectTableBody.appendChild(row);
    });
}

function addProjectStep(event) {
    event.preventDefault();

    const diaInicial = document.getElementById('dia-inicial').value;
    const diaFinal = document.getElementById('dia-final').value;
    const professores = document.getElementById('professores').value;
    const area = document.getElementById('area').value;
    const duracao = parseInt(document.getElementById('duracao').value);
    const custo = parseFloat(document.getElementById('custo').value);

    const newStep = {
        diaInicial: diaInicial,
        diaFinal: diaFinal,
        professores: professores,
        area: area,
        duracao: duracao,
        custo: custo
    };

    projectStepsInfo.push(newStep);
    createProjectTable();

    
    document.getElementById('dia-inicial').value = '';
    document.getElementById('dia-final').value = '';
    document.getElementById('professores').value = '';
    document.getElementById('area').value = '';
    document.getElementById('duracao').value = '';
    document.getElementById('custo').value = '';
}

window.addEventListener('DOMContentLoaded', () => {
    createProjectTable();
    const addStepForm = document.getElementById('add-step-form');
    addStepForm.addEventListener('submit', addProjectStep);
});
