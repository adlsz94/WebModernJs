/**
 * NODE SCHEDULE
 * 
 * TODO: See the link(s):
 * 
 * https://www.npmjs.com/package/node-schedule
 * 
 * https://www.npmjs.com/package/node-schedule
 * 
 * https://medium.com/@berkekurnaz/develop-a-scheduled-email-system-with-node-schedule-and-nodemailer-9e2ccf647ab6
 * 
 * https://www.luiztools.com.br/post/como-executar-tarefas-agendadas-com-node-schedule/
 * 
 */


const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 47 18 25 7 5', function () {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Tarefa 1 cancelada!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 18
regra.minute = 47
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})