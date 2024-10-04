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
    html = html + `<p class="api__category">${category} controller</p>`
    api.functions.forEach(item => {
      if(item.controller === category){
        html = html +
                    `<div class="api-content">
                        <p class="api-content__title">${item.name} - ${item.method}</p>
                        
                          ${typeof item.required != 'undefined' ?
                          '<div class="api-required">' + 
                            parserRequired(item.required) +
                          '</div>'
                          : ''}
                        ${parserError(item.errors)}
                    </div>`
      }
    })
  })

  body.innerHTML = html
}

function parserRequired(required){
  let html = ''

  if(typeof required !== 'undefined'){
    required.forEach(item => {
      html = html + "<p>" + item.name + ": " + item.type +  ";</p>"
    })
    return html
  }
  else return html
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

  return (await fetch('http://localhost:5009/api/getAllFunctions')).json()

}

start()