(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <h1>Hello World</h1>
    `;

    customElements.define('com-sap-sample-helloworld1', class HelloWorld1 extends HTMLElement {

        // this is a standard web components callback and is called once, at initial widget instantiation. 
        // In our template, it is where we attach out template to the shadow DOM. Fired first time only.
		constructor() {
			super(); 
			this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		}

        // Fired when the widget is added to the html DOM of the page and every time the widget is brought into focus.
        // this a standard web components callback and is fired whenever the widget is added to the HTML DOM. 
        // It should not be confused with the constructor(), which is fired the first time only. This callback is fired every time. 
        // So if the page where your widget lives is brought into focus and the widget is added to the DOM, this event will fire.
        connectedCallback(){
        }

        // Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        // It is also fired when the widget is deleted from the DOM; such as when the panel that is lives in is closed or the user switched to another page, etc.
        disconnectedCallback(){
        
        }

        // When the custom widget is updated, the Custom Widget SDK framework executes this function first
        // When properties are changed, this callback is called BEFORE they are actually changed.
		onCustomWidgetBeforeUpdate(oChangedProperties) {

		}

        // When the custom widget is updated, the Custom Widget SDK framework executes this function after the update.
        // When properties are changed, this callback is called AFTER they are actually changed.
		onCustomWidgetAfterUpdate(oChangedProperties) {
            this.redraw();
        }
        
        // When the custom widget is removed from the canvas or the analytic application is closed
        // This is the mirror image of constructor().
        onCustomWidgetDestroy(){
        }

        
        // When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        // Commented out by default
        // this callback is fired whenever the widget is resized when it is active. So if it is currently hidden when the sheet is resized for example, it won’t fire. 
        // You may want to re-check dimensions in the connectedCallback event as well().  If you don’t need it, we suggest commenting it out to save CPU.  
        // If it is enabled, SAP Analytics cloud will track DOM size changes and call this method as needed.
        /*
        onCustomWidgetResize(width, height){
        }
        */

        // this method is not a custom widget framework callback. I included a stub to this method in the template, 
        // because this is the pattern that I use in my own widgets. There are many callbacks that could trigger re-rendering; 
        // so I centralise the redraw in a single method and call that method whenever I need to update the widget in the canvas.
        redraw(){}
    });
})();