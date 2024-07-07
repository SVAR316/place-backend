async function start() {
  const versionText = document.getElementById('version')
  const body = document.getElementById('content')

  const {result} = await getInfo()

  versionText.innerText = result.version

  parserAndDisplayApi(result.api, body)

  console.log(result)
}


function parserAndDisplayApi(api, body){

  let html = ''

  api.categories.forEach(category => {
    html = html + `<p>${category} controller</p>`
    api.functions.forEach(item => {
      if(item.controller === category){
        html = html +
                    `<div>
                        <p>${item.name} - ${item.method}</p>
                        ${typeof item.required != 'undefined' ? '<p>' + item.required + '</p>' : ''}
                        ${parserError(item.errors)}
                    </div>`
      }
    })
  })

  body.innerHTML = html
}

function parserError(errors) {
  let html = ''

  errors.forEach(error => {
    html = html +
                `
                    <p>Код ошибки: ${error.code}</p>
                    <p>Причина ошибки: ${error.message}</p>
                `
  })

  return html
}


async function getInfo() {

  return (await fetch('http://localhost:5000/api/getAllFunctions')).json()

}

start()