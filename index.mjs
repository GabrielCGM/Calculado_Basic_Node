import inquirer from "inquirer";
import chalk from "chalk";
import { isStringObject } from "util/types";


function main(){
    inquirer.prompt(
        [
            {
                type: 'list',
                name: 'main',
                message: 'Escolha uma das opções abaixo:',
                choices: [
                    'SOMA',
                    'SUBTRAÇÃO',
                    'MULTIPLICAÇÃO',
                    'DIVISÃO',
                    'SAIR'
                ]
            }
        ]
    ).then(
        (respostas) => {
            if (respostas.main == 'SOMA')
            {
                soma()
            }
            else if (respostas.main == 'SUBTRAÇÃO')
            {
                sub()
            } 
            else if (respostas.main == 'MULTIPLICAÇÃO')
            {
                mult()
            } 
            else if (respostas.main == 'DIVISÃO')
            {
                div()
            } 
            else if (respostas.main == 'SAIR')
            {
                process.exit()
            }
        }
    )
}


function soma(){
    inquirer.prompt(
        [
            {
                name: 'n1',
                message: 'Digite um número: '
            },
            {
                name: 'n2',
                message: 'Digite outro número: '
            }

        ]
    ).then(
        (respostas) => {
            if(respostas.n1 != '' && respostas.n2 != '')
            {
                if(isNaN(respostas.n1) && isNaN(respostas.n2)){
                    console.log(chalk.yellow('Digite apenas números'))
                    soma()
                } 
                else 
                {
                const s1 = parseInt(respostas.n1)
                const s2 = parseInt(respostas.n2)
                console.log(s1 + s2)
                main()
                }
            } 
            else 
            {
                console.log(chalk.yellow('Não pode ficar em branco!'))
                soma()
            }
            
        }
    )
}
function sub(){
    inquirer.prompt(
        [
            {
                name: 'n1',
                message: 'Digite um número: '
            },
            {
                name: 'n2',
                message: 'Digite outro número: '
            }
        ]
    ).then(
        (respostas) => {
            if(respostas.n1 != '' && respostas.n2 != '')
            {
                if(isNaN(respostas.n1) && isNaN(respostas.n2)){
                    console.log(chalk.yellow('Digite apenas números'))
                    sub()
                } 
                else 
                {
                const s1 = parseInt(respostas.n1)
                const s2 = parseInt(respostas.n2)
                console.log(s1 - s2)
                main()
                }
            } 
            else 
            {
                console.log(chalk.yellow('Não pode ficar em branco!'))
                sub()
            }
        }
    ).catch(err => console.log(err))
}

function mult(){
    inquirer.prompt(
        [
            {
                name: 'n1',
                message: 'Digite um número: '
            },
            {
                name: 'n2',
                message: 'Digite outro número: '
            }
        ]
    ).then(
        (respostas) => {
            if(respostas.n1 != '' && respostas.n2 != '')
            {
                if(isNaN(respostas.n1) && isNaN(respostas.n2)){
                    console.log(chalk.yellow('Digite apenas números'))
                    mult()
                } 
                else 
                {
                const m1 = parseInt(respostas.n1)
                const m2 = parseInt(respostas.n2)
                console.log(m1 * m2)
                main()
                }
            } 
            else 
            {
                console.log(chalk.yellow('Não pode ficar em branco!'))
                mult()
            }
        }
    )
}

function div(){
    inquirer.prompt(
        [
            {
                name: 'n1',
                message: "Digite um número: "
            },
            {
                name: 'n2',
                message: 'Digite outro número: '
            }
        ]
    ).then(
        (respostas) =>{
            if(respostas.n1 != '' && respostas.n2 != '')
            {
                if(isNaN(respostas.n1) && isNaN(respostas.n2)){
                    console.log(chalk.yellow('Digite apenas números'))
                    div()
                } 
                else 
                {
                const d1 = parseInt(respostas.n1)
                const d2 = parseInt(respostas.n2)
                console.log(d1 / d2)
                main()
                }
            } 
            else 
            {
                console.log(chalk.yellow('Não pode ficar em branco!'))
                div()
            }
        }
    )
}

main()