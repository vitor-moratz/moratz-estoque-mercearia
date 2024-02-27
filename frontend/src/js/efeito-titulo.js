new TypeIt('#span', {
    loop: true,
    waitUntilVisible: true,
    speed: 150,
}).type('Estoque', {delay:800}).delete()
.type('Produtos', {delay:600}).delete()
.go()