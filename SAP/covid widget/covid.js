var getPromisify = (url, data, dataType) => {
  return new Promise((resolve, reject) => {
    $.get(url, data, (response, status, xhr) => {
      if (status === 'success') {
        resolve({ response, status, xhr })
      } else {
        const err = new Error('xhr error')
        err.target = xhr
        reject(err)
      }
    }, dataType)
  })
}

(function () {
  const template = document.createElement('template')
  template.innerHTML = `
      <style>
      </style>
      <div id="root" style="width: 100%; height: 100%;">
      </div>
    `
  class MainWebComponent extends HTMLElement {
    // ------------------
    // Scripting methods
    // ------------------
    async get (url, data, dataType) {
      const r = await getPromisify(url, data, dataType)
      return [
        r.response.positiveCasesViral,
        r.response.positiveIncrease,
        r.response.hospitalizedCurrently
      ]
    }
  }

  customElements.define('com-ajax-covid', MainWebComponent)
})()