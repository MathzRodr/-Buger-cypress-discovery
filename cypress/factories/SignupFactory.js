var faker = require('faker')
var cpf = require('gerador-validador-cpf')


export default {

    deliver: function () {

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                cep: '07747275',
                numberHouse: '196',
                complement: 'Casa na Curva',
                street: 'Rua Erminia Amalia Novello Dell Lago',
                district: 'Laranjeiras',
                city_uf: 'Caieiras/SP'
            },
            delivery_method: 'Moto',
            cnh: 'images/cnh-digital.jpg'
        }

        return data

    }

}