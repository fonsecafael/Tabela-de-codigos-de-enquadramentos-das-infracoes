$(document).ready(function() {
    $('#infracoesTable').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "language": {
            "search": "Pesquisar:",
            "zeroRecords": "Nenhum registro encontrado",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
            "infoEmpty": "Mostrando 0 de 0 registros",
            "infoFiltered": "(filtrado de _MAX_ registros no total)",
            "paginate": {
                "first": "Primeiro",
                "last": "Último",
                "next": "Próximo",
                "previous": "Anterior"
            }
        }
    });
});