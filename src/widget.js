class TimberWidget {
  constructor(element) {
    this._element = document.getElementById('timber-element')
    this._body = document.body
    this._timberElement = document.getElementsByClassName('TimberWidget')[0]
  }

  get element() {
    return this._element
  }

  get documentBody() {
    return this._body
  }

  get timberElement() {
    return this._timberElement
  }

  returnOffset(element) {
    let _x = 0
    let _y = 0

    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
      _x += element.offsetLeft - element.scrollLeft
      _y += element.offsetTop - element.scrollTop
      element = element.offsetParent
    }

    return {
      left: _x,
      top: _y
    }
  }

  appendStyles() {
    let styles = `
    .TimberWidget {
      position: absolute;
      top: 50px;
      left: 200px;
      z-index: 999;
      width: 100%;
      max-width: 320px;
      height: 400px;
      background-color: #fff;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      overflow: hidden;
    }

    .TimberWidget-frame {
      position: relative;
      border: 0;
      outline: 0;
      overflow: hidden;
      border-radius: 5px;
      width: 100%;
      height: 100%;
    }
    `

    document.write(`<style type="text/css">${styles}</style>`)
  }

  createElement() {
    let elementFlickPosition = this.returnOffset(this.element)

    let twContainer = document.createElement('div')
    twContainer.classList.add('TimberWidget')
    twContainer.style.left = elementFlickPosition.left + 'px'
    twContainer.style.top = (elementFlickPosition.top + 20) + 'px'
    twContainer.style.transform = "translateX(-50%)"

    let twFrame = document.createElement('iframe')
    twFrame.src = 'https://alexpate.uk'
    twFrame.classList.add('TimberWidget-frame')

    twContainer.appendChild(twFrame)

    this.documentBody.appendChild(twContainer)
  }

  init() {
    this.appendStyles()
    this.createElement()

    console.log(this.returnOffset(this.element))
  }
}

var timberWidget = new TimberWidget()
timberWidget.init()
