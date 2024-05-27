import _ from 'lodash';

const mhs = [
    {nama: 'Raka Dks', email: 'dwiksraka@gmail.com'},
    {nama: 'satrio pambudi', email: 'satrio@gmail.com'},
    {nama: 'aditya yudhis', email: 'aditiya@gmail.com'},
]

const a = _.find(mhs, { nama: 'Raka Dks' });
console.log(a);