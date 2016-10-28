'use strict'
const co = require('co')
const prompt = require('co-prompt')
const config  = require('../tmplates')
const chalk = require('chalk')
const fs = require('fs')

 
let add = ()=>{
	co(function* (){
			//分步接受用户输入的参数
		let tplName = yield prompt('template name:')
		let gitUrl =  yield prompt('git https link:')
		let branch  = yield prompt('branch:')

		//避免重复添加
		if(config.tpl[tplname]){
			config.tpl[tplname]={}
			config.tpl[tplname].['url']=gitUrl.replace(/[\u0000-\u0019]/g, '')//过滤unicode字符
			config.tpl[tplname].['branch']=branch
		}else{
			console.log(chalk.red('template has aleady existed!'))
			process.exit();

		}

		//把模版写入templates.json
		fs.writeFile(__dirname +'/../tmplates.json',JOSN.stringify(config),'utf-8',(err)=>{
			if(err)console.error(err)
				console.log(chalk.green('New template '+ tplName+ ' added!\n'))
				console.log(chalk.grey('the last  template list is:'+ tplName+ ' added!\n'))
				console.log(chalk.blue(config))
				console.log('\n')
				process.exit();

		})

	}	
		)
}

module.export = add;